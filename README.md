
# Conecta 60+ — TechQuiz (CP1 e CP2)

## Tema
Quiz educativo para ajudar pessoas idosas a usar a internet com mais confiança, autonomia e segurança.

## Objetivo
Apresentar orientações simples sobre comunicação digital, pesquisas na internet, senhas e prevenção de golpes virtuais.

## Integrantes
- Felipe Gomes Figueiredo dos Santos
- Igor da Silva Pedrosa
- José Luiz dos Santos
- Leonan Vieira Alves
- Luiz Henrique Domingues dos Santos
- Pedro Henrique Rodrigues Beltran

## Tecnologias
- HTML5
- CSS3
- JavaScript
- JSON
- Git e GitHub Pages

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
├── .gitignore
└── README.md
```

## Como executar localmente
1. Baixe ou clone o repositório.
<<<<<<< HEAD
2. Abra a pasta no VS Code e use a extensão **Live Server** (ou rode `python3 -m http.server` na pasta e acesse `http://localhost:8000`).
3. Não abra `index.html`/`jogo.html` direto como `file://`: o `fetch` do `perguntas.json` é bloqueado e o quiz mostra um aviso.

Não é necessário instalar dependências.

## Dados das perguntas
As questões estão em `dados/perguntas.json`. O campo `resposta` usa índice começando em zero: `0` é a primeira alternativa, `1` a segunda, e assim por diante.

## Publicação
No GitHub, abra **Settings → Pages**, selecione a branch `main` e a pasta `/ (root)`, e salve. Depois que o site for publicado, teste o endereço HTTPS em uma janela anônima.

## CP2 — lógica e interatividade
- `dados/perguntas.json` é carregado via `fetch` em `js/script.js` (nenhuma pergunta está no JavaScript).
- Fluxo: nome do jogador → uma pergunta por vez → feedback (acerto/erro, explicação e fonte) → pontuação final e ranking → "Jogar novamente" sem recarregar.
- Ranking salvo em `sessionStorage` (chave `ranking`), mantido entre partidas na mesma aba. Veja em DevTools → Application → Session Storage.
- Acessibilidade: navegação só com Tab/Enter, foco visível, feedback com texto, ícone e borda (não só cor), sem rolagem horizontal no celular.

=======

## CP1
## Divisão sugerida de tarefas
- Página inicial: revisar `index.html`.
- Tela do jogo: revisar `jogo.html`.
- Identidade visual: revisar `css/style.css`.
- Perguntas: revisar `dados/perguntas.json`.
- Documentação e publicação: revisar este README e configurar GitHub Pages.
- Integração e testes: verificar todos os arquivos em desktop e celular.
