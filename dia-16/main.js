/* --------CREAR O DECLARAR UN ARRAY O VECTOR O LISTA---- */
let frutas = ["banana", "frutillas", "papaya", "chirimoya", "uvas", "palta"];
//console.log(frutas[4]);
/* ------METODOS BASICOS DE ARRAYS------ */
let cantidadFrutas = frutas.length; //sirve para ver la cantidad de elementos q tiene la lista
frutas.push("sandia", "IGO"); //AGREGA UN ELEMENTO O MAS AL FINAL DE LA LISTA
frutas.unshift("naranja", "MANDARINA"); //AGREGA UN ELEMENTO O MAS AL INICIO DE LA LISTA
let frutaEliminada = frutas.pop(); //Elimina el ultimo elemento de la lista lo devuelve o retorna
let frutaEliminadaPrimer = frutas.shift(); //Elimina el primer elemento de la lista y lo devuelve o retorn
/* ---------REGLA DE ORO------------- */
//ITERAR CON UN FOR
//for normal   si trabaj con el indice y su posicion
frutas.push("guayaba");
for (let index = 0; index < frutas.length; index++) {
  if ("guayaba" === frutas[index] || "pera" === frutas[index]) {
    console.log("la guayaba o la pera si esta en la lista");
  }
}
//for of  no trabaja el indice o posicion del array solo el elemento
for (const fruta of frutas) {
  console.log(fruta);
  if ("papaya" === fruta) {
    console.log("la papaya esta aqui");
  }
}
/* -------------EJERCICIOS------------------- */
/* 
    dado un array de notas de un estudiante sacar el 
    promedio del mismo y verificar si esta aprobado o reprobado
    let notas =[90,23,65,0,90]
*/
