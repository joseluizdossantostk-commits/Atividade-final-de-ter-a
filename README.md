# Conecta 60+ — TechQuiz

Quiz educativo sobre uso da internet e segurança digital, pensado para ajudar pessoas idosas a navegar com mais confiança e autonomia.

Trabalho em grupo da disciplina **Desenvolvimento Front-end para Web** — CP3 (entrega final).

- **Site publicado:** PREENCHER com o link HTTPS do GitHub Pages.
- **Repositório:** PREENCHER ou conferir o endereço do repositório do grupo.
- **Versão da entrega:** tag `cp3-entrega`.

## Tema e objetivo

O tema é **habilidades digitais e segurança na internet para pessoas idosas**, incluindo comunicação, pesquisa de informações, proteção de contas e prevenção de golpes.

**Motivo da escolha do tema:** completar com a justificativa discutida pelo grupo para a apresentação.

## Integrantes e contribuições

Preencher os papéis de acordo com o trabalho realmente realizado por cada integrante.

| Integrante | Contribuição no projeto |
|---|---|
| Felipe Gomes Figueiredo dos Santos | PREENCHER |
| Igor da Silva Pedrosa | PREENCHER |
| José Luiz dos Santos | PREENCHER |
| Leonan Vieira Alves | PREENCHER |
| Luiz Henrique Domingues dos Santos | PREENCHER |
| Pedro Henrique Rodrigues Beltran | PREENCHER |

## Regras do quiz

1. Digite seu nome para começar. O nome é obrigatório e pode ter até 30 caracteres.
2. O quiz apresenta **12 perguntas**, uma por vez, com quatro alternativas cada.
3. Cada resposta correta vale um ponto.
4. Depois de responder, o jogador recebe o resultado, uma explicação e um link para a fonte da informação.
5. Ao terminar, são exibidos a pontuação e o ranking da sessão.
6. O ranking é ordenado da maior para a menor pontuação. Em caso de empate, a partida registrada primeiro permanece à frente.
7. O ranking exibe até dez partidas.
8. É possível jogar novamente ou trocar o nome do jogador sem recarregar a página.

## Como funciona o ranking

O arquivo `js/script.js` registra cada partida em `sessionStorage`, usando a chave `ranking`. Cada registro contém nome, pontuação, total de perguntas e um identificador.

Como o armazenamento é `sessionStorage`, os resultados ficam disponíveis durante a sessão da aba atual e são descartados quando essa sessão termina. Para uma demonstração com ranking vazio, abra o site em uma nova sessão/aba privada ou limpe o armazenamento da sessão nas ferramentas do navegador.

## Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Inicie um servidor local, por exemplo, pela extensão **Live Server**.
4. Abra o endereço local fornecido pelo Live Server.

Também é possível executar, dentro da pasta do projeto, o comando:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

**Importante:** não abra os arquivos HTML diretamente com `file://`. O quiz carrega as perguntas com `fetch`, que precisa de um servidor HTTP/HTTPS.

Não é necessário instalar bibliotecas ou dependências.

## Estrutura do projeto

```text
.
├── index.html
├── jogo.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── dados/
│   └── perguntas.json
└── README.md
```

## Banco de perguntas

As perguntas ficam em `dados/perguntas.json`, separadas da lógica JavaScript. O arquivo contém **12 perguntas**. Cada pergunta utiliza os campos:

| Campo | Finalidade |
|---|---|
| `pergunta` | Enunciado apresentado ao jogador |
| `alternativas` | Quatro opções de resposta |
| `resposta` | Índice da opção correta, começando em zero (`0` = primeira opção) |
| `explicacao` | Texto educativo exibido após a resposta |
| `fonte` | Endereço da fonte consultada |

O JavaScript verifica a estrutura dos dados antes de iniciar o quiz.

## Acessibilidade e responsividade

O projeto contém recursos de acessibilidade implementados no HTML, CSS e JavaScript:

- Idioma da página definido como português do Brasil (`lang="pt-BR"`).
- Link para pular diretamente ao conteúdo principal.
- Rótulo (`label`) associado ao campo de nome.
- Mensagem de validação do nome identificada para tecnologias assistivas.
- Foco visível em links, botões e campo de texto.
- Navegação por teclado usando elementos nativos, como links, botões e formulário.
- Alternativas desabilitadas após a primeira resposta, evitando múltiplas escolhas na mesma pergunta.
- Feedback textual de acerto ou erro; a informação não depende apenas de cores.
- Região de feedback com `aria-live`.
- Tabela de ranking com legenda (`caption`) e cabeçalhos identificados (`scope`).
- Ilustração da página inicial marcada como decorativa (`aria-hidden="true"`); não há imagens informativas que precisem de texto alternativo (`alt`).
- Regras CSS para telas menores e quebra de links longos.

**Conferência final do grupo:** antes da apresentação, testar contraste, foco, navegação completa somente pelo teclado e ausência de rolagem horizontal em celular e computador. Registrar aqui os dispositivos/larguras e os resultados realmente verificados. Não declarar teste com leitor de tela ou ferramenta automatizada se ele não tiver sido realizado.

## Publicação

Para publicar pelo GitHub Pages:

1. Abra **Settings → Pages** no repositório.
2. Selecione a branch `main` e a pasta `/ (root)`.
3. Salve e aguarde a publicação.
4. Abra o endereço HTTPS publicado e teste o fluxo completo.
5. Confira se o site publicado corresponde ao conteúdo da versão marcada com a tag `cp3-entrega`.

## Fontes de referência

As perguntas incluem links individuais para suas fontes. O conteúdo utiliza materiais da [Cartilha de Segurança para Internet do CERT.br](https://cartilha.cert.br/) e orientação sobre golpes envolvendo WhatsApp divulgada pela [Agência Gov/Anatel](https://agenciagov.ebc.com.br/noticias/202510/golpe-do-whatsapp-falso-veja-as-orientacoes-da-anatel-para-denunciar-e-se-proteger).

## Tecnologias

HTML5 · CSS3 · JavaScript · JSON · Git · GitHub Pages
