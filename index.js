let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", testNumero);

function testNumero(e) {
  e.preventDefault();
  let numeroFormulario = e.target;
  console.log(numeroFormulario[0].value);
  console.log(numeroFormulariol[1].value);
}
