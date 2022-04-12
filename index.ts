function validarFormulario(): void {
  let usuario = document.getElementById("name").value;
  if (usuario.length < 3 || usuario.length > 20) {
    alert("el nombre es incorrecto");
  }
  let apellido = document.getElementById("lastname").value;
  if (apellido.length < 3 || apellido.length > 20) {
    alert("el apellido es incorrecto");
  }

  let email = document.getElementById("mail").value;
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (emailRegex.test(email)) {
    console.log("valido");
  } else {
    alert("el mail es incorrecto");
  }
  let consulta = document.getElementById("msg").ariaValueMax;
  if (consulta.length <= 0) {
    alert("el nombre es incorrecto");
  }
}
let btn = document.getElementById("enviar");
btn.addEventListener("click", validarFormulario);
