// Conecta 60+ | CP2: lógica do quiz (JSON, fluxo, pontuação, ranking e acessibilidade).
// O script é carregado também em index.html, então só roda quando o quiz existe na página.
(() => {
  const app = document.getElementById("quiz-app");
  if (!app) return;

  const URL_PERGUNTAS = "dados/perguntas.json";
  const CHAVE_RANKING = "ranking";
  const LETRAS = ["A", "B", "C", "D", "E", "F"];

  const $ = (id) => document.getElementById(id);
  const telas = { inicio: $("tela-inicio"), pergunta: $("tela-pergunta"), fim: $("tela-fim") };

  const estado = { perguntas: [], nome: "", indice: 0, pontos: 0, respondida: false };

  // ---------- Ranking (sessionStorage) ----------
  function lerRanking() {
    try {
      const dados = JSON.parse(sessionStorage.getItem(CHAVE_RANKING));
      return Array.isArray(dados) ? dados : [];
    } catch (erro) {
      return [];
    }
  }

  function salvarRanking(ranking) {
    try {
      sessionStorage.setItem(CHAVE_RANKING, JSON.stringify(ranking));
    } catch (erro) {
      // Sem sessionStorage (modo restrito): o ranking vale só até a página fechar.
    }
  }

  // ---------- Telas ----------
  function mostrarTela(nome, focoId) {
    Object.entries(telas).forEach(([chave, el]) => { el.hidden = chave !== nome; });
    const alvo = $(focoId);
    if (alvo) alvo.focus();
  }

  function mostrarErroCarregamento(mensagem) {
    const caixa = $("load-error");
    caixa.textContent = mensagem;
    caixa.hidden = false;
    Object.values(telas).forEach((el) => { el.hidden = true; });
  }

  // ---------- Carregamento do JSON ----------
  function perguntaValida(p) {
    return p && typeof p.pergunta === "string" && Array.isArray(p.alternativas)
      && p.alternativas.length >= 2 && Number.isInteger(p.resposta)
      && p.resposta >= 0 && p.resposta < p.alternativas.length
      && typeof p.explicacao === "string" && typeof p.fonte === "string";
  }

  async function carregarPerguntas() {
    if (location.protocol === "file:") {
      throw new Error("arquivo-local");
    }
    const resposta = await fetch(URL_PERGUNTAS);
    if (!resposta.ok) throw new Error("http-" + resposta.status);
    const dados = await resposta.json();
    if (!Array.isArray(dados) || dados.length === 0 || !dados.every(perguntaValida)) {
      throw new Error("formato");
    }
    return dados;
  }

  // ---------- Fluxo do jogo ----------
  function iniciarPartida() {
    estado.indice = 0;
    estado.pontos = 0;
    mostrarPergunta();
  }

  function mostrarPergunta() {
    const p = estado.perguntas[estado.indice];
    const total = estado.perguntas.length;
    estado.respondida = false;

    $("question-number").textContent = "Pergunta " + (estado.indice + 1) + " de " + total;
    $("score-live").textContent = "Pontos: " + estado.pontos;
    $("question-title").textContent = p.pergunta;

    const lista = $("answer-list");
    lista.replaceChildren();
    p.alternativas.forEach((texto, i) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "answer-option";
      botao.dataset.indice = String(i);

      const letra = document.createElement("span");
      letra.className = "option-letter";
      letra.setAttribute("aria-hidden", "true");
      letra.textContent = LETRAS[i];

      const conteudo = document.createElement("span");
      conteudo.className = "option-text";
      conteudo.textContent = texto;

      const marca = document.createElement("span");
      marca.className = "option-mark";

      botao.append(letra, conteudo, marca);
      botao.addEventListener("click", () => responder(i));
      lista.appendChild(botao);
    });

    const feedback = $("feedback");
    feedback.hidden = true;
    feedback.replaceChildren();
    $("btn-proxima").hidden = true;

    mostrarTela("pergunta", "question-title");
  }

  function responder(escolhida) {
    if (estado.respondida) return;
    estado.respondida = true;

    const p = estado.perguntas[estado.indice];
    const acertou = escolhida === p.resposta;
    if (acertou) estado.pontos += 1;
    $("score-live").textContent = "Pontos: " + estado.pontos;

    // Marca as alternativas com texto + borda (a cor nunca é a única pista).
    document.querySelectorAll(".answer-option").forEach((botao) => {
      const i = Number(botao.dataset.indice);
      const marca = botao.querySelector(".option-mark");
      botao.setAttribute("aria-disabled", "true");
      if (i === p.resposta) {
        botao.classList.add("is-correct");
        marca.textContent = i === escolhida ? "✓ Sua resposta (correta)" : "✓ Resposta correta";
      } else if (i === escolhida) {
        botao.classList.add("is-wrong");
        marca.textContent = "✗ Sua resposta (incorreta)";
      }
    });

    // Feedback textual: resultado, explicação e fonte.
    const feedback = $("feedback");
    feedback.className = "feedback-box " + (acertou ? "is-correct" : "is-wrong");

    const titulo = document.createElement("strong");
    titulo.textContent = acertou
      ? "Resposta correta ✓"
      : "Incorreta ✗ — a certa era " + LETRAS[p.resposta];

    const explicacao = document.createElement("p");
    explicacao.textContent = p.explicacao;

    const fonte = document.createElement("p");
    const link = document.createElement("a");
    link.href = p.fonte;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = p.fonte.replace(/^https?:\/\//, "");
    fonte.append("Fonte: ", link, " (abre em nova aba)");

    feedback.replaceChildren(titulo, explicacao, fonte);
    feedback.hidden = false;

    const proxima = $("btn-proxima");
    const ultima = estado.indice === estado.perguntas.length - 1;
    proxima.textContent = ultima ? "Ver resultado" : "Próxima pergunta →";
    proxima.hidden = false;
    proxima.focus(); // teclado: Enter já avança
  }

  function avancar() {
    if (estado.indice < estado.perguntas.length - 1) {
      estado.indice += 1;
      mostrarPergunta();
    } else {
      finalizar();
    }
  }

  function finalizar() {
    const ranking = lerRanking();
    const entrada = { nome: estado.nome, pontos: estado.pontos, total: estado.perguntas.length, id: Date.now() + "-" + ranking.length };
    ranking.push(entrada);
    // Maior pontuação primeiro; em empate, quem jogou antes fica na frente (sort é estável).
    ranking.sort((a, b) => b.pontos - a.pontos);
    salvarRanking(ranking);

    $("resumo-final").textContent = estado.nome + ", você acertou " + estado.pontos + " de " + estado.perguntas.length + " perguntas.";

    const corpo = $("ranking-corpo");
    corpo.replaceChildren();
    ranking.slice(0, 10).forEach((item, i) => {
      const linha = document.createElement("tr");
      const atual = item.id === entrada.id;
      if (atual) linha.className = "is-current";
      const pos = document.createElement("td");
      pos.textContent = (i + 1) + "º";
      const nome = document.createElement("td");
      nome.textContent = item.nome + (atual ? " (esta partida)" : "");
      const pontos = document.createElement("td");
      pontos.textContent = item.pontos + " de " + item.total;
      linha.append(pos, nome, pontos);
      corpo.appendChild(linha);
    });

    mostrarTela("fim", "titulo-fim");
  }

  // ---------- Eventos ----------
  $("form-nome").addEventListener("submit", (evento) => {
    evento.preventDefault();
    const campo = $("campo-nome");
    const nome = campo.value.trim();
    if (!nome) {
      $("nome-erro").textContent = "Por favor, digite seu nome para começar.";
      campo.setAttribute("aria-invalid", "true");
      campo.focus();
      return;
    }
    $("nome-erro").textContent = "";
    campo.removeAttribute("aria-invalid");
    estado.nome = nome;
    iniciarPartida();
  });

  $("btn-proxima").addEventListener("click", avancar);
  $("btn-replay").addEventListener("click", iniciarPartida);
  $("btn-trocar").addEventListener("click", () => {
    $("campo-nome").value = "";
    mostrarTela("inicio", "campo-nome");
  });

  // ---------- Inicialização ----------
  // Telas ficam ocultas até o JSON carregar, para ninguém jogar sem perguntas.
  Object.values(telas).forEach((el) => { el.hidden = true; });
  carregarPerguntas()
    .then((dados) => {
      estado.perguntas = dados;
      telas.inicio.hidden = false;
    })
    .catch((erro) => {
      const local = erro.message === "arquivo-local" || erro instanceof TypeError;
      mostrarErroCarregamento(local
        ? "Não foi possível carregar as perguntas. Abra o quiz pelo site publicado ou por um servidor local (por exemplo, a extensão Live Server do VS Code), e não direto do arquivo."
        : "Não foi possível carregar as perguntas agora. Atualize a página e tente novamente.");
    });
})();
