# Conecta 60+ — TechQuiz

Quiz educativo sobre uso da internet e segurança digital, desenvolvido para ajudar pessoas idosas a navegar com mais confiança e autonomia.

Trabalho em grupo da disciplina **Desenvolvimento Front-end para Web** — CP3 (entrega final).

- **Site publicado:** PREENCHER com o link HTTPS do GitHub Pages.
- **Repositório:** https://github.com/joseluizdossantostk-commits/Atividade-final-de-ter-a
- **Versão da entrega:** `cp3-entrega`.

## Tema e objetivo

O projeto aborda habilidades digitais e segurança na internet para pessoas idosas, incluindo comunicação, pesquisa de informações, proteção de contas e prevenção de golpes virtuais.

## Integrantes

- Felipe Gomes Figueiredo dos Santos
- Igor da Silva Pedrosa
- José Luiz dos Santos
- Kawã Magno dos Santos
- Leonan Vieira Alves
- Luiz Henrique Domingues dos Santos
- Pedro Henrique Rodrigues Beltran

## Tecnologias

- HTML5
- CSS3
- JavaScript
- JSON
- Git e GitHub Pages

## Regras do quiz

1. Digite seu nome para começar.
2. O quiz apresenta 12 perguntas, uma por vez, com quatro alternativas.
3. Cada resposta correta vale um ponto.
4. Após responder, o jogador recebe um feedback, uma explicação e uma fonte.
5. Ao terminar, são exibidos a pontuação e o ranking.
6. O ranking é organizado da maior para a menor pontuação.
7. São exibidas até dez partidas.
8. É possível jogar novamente sem recarregar a página.

## Como funciona o ranking

O arquivo `js/script.js` registra as partidas em `sessionStorage`, utilizando a chave `ranking`.

Os resultados permanecem disponíveis durante a sessão da aba atual e são descartados quando essa sessão termina.

## Como executar localmente

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Inicie um servidor local utilizando a extensão **Live Server**.

Também é possível executar:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

**Importante:** não abra os arquivos HTML diretamente com `file://`, pois o quiz utiliza `fetch` para carregar as perguntas.

Não é necessário instalar dependências.

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

As perguntas ficam armazenadas em `dados/perguntas.json`, separadas da lógica JavaScript.

Cada pergunta possui os seguintes campos:

- `pergunta`: enunciado apresentado ao jogador.
- `alternativas`: opções de resposta.
- `resposta`: índice da alternativa correta, começando em zero.
- `explicacao`: explicação educativa.
- `fonte`: endereço da fonte consultada.

## Acessibilidade e responsividade

O projeto apresenta recursos como:

- Idioma definido como português do Brasil.
- Navegação por teclado.
- Foco visível em links, botões e campos.
- Feedback textual de acerto ou erro.
- Uso de `aria-live` para mensagens.
- Formulário com identificação dos campos.
- Layout adaptado para dispositivos móveis.

## Publicação

Para publicar pelo GitHub Pages:

1. Acesse **Settings → Pages** no repositório.
2. Selecione a branch `main`.
3. Escolha a pasta `/ (root)`.
4. Salve e aguarde a publicação.
5. Teste o endereço HTTPS publicado.

## Fontes de referência

- [Cartilha de Segurança para Internet — CERT.br](https://cartilha.cert.br/)
- [Orientações da Anatel sobre golpes no WhatsApp](https://agenciagov.ebc.com.br/noticias/202510/golpe-do-whatsapp-falso-veja-as-orientacoes-da-anatel-para-denunciar-e-se-proteger)
