let btn = document.querySelector("#botoncito");
let par = document.querySelector("#parrafo");
btn.addEventListener("click", () => {
  if (btn.classList.contains("bg-green-800")) {
    btn.classList.replace("bg-green-800", "bg-red-800");
    btn.textContent = "Kevin estuvo aqui";
  } else {
    btn.classList.replace("bg-red-800", "bg-green-800");
    btn.textContent = "haz click";
  }
  par.textContent =
    "funval tiene un programa de desarrollo web q consiste en 2 niveles";
});
/* function color() {
  btn.classList.replace("bg-green-800", "bg-yellow-600");
  btn.textContent = "boren estuvo aqui";
}
 */

/* 
    crear un boton y una imagen
    el boton debera alternar entre dia/noche
    y la imagen en dia sera de la princesa fiona
    y en noche de la ogro fiona
*/

let input = document.querySelector("#nombre");
let par2 = document.querySelector("#par2");
input.addEventListener("input", () => {
  console.log(input.value);
  par2.textContent = input.value;
});

/* ------------------------------- */
let form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
  //console.log("hola mundo");
  e.preventDefault();
  /* console.log("hola mundo");
  console.log(e);
  let nombreEstudiante = form.nombre.value;
  let edad = form.edad.value;
  let pais = form.pais.value;
  console.log(nombreEstudiante, edad, pais);
  let mensaje = `bienvenido ${nombreEstudiante} del pais de: ${pais} de edad:${edad}`;
  console.log(mensaje); */
  let datos = new FormData(form);
  let nombreEstudiante = datos.get("nombre");
  let edad = datos.get("edad");
  let pais = datos.get("pais");
  let mensaje = `bienvenido ${nombreEstudiante} del pais de: ${pais} de edad:${edad}`;
  console.log(mensaje);
});
