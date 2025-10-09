/* --------------STRINGS CASO ESPECIAL--------------- */
/* let nombre = "KEVIN";
for (let i = 0; i < nombre.length; i++) {
  console.log(nombre[i]);
  if (nombre[i] === "A" || nombre[i] === "a") {
    console.log("la vocal A esta presente en este string");
  }
} */
/* ------------FUNCIONES------------------------ */
//declarar una funcion q no recibe ni retorna nada
function saludar() {
  //todo el codigo q se ejecutara dentro de la caja magica
  console.log("Hola amigos de funval");
}
//llamar la funcion
saludar();

//funciones q reciben parametros pero no retornan nada
function saludarEstudiante(nombre, edad) {
  console.log("hola amigo " + nombre + " de edad: " + edad);
}
let nombreEstudiante = "juan";
let años = 28;
//llamar la funcion
saludarEstudiante(nombreEstudiante, años);
saludarEstudiante("Moises", 18);
saludarEstudiante(24, "Jaime");

//funciones q reciben parametros y retornan un valor
function sumarNumeros(a, b, c) {
  let resultado = 0;
  resultado = a + b + c;
  return resultado;
}
//llamar la funcion
console.log(sumarNumeros(14, 30, 70));

//funcion q no recibe nada pero retorna un valor
function devolverSaludo() {
  return "chau amigo";
}
//llamar la funcion
console.log(devolverSaludo());

/* ----------------------------------------------- */
let palabra = prompt(
  "ingresa la palabra que verificaremos como palindroma o no"
);
//llamando la funcion
let palabraNueva = sinespacio(palabra);
palabraNueva = palabraNueva.toLocaleLowerCase();
let copia = darVuelta(palabraNueva);
console.log(copia);
if (copia === palabraNueva) {
  console.log("la palabra es palindroma");
} else {
  console.log("la palabra no es palindroma");
}

//crear una funcion q reciba un string y me retorne el mismo string sin espacios vacios
function sinespacio(texto) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " ") {
      resultado = resultado + texto[i];
    }
  }
  return resultado;
}
//crar una funcion q reciba un string y retorne otro string pero al reves
function darVuelta(texto) {
  let respuesta = "";
  for (let index = texto.length - 1; index >= 0; index--) {
    respuesta = respuesta + texto[index];
  }
  return respuesta;
}
