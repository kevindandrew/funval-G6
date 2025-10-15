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
/* frutas.push("guayaba");
for (let index = 0; index < frutas.length; index++) {
  if ("guayaba" === frutas[index] || "pera" === frutas[index]) {
    console.log("la guayaba o la pera si esta en la lista");
  }
} */
//for of  no trabaja el indice o posicion del array solo el elemento
/* for (const fruta of frutas) {
  console.log(fruta);
  if ("papaya" === fruta) {
    console.log("la papaya esta aqui");
  }
} */
/* -------------EJERCICIOS------------------- */
/* 
    dado un array de notas de un estudiante sacar el 
    promedio del mismo y verificar si esta aprobado o reprobado
    let notas =[90,23,65,0,90]

*/
/* let notas = [90, 23, 65, 0, 90, 22, 34];
let resultado = 0;
for (let index = 0; index < notas.length; index++) {
  resultado += notas[index];
}
resultado /= notas.length;
console.log("el promedio del estudiantes es: " + resultado.toFixed(2));
if (resultado >= 51) {
  console.log("aprobado");
} else {
  console.log("reprobado");
} */
/* 
    dado una lista de edades de la compañia funval 
    let edades=[65,26,33,20,35,67,78]
    funval quiere saber la cantidad de personas q deben recibir el bono antiguedad
    este bono se da a las personas q tiene mas de 34 años 
    crear una lista de las edades q ingresan a el bono
    resl=[65,35,67,78]
*/
/* ------------------------DECLARAR MATRICES-------------------------- */
let matrizEstudiantes = [
  ["Boren", "Alfredo", "Jaime"],
  ["Mario"],
  ["Jorge", "Diego"],
];
//console.log(matrizEstudiantes[2][1]);
/* --------------RECORRER UNA MATRIZ--------- */
for (let i = 0; i < matrizEstudiantes.length; i++) {
  //console.log(matrizEstudiantes[i]);
  for (let j = 0; j < matrizEstudiantes[i].length; j++) {
    // console.log(matrizEstudiantes[i][j]);
  }
}

/* 
    crear un programa q reciba una matriz cuadrada de cualquier dimensaion ejemplo
    let mat=[[2,3,7],[35,78,2],[57,35,28]]
    y realizar la suma de la diagonal principal y en otra variable la diagonal secundaria
*/
/* ---------------------EJERCICIOS----------------------------------- */
// 1. Crea un array con 5 nombres y muestra el primero y el último elemento en consola.
let nombres = ["Juan", "Pedro", "Carlos", "Martin", "Fernando"];
/* console.log(nombres[0]);
console.log(nombres[nombres.length - 1]); */

// 2. Agrega un elemento al final del array usando push y muestra el nuevo array.
// 3. Quita el último elemento usando pop y muestra el elemento eliminado y el array final.
let ultimo = nombres.pop();
console.log(ultimo);
console.log(nombres);
// 4. Agrega un elemento al inicio del array usando unshift y muestra el resultado.
// 5. Elimina el primer elemento con shift y muestra el elemento eliminado.
let primero = nombres.shift();
console.log(primero);
// 6. Crea un array de números y muestra cuántos elementos tiene con length.
// 7. Recorre un array de frutas con un bucle for y muestra cada fruta en consola.
let canastaFrutas = ["naranja", "banana", "sandia"];
for (let i = 0; i < canastaFrutas.length; i++) {
  console.log(canastaFrutas[i]);
}
// 8. Recorre un array de números con for of y muestra el doble de cada número.
// 9. Crea un array de colores y muestra el índice y el valor de cada elemento usando for.
let colores = ["rojo", "azul", "verde", "morado", "amarillo"];

for (let j = 0; j < colores.length; j++) {
  console.log("el indice es: " + j + " y el valor q tiene es: " + colores[j]);
}
// 10. Crea un array vacío y agrega 5 elementos con push dentro de un bucle for.
// 11. Crea un array de 5 números y suma todos sus valores usando un bucle for.
let numeritos = [322, 89, 15, 4, 2025];
let respuesta = 0;
for (let i = 0; i < numeritos.length; i++) {
  respuesta += numeritos[i];
}
console.log(respuesta);
// 12. Crea un array de palabras y cuenta cuántas tienen más de 4 letras.
// 13. Crea un array con nombres y verifica si existe un nombre específico recorriéndolo.

nombres = ["kevin", "mario", "hugo", "hernan", "ramiro"];
let pepe = false;
for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === "kevin") {
    pepe = true;
  }
}
if (pepe) {
  console.log("el nombre esta aqui");
} else {
  console.log("el nombre no fue encontrado");
}
// 14. Crea un array con edades y muestra solo las edades mayores a 18.
// 15. Crea un array de números y crea un nuevo array con el triple de cada número.
// 16. Crea un array de precios y calcula el total sumando todos sus elementos.
// 17. Crea un array de 10 números y cuenta cuántos son pares.
// 18. Crea un array con nombres y agrega uno nuevo solo si no está repetido.
// 19. Crea un array con números y muestra cuál es el mayor (sin usar Math.max).
// 20. Crea un array con números y muestra cuál es el menor (sin usar Math.min).
// 21. Crea un array con nombres y elimina el último elemento si hay más de 5 elementos.
// 22. Crea un array con 5 nombres y usa un bucle para mostrar cada nombre en mayúsculas.
// 23. Crea un array con 5 números y crea otro array con los números invertidos.
// 24. Crea un array de 5 números y calcula el promedio.
// 25. Crea un array con nombres y elimina un nombre específico recorriéndolo.
// 26. Crea un array de notas (0 a 100) y cuenta cuántos aprobaron (>= 51).
// 27. Crea un array con varios animales y muestra en qué posición está “perro”.
// 28. Crea un array de frutas y cambia el valor de la segunda fruta por otra nueva.
// 29. Crea un array con 5 números y muestra solo los que estén en posiciones pares.
// 30. Crea un array con nombres y forma una cadena con todos los nombres separados por coma.
/* ------------------------------------------------------------------------ */
// 1. Crea un array con varios números y muestra cuántos de ellos son pares y cuántos son impares.

// 2. Crea un array con nombres y cuenta cuántas veces se repite un nombre específico.

// 3. Crea un array de números y encuentra el número mayor y el menor recorriéndolo con un bucle for.

// 4. Crea un array con números y elimina los números repetidos dejando solo uno de cada valor (sin usar Set).

// 5. Crea una matriz 3x3 con números y calcula la suma total de todos los elementos.

// 6. Crea una matriz 3x3 y muestra la suma de cada fila por separado (ejemplo: “Fila 1: 10”, etc.).

// 7. Crea una matriz 3x3 con números y muestra todos los valores de la diagonal principal.

// 8. Crea un array con nombres y genera un nuevo array con todos los nombres en mayúsculas usando un bucle.

// 9. Crea una matriz 2x3 con números y muestra todos los números mayores a 10.

// 10. Crea un array bidimensional (matriz) 3x3 con cualquier valor.
//     Pide una posición (fila y columna) y muestra el valor que está en esa posición.

// 11. Crea un array de 8 números y genera un nuevo array con solo los números que sean múltiplos de 3.

// 12. Crea una matriz 3x3 con números y cuenta cuántos números son pares y cuántos impares dentro de ella.
