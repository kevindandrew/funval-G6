import { promedio, suma, kev } from "./funciones.js";
console.log(kev);
/* ------------------CREACION Y DECLARACION DE OBJETOS------------ */
let estudianteObj = {
  nombre: "Kevin",
  edad: 28,
  matricula: 1701212,
  pais: "Bolivia",
  altura: 1.6,
  varon: true,
  empresa: {
    nombre: "Funval",
    añoFunvadion: 2005,
  },
  notas: [45, 78, 0, 32, 25, 34],
};
/* -------------acceder a valores de un objeto--------------- */
console.log(estudianteObj.nombre);
console.log(estudianteObj);
/* -------------agregar o quitar o modificar pares de llave valor----------- */
estudianteObj.edad = 18; //modificar un valor existente
estudianteObj.numeroDeCelular = 78768015; //creacion de un par llave valor
delete estudianteObj.altura; //eliminar un par de llave valor existente
console.log(estudianteObj);
/* ------------------------------------------------- */
console.log(estudianteObj.empresa.añoFunvadion);
console.log(estudianteObj.notas[2]);
/* 
    quiero q puedan extraer el promedio de nuestro estudiante y puedan determinar
    si esta aprobado o reprobado
    en caso de estar aprobado mostrar un mensaje q diga
    "el estudiante nombre de la empresa funval tiene un promedio de promedio por lo tanto esta aprobado"
    "el estudiante nombre de la pais Bolivia tiene un promedio de promedio por lo tanto esta reprobado"
*/
/* ---------------------------------------------------------------------------------------- */
let estudiantesFunvalN1 = [
  {
    nombre: "Alfredo",
    edad: 25,
    pais: "Mexico",
    notas: [95, 62, 97, 88, 92],
    celular: 123876434,
  },
  {
    nombre: "Belen",
    edad: 22,
    pais: "Bolivia",
    notas: [47, 100, 0],
    celular: 12312436234,
  },
  {
    nombre: "Boren",
    edad: 27,
    pais: "Colombia",
    notas: [77, 89, 35, 21],
    celular: 4356234,
  },
  {
    nombre: "David",
    edad: 33,
    pais: "Chile",
    notas: [100, 96, 77, 76, 77],
    celular: 123126234,
  },
  {
    nombre: "Moises",
    edad: 24,
    pais: "Bolivia",
    notas: [77],
    celular: 123126234,
  },
];

let n2Funval = [];
for (let i = 0; i < estudiantesFunvalN1.length; i++) {
  console.log(estudiantesFunvalN1[i]);
  if (promedio(estudiantesFunvalN1[i].notas) >= 75) {
    n2Funval.push(estudiantesFunvalN1[i]);
  }
}
console.log(n2Funval);
