/* funciones de orden superior */
/* function saludar(nombre) {
  console.log("hola amigo: " + nombre);
}
function depedir(nombre) {
  console.log("chau amigo " + nombre);
}
function contratar(nombre) {
  console.log("estas contratado:" + nombre);
} */
//declaramos
function superSuperior(callback1, callback2, nombre) {
  callback1(nombre);
  callback2(nombre);
}
//utilizamos
//funcion q recibe un funcion1 funcion2 y un string
/* superSuperior(saludar, depedir, "Boren");
superSuperior(saludar, contratar, "Ibraim"); */
/* --------------------------------------------------------------- */
/* function superior1(callback, nombre) {
  callback(nombre);
}

superior1(function (nombre) {
  console.log("estoy aqui dentro " + nombre);
}, "David");

superior1((nombre) => {
  console.log("quiero una hamburguesa " + nombre);
}, "Belen"); */
/* ------------CREACION DE FUNCION DE ORDEN SUPERIOR----- */
function recorrido(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

let notas = [32, 77, 55, 32, 82, 91];
let frutas = ["naranja", "manzana", "pera", "papaya"];

recorrido(notas, (nota) => {
  if (nota >= 51) {
    console.log(nota);
  }
});

recorrido(frutas, (fruta) => {
  if (fruta === "papaya") {
    console.log("la papaya esta aqui");
  }
});
/* ----------------FOR EACH------------------------ */
let estudiantes = ["Alfredo", "Belen", "Boren", "David"];

function mostrar(item) {
  console.log(item);
}

estudiantes.forEach(mostrar);
estudiantes.forEach((estudianteItem) => {
  console.log(estudianteItem);
});
