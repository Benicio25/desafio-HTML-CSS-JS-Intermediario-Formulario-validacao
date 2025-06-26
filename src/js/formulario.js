const campos = document.querySelectorAll(".form-content input, .form-content textarea");
const botaoEnviar = document.querySelector(".btn");

campos.forEach((campo) => {
  campo.addEventListener("input", () => {
    const span = campo.parentNode.querySelector(".span-required");
    if (campo.value.trim() === "") {
      campo.classList.remove("campo-preenchido");
      campo.classList.add("campo-vazio");
      if (span) span.style.visibility = "visible";
    } else {
      campo.classList.remove("campo-vazio");
      campo.classList.add("campo-preenchido");
      if (span) span.style.visibility = "hidden";
    }
  });
});

botaoEnviar.addEventListener("click", (event) => {
  let formValido = true;
  campos.forEach((campo) => {
    const span = campo.parentNode.querySelector(".span-required");
    if (campo.value.trim() === "") {
      campo.classList.add("campo-vazio");
      campo.classList.remove("campo-preenchido");
      if (span) span.style.visibility = "visible";
      formValido = false;
    }
  });
  if (!formValido) event.preventDefault();
});
