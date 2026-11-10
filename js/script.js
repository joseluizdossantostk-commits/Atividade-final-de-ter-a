
// CP1: apenas comportamento visual para destacar a alternativa selecionada.
// A correção das respostas e a lógica do jogo ficam para o CP2.
document.querySelectorAll(".answer-option").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".answer-option").forEach((option) => {
      option.setAttribute("aria-pressed", "false");
    });
    button.setAttribute("aria-pressed", "true");
  });
});
>>>>>>> 3c0ada2d03856ae17e416d6c9ebb0a08bbfb4524
