console.log("esta funcionando");
/* -----------IF----------------- */
/* 
    if(CONDICION){
    TODO EL CODIGO Q SE EJECUTARA
    SI LA CONDICION ES VERDADERA
    }  
*/

if (5 > 4) {
  console.log("5 siempre va ser mayor a 4");
}

/* -------------IF-ELSE------------- */
/* 
    if(CONDICION){
    TODO EL CODIGO Q SE EJECUTARA
    SI LA CONDICION ES VERDADERA
    }ELSE{
    TODO EL CODIGO Q SE EJECUTARA
    SI LA CONDICION ES FALSA
    }
*/
if ((5 >= 2 && 3 == "3") || 0 < 7) {
  console.log("codigo verdadero");
} else {
  console.log("codigo falso");
}

let condicioncita = null;

if (condicioncita) {
  console.log("kevin");
} else {
  console.log("andres");
}
/* ---------------IF-ELSE-IF------------ */
/* 
    if(CONDICION){
    TODO EL CODIGO Q SE EJECUTARA
    SI LA CONDICION ES VERDADERA
    }ELSE IF (CONDICION2){
        TODO EL CODIGO Q SE EJECUTARA
        SI LA CONDICION1 ES FALSA
        Y LA CONDICION2 ES VERDADERA
    }
*/

if (1 > 5) {
  console.log("condicion 1 verdadero");
} else if (2 > 3) {
  console.log("condicion 1 falso pero condicion 2 verdadero");
} else if (5 > 2) {
  console.log("condicion 2 falsa pero condicion 3 verdadera");
}

/* 
evalular si el clima del dia si el clima esta entre
    0-10 hace frio si esta entre 11 y 24 hace buen clima
    y si es mayor a 25 hace calor
*/
let clima = 32;
if (clima >= 0 && clima <= 10) {
  console.log("hace frio");
} else if (clima > 10 && clima <= 24) {
  console.log("hace buen clima");
} else if (clima >= 25) {
  console.log("hace calor");
} else {
  console.log("clima fuera de los parametros");
}
/* 
    crear una aplicacion q nos permita determinar q mes estamos del año el cliente debera ingresar
    el mes en un formato numerico 1-12  si coloca x ejemplo 2 el resultado deberia ser febrero
    si coloca 6  deberia ser junio y asi 
*/
/* let mes = parseInt(prompt("ingresa un mes en formato numerico"));
console.log(mes);
console.log(typeof mes);
if (mes === 1) {
  console.log("enero");
} else if (mes === 2) {
  console.log("febrero");
} else if (mes === 3) {
  console.log("marzo");
} else if (mes === 4) {
  console.log("abril");
} else if (mes === 5) {
  console.log("mayo");
} else if (mes === 6) {
  console.log("junio");
} else if (mes === 7) {
  console.log("julio");
} else if (mes === 8) {
  console.log("agosto");
} else if (mes === 9) {
  console.log("septiembre");
} else if (mes === 10) {
  console.log("octubre");
} else if (mes === 11) {
  console.log("noviembre");
} else if (mes === 12) {
  console.log("diciembre");
} else {
  console.log("numero invalido");
} */

/* ----------------PROMPT------------- */

/* let resultadoCliente = prompt("ingresa tu nombre");
console.log(resultadoCliente);
 */

/* ----------------SWICH CASE---------- */
let mesesillo = parseInt(prompt("ingresa el mes de nacimiento"));
switch (mesesillo) {
  case 1:
    console.log("enero");
    break;
  case 2:
    console.log("febrero");
    break;
  case 3:
    console.log("marzo");
    break;
  case 4:
    console.log("abril");
    break;
  case 5:
    console.log("mayo");
    break;
  case 6:
    console.log("junio");
    break;
  case 7:
    console.log("julio");
    break;
  case 8:
    console.log("agosto");
    break;
  case 9:
    console.log("septiembre");
    break;
  case 10:
    console.log("octubre");
    break;
  case 11:
    console.log("noviembre");
    break;
  case 12:
    console.log("diciembre");
    break;
  default:
    console.log("numero incorrecto");
    break;
}

/* ----------------------------------------------------------------------- */
// =======================================================
// IF SIMPLE (EJERCICIOS 1 - 5)
// =======================================================

/*
1. Pide al usuario un número con prompt.
   Muestra "Positivo" si el número es mayor que 0.
*/
// RESPUESTA AQUÍ 👇

/*
2. Pide la edad del usuario.
   Si la edad es mayor o igual a 18, muestra "Eres mayor de edad".
*/
// RESPUESTA AQUÍ 👇

/*
3. Pide un número y verifica si es par.
   Usa el operador % y un if.
*/
// RESPUESTA AQUÍ 👇

/*
4. Pide una contraseña con prompt.
   Si la contraseña es "admin123", muestra "Acceso permitido".
*/
// RESPUESTA AQUÍ 👇

/*
5. Pide un número.
   Si el número es igual a 100, muestra "Número exacto".
*/
// RESPUESTA AQUÍ 👇

// =======================================================
// IF - ELSE (EJERCICIOS 6 - 10)
// =======================================================

/*
6. Pide un número.
   Si es mayor que 50 muestra "Número alto", caso contrario "Número bajo".
*/
// RESPUESTA AQUÍ 👇

/*
7. Pide la edad del usuario.
   Si es mayor o igual a 18 muestra "Bienvenido",
   caso contrario "Acceso denegado".
*/
// RESPUESTA AQUÍ 👇

/*
8. Pide una nota entre 0 y 100.
   Si la nota es mayor o igual a 60 muestra "Aprobado", de lo contrario "Reprobado".
*/
// RESPUESTA AQUÍ 👇

/*
9. Pide un nombre.
   Si el nombre es "Kevin" muestra "Hola Kevin",
   de lo contrario "Hola invitado".
*/
// RESPUESTA AQUÍ 👇

/*
10. Pide un número y muestra si es par o impar usando if-else.
*/
// RESPUESTA AQUÍ 👇

// =======================================================
// IF - ELSE IF (EJERCICIOS 11 - 15)
// =======================================================

/*
11. Pide una nota (0 a 100) e imprime:
   - "Excelente" si es mayor o igual a 90
   - "Bueno" si está entre 70 y 89
   - "Regular" si está entre 50 y 69
   - "Insuficiente" si es menor a 50
*/
// RESPUESTA AQUÍ 👇

/*
12. Pide la temperatura (en grados Celsius).
   Muestra:
   - "Frío" si es menor a 15
   - "Templado" si está entre 15 y 25
   - "Caluroso" si es mayor a 25
*/
// RESPUESTA AQUÍ 👇

/*
13. Pide una hora (0 a 23).
   Muestra:
   - "Buenos días" si está entre 6 y 11
   - "Buenas tardes" si está entre 12 y 18
   - "Buenas noches" si está entre 19 y 23
   - "Durmiendo" si está entre 0 y 5
*/
// RESPUESTA AQUÍ 👇

/*
14. Pide un número del 1 al 3 y muestra un mensaje distinto para cada uno.
*/
// RESPUESTA AQUÍ 👇

/*
15. Pide un número y muestra:
   - "Negativo" si es menor que 0
   - "Cero" si es igual a 0
   - "Positivo" si es mayor que 0
*/
// RESPUESTA AQUÍ 👇

// =======================================================
// IF ANIDADO (EJERCICIOS 16 - 20)
// =======================================================

/*
16. Pide una edad.
   Si es mayor o igual a 18 muestra "Mayor de edad".
   Dentro del mismo if, si es mayor o igual a 60 muestra "Adulto mayor".
*/
// RESPUESTA AQUÍ 👇

/*
17. Pide una nota.
   Si es mayor o igual a 60 muestra "Aprobado".
   Dentro de ese if, si la nota es mayor o igual a 90 muestra "Excelente".
*/
// RESPUESTA AQUÍ 👇

/*
18. Pide un número.
   Si es positivo, dentro del if verifica si es par o impar.
*/
// RESPUESTA AQUÍ 👇

/*
19. Pide usuario y contraseña.
   Si usuario es "admin", dentro del mismo if verifica si la contraseña es "1234".
   Si ambos coinciden, muestra "Acceso concedido".
*/
// RESPUESTA AQUÍ 👇

/*
20. Pide dos números.
   Si el primero es mayor, muestra "El primero es mayor".
   Dentro de ese if, verifica si la diferencia es mayor a 10 y muestra "Diferencia grande".
*/
// RESPUESTA AQUÍ 👇

// =======================================================
// SWITCH CASE (EJERCICIOS 21 - 22)
// =======================================================

/*
21. Pide un número del 1 al 7 y muestra el día correspondiente.
   1 = Lunes, 2 = Martes, ..., 7 = Domingo
*/
// RESPUESTA AQUÍ 👇

/*
22. Pide un número del 1 al 12 y muestra el mes correspondiente.
*/
// RESPUESTA AQUÍ 👇

// =======================================================
// COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 23 - 35)
// =======================================================

/*
23. Pide dos números.
   Usa if-else para mostrar si su suma es par o impar.
*/
// RESPUESTA AQUÍ 👇

/*
24. Pide tres notas, calcula el promedio.
   Usa if-else-if para mostrar:
   - "Excelente" si es mayor a 90
   - "Aprobado" si es mayor o igual a 60
   - "Reprobado" si es menor a 60
*/
// RESPUESTA AQUÍ 👇

/*
25. Pide nombre y edad.
   Usa un if anidado para mostrar:
   - "Hola [nombre], eres mayor de edad"
   - Si tiene 60 o más, agrega también "y adulto mayor"
*/
// RESPUESTA AQUÍ 👇

/*
26. Pide un número del 1 al 5 y usa switch para mostrar una calificación:
   1 = Muy malo, 2 = Malo, 3 = Regular, 4 = Bueno, 5 = Excelente.
*/
// RESPUESTA AQUÍ 👇

/*
27. Pide una letra y determina si es vocal o consonante usando switch.
*/
// RESPUESTA AQUÍ 👇

/*
28. Pide dos números y una operación ("sumar", "restar", "multiplicar", "dividir").
   Usa switch para realizar la operación correspondiente.
*/
// RESPUESTA AQUÍ 👇

/*
29. Pide edad y país.
   Si el país es "Bolivia" y la edad es mayor o igual a 18, muestra "Puede votar".
   Caso contrario, muestra "No puede votar".
*/
// RESPUESTA AQUÍ 👇

/*
30. Pide tres números.
   Determina cuál es el mayor de los tres usando if-else-if.
*/
// RESPUESTA AQUÍ 👇

/*
31. Pide un número y determina:
   - Si es múltiplo de 3 muestra "Fizz"
   - Si es múltiplo de 5 muestra "Buzz"
   - Si es múltiplo de ambos muestra "FizzBuzz"
*/
// RESPUESTA AQUÍ 👇

/*
32. Pide una nota (0 a 100) y muestra:
   "A" si es >= 90
   "B" si es >= 80
   "C" si es >= 70
   "D" si es >= 60
   "F" si es menor de 60
*/ s;
// RESPUESTA AQUÍ 👇

/*
33. Pide nombre de usuario y contraseña.
   Si usuario es "Alfredo" o "Moises" y contraseña es "1234",
   muestra "Acceso autorizado", de lo contrario "Denegado".
*/
// RESPUESTA AQUÍ 👇

/*
34. Pide la cantidad de artículos comprados y el precio por unidad.
   Si compró más de 10 artículos, aplica 10% de descuento.
   Muestra el total a pagar.
*/
// RESPUESTA AQUÍ 👇

/*
35. Ejercicio Final:
   Pide nombre, edad y tres notas.
   Calcula el promedio, determina si aprueba y muestra:
   "Hola [nombre], tienes [edad] años y tu promedio es [promedio]. Aprobado/Reprobado."
   Usa if-else-if o anidado.
*/
// RESPUESTA AQUÍ 👇
