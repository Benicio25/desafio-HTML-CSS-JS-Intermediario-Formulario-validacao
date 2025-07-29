const camposFormulario = document.querySelectorAll(".campo")
const botaoEnviar = document.querySelector(".btn-enviar")

botaoEnviar.addEventListener('click', (e) =>{
  e.preventDefault()

  camposFormulario.forEach((input)=>{
    if (input.value) {
      input.classList.add("campo-preenchido");
      input.nextElementSibling.classList.remove('mostrar');
    }else {
      input.classList.remove("campo-preenchido");
      input.classList.add("campo-vazio");
      input.nextElementSibling.classList.add("mostrar");
    }
  })
}) 


