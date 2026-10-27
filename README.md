# Conecta 60+ — TechQuiz CP1

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
2. Abra `index.html` no navegador.
3. Para editar, abra a pasta do projeto no editor de código de sua preferência.

Não é necessário instalar dependências para visualizar a estrutura inicial.

## Dados das perguntas
As questões estão em `dados/perguntas.json`. O campo `resposta` usa índice começando em zero: `0` é a primeira alternativa, `1` a segunda, e assim por diante.

## Publicação
No GitHub, abra **Settings → Pages**, selecione a branch `main` e a pasta `/ (root)`, e salve. Depois que o site for publicado, teste o endereço HTTPS em uma janela anônima.

## CP1
Esta entrega contém a página inicial, a estrutura visual da tela de jogo, o CSS base acessível e três perguntas-modelo. A lógica completa do quiz será desenvolvida no CP2.

## Divisão sugerida de tarefas
- Página inicial: revisar `index.html`.
- Tela do jogo: revisar `jogo.html`.
- Identidade visual: revisar `css/style.css`.
- Perguntas: revisar `dados/perguntas.json`.
- Documentação e publicação: revisar este README e configurar GitHub Pages.
- Integração e testes: verificar todos os arquivos em desktop e celular.
