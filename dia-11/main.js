/* PARA MOSTRAR MENSAJES EN CONSOLA */
console.log("HOLA FUNVAL DIA 11");
/* COMENTARIO
EN 
MULTIPLES
LINEAS
 */
//COMENTARIOS EN UNA SOLA LINEA
/* --------------------------------------------------------------- */
// TIPOS DE DATOS PRIMITIVOS
let nombre = "Kevin"; //tipo string o cadena de texto
console.log(typeof nombre);
let edad = 27; // tipo numbre puede ser entero o decimal
let Boliviano = true; // tipo boolean solo puede ser true o false
let salvado; //undefined cuando no esta definido el tipo de dato
let dinero = null; //cuando una variable es nula
let facturas = BigInt(12389327487236487236854n); //para numeros grandes q excedan los 64 o 32 bits
let simbolico = Symbol("asd123"); // valores simbolicos
let apellido = "2";
/* ----------------CARACTERISTICAS IMPORTANTES DE JS-------------- */
// ES DE TIPADO DEBIL
// ES DE TIPADO DINAMICO
// ES UN LENGUAJE INTERPRETADO MAS NO COMPILADO
nombre = 123;
let resultado = salvado + dinero;
console.log(resultado);
console.log(typeof resultado);
/* cm verificar q tipo de dato tiene una variable (typeof) */
console.log(typeof edad);
console.log(typeof Boliviano);
console.log(typeof apellido);
console.log(typeof salvado);
console.log(typeof dinero);
console.log(typeof facturas);
console.log(typeof simbolico);
/* -----------------VARIABLES Y CONSTANTES---------------- */
var pepito = 123; // mala practica >:D obsoleto  se puuede redeclarar y sobreescribir
var pepito = "kevin";
let juanito = 321; /// NO SE PUEDE REDECLARAR PERO SI SE PUEDE SOBRE ESCRIBIR
juanito = "juan";
//let juanito = "juan";
const menganito = 3322; //NO SE PUEDE REDECLARAR NI SOBREESCRIBIR
//const prueba; NO SE PUEDE USAR EL UNDEFINED EN UNA CONSTANTE e.e
/* 
    crear 7 variables con los diferentes tipos de datos primitivos
    verificar el tipo de dato q tienen con type of y cambiar almenos 3 
*/
/* -------------------OPERADORES ARITMETICOS----------- */
let a = 3;
let b = 2;
let c = "5";
resultado = 0;
resultado = a + b; //suma
resultado = a - b; //resta
resultado = a * b; // multiplicacion
resultado = a / b; // division
resultado = a % b; //modulo
resultado = a ** b; //potencia
/* -----------caso especial-------- */
let estudiante = "Juan";
let estApellido = "Perez";
let nombreCompleto = estudiante + " " + estApellido;
console.log(nombreCompleto);
/* ------------OPERADORES DE COMPARACION------------- */
//RESULTADO DE TODO OPERADOR DE COMPARACION ES  UN BOOLEAN
a = 33;
b = 44;
c = "33";
nombre = false;
let nombre2 = true;
resultado = nombre === nombre2;
console.log(resultado);
resultado = a == c; //COMPARA SI LAS 2 VARIABLES SON IGUALES  PERO SOLO TOMA EN CUENTA EL CONTENIDO no el tipo de dato
resultado = a === c; //COMPARA SI LAS 2 VARIABLES SON IGUALES  y el tipo de dato
resultado = a != c; //COMPARA SI LAS 2 VARIABLES SON diferentes y el tipo de dato no le importa
resultado = a !== c; //COMPARA SI LAS 2 VARIABLES SON diferentes  y el tipo de dato le importa
resultado = a > b; //COMPARA SI una variable es mayor a la otra
resultado = a >= b; //COMPARA SI una variable es mayor o igual a la otra
resultado = a < b; //COMPARA SI una variable es menor a la otra
resultado = a <= b; //COMPARA SI una variable es menor o igual a la otra
/* -----------------OPERADORES LOGICOS---------------- */
//AND- evalua si ambos comparadores son verdaderos es verdadero en los demas casos es falso
resultado = 2 < 3 && 3 > 5;
//OR - evalua si ambos comparadores son falsos es falso en los demas casos es verdadero
resultado = 2 < 3 || 3 > 5;
//not -invierte el valor de booleano
resultado = !(2 < 3);
// se pueden unir mas de 2 conectores logicos en una misma proposicion
resultado = (2 < 3 && 3 > 5) || a == b;
/* ----------------OPERADORES DE ASIGNACION--------------- */
a = 12;
a++; // a = a + 1
a--; // a = a - 1
a += 8; // a = a + 8
a -= 8; // a = a - 8
a *= 8; // a = a * 8
a /= 8; // a = a / 8
a %= 8; // a = a % 8
a **= 8; // a = a ** 8
/* ------------------------------OPERADOR TERNARIO (if abreviado)---------------------------------- */
/* 
    condicion
        ? codigo si la condicion es verdadera
        : codigo si la condicion es falsa
*/

edad = 15;

edad >= 18
  ? console.log("eres mayor de edad")
  : console.log("eres menor de edad");

/* ------------------------------------------------------------------------------ */
// =======================================================
// OPERADORES ARITMÉTICOS (EJERCICIOS 1 - 8)
// =======================================================

/*
1. Declara dos variables a y b con valores numéricos.
   Muestra en consola su suma, resta, multiplicación y división.
*/
// RESPUESTA AQUÍ 👇
let aa = 123;
let bb = 322;
console.log(aa + bb);
console.log(aa - bb);
console.log(aa * bb);
console.log(aa / bb);
/*
2. Calcula el área de un rectángulo (base * altura).
   Muestra el resultado en consola.
*/
// RESPUESTA AQUÍ 👇

/*
3. Calcula el área de un triángulo usando la fórmula (base * altura) / 2.
*/
// RESPUESTA AQUÍ 👇

/*
4. Calcula el módulo (resto) de dividir 25 entre 4.
   Usa el operador %.
*/
// RESPUESTA AQUÍ 👇

/*
5. Declara una variable "numero" y muestra su cuadrado y su cubo.
   Usa los operadores **2 y **3.
*/
// RESPUESTA AQUÍ 👇

/*
6. Calcula el perímetro de un cuadrado con lado = 5.
   Fórmula: lado * 4
*/
// RESPUESTA AQUÍ 👇

/*
7. Declara dos números y muestra si su suma es par o impar.
   Usa el operador % para comprobar si el resto es 0.
*/
// RESPUESTA AQUÍ 👇

/*
8. Calcula el promedio de tres notas y muestra el resultado en consola.
*/
// RESPUESTA AQUÍ 👇

// =======================================================
// OPERADORES DE ASIGNACIÓN (EJERCICIOS 9 - 12)
// =======================================================

/*
9. Declara una variable x = 10.
   Usa x += 5 y muestra el nuevo valor.
*/
// RESPUESTA AQUÍ 👇

/*
10. Declara una variable puntos = 100.
    Resta 20 puntos usando puntos -= 20 y muestra el resultado.
*/
// RESPUESTA AQUÍ 👇

/*
11. Declara precio = 50.
    Duplica su valor usando precio *= 2 y muestra el resultado.
*/
// RESPUESTA AQUÍ 👇

/*
12. Declara saldo = 200.
    Divide su valor entre 4 usando saldo /= 4 y muestra el nuevo saldo.
*/
// RESPUESTA AQUÍ 👇

// =======================================================
// OPERADORES DE COMPARACIÓN (EJERCICIOS 13 - 16)
// =======================================================

/*
13. Declara dos variables numéricas.
    Muestra si son iguales (==) o diferentes (!=).
*/
// RESPUESTA AQUÍ 👇

/*
14. Declara edad = 17.
    Muestra si es mayor o igual a 18 (edad >= 18).
*/
// RESPUESTA AQUÍ 👇

/*
15. Declara dos variables a = 10, b = "10".
    Muestra el resultado de a == b y a === b para ver la diferencia.
*/
// RESPUESTA AQUÍ 👇

/*
16. Declara dos variables c = 15, d = 20.
    Muestra si c es menor que d y si c es mayor o igual que d.
*/
// RESPUESTA AQUÍ 👇

// =======================================================
// OPERADORES LÓGICOS (EJERCICIOS 17 - 20)
// =======================================================

/*
17. Declara tieneLicencia = true y tieneAuto = false.
    Usa && (AND) para verificar si puede conducir.
*/
// RESPUESTA AQUÍ 👇

/*
18. Declara esMayor = true y tieneEntrada = false.
    Usa || (OR) para verificar si puede entrar al cine.
*/
// RESPUESTA AQUÍ 👇

/*
19. Declara variable conectado = false.
    Usa ! (NOT) para mostrar el valor contrario.
*/
// RESPUESTA AQUÍ 👇

/*
20. Declara edad = 25 y nacionalidad = "boliviana".
    Usa operadores lógicos para verificar si puede votar
    (edad >= 18 && nacionalidad == "boliviana").
*/
// RESPUESTA AQUÍ 👇

// =======================================================
// COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 21 - 30)
// =======================================================

/*
21. Declara dos números y muestra su suma.
    Luego, verifica si el resultado es mayor que 50.
*/
// RESPUESTA AQUÍ 👇

/*
22. Declara tres notas (nota1, nota2, nota3).
    Calcula el promedio y muestra si aprobó (promedio >= 60).
*/
// RESPUESTA AQUÍ 👇

/*
23. Declara nombre y edad.
    Muestra un mensaje como:
    "Hola Kevin, tienes 20 años. ¿Eres mayor de edad? true"
*/
// RESPUESTA AQUÍ 👇

/*
24. Declara precioProducto y dineroDisponible.
    Muestra si puedes comprar el producto (dineroDisponible >= precioProducto).
*/
// RESPUESTA AQUÍ 👇

/*
25. Declara base y altura.
    Calcula el área de un triángulo (base * altura) / 2.
*/
// RESPUESTA AQUÍ 👇

/*
26. Declara edad, tieneCedula y tienePasaje.
    Usa operadores lógicos para saber si puede viajar.
    (edad >= 18 && tieneCedula && tienePasaje)
*/
// RESPUESTA AQUÍ 👇

/*
27. Declara saldo = 100 y gasto = 30.
    Usa operadores de asignación para restar el gasto y mostrar el nuevo saldo.
*/
// RESPUESTA AQUÍ 👇

/*
28. Declara a = 10, b = 5.
    Muestra si la suma es par o impar (usa %).
*/
// RESPUESTA AQUÍ 👇

/*
29. Declara usuario = "Kevin" y password = "1234".
    Usa && para verificar si ambos son correctos.
*/
// RESPUESTA AQUÍ 👇

/*
30. Ejercicio Final:
    Declara tus datos y calcula tu promedio.
    Luego, muestra un mensaje completo.

    let nombre = "Kevin";
    let edad = 28;
    let nota1 = 70;
    let nota2 = 80;

    let promedio = (nota1 + nota2) / 2;
    let aprobado = promedio >= 60;

    console.log(`Hola ${nombre}, tienes ${edad} años, tu promedio es ${promedio}, aprobado: ${aprobado}`);
*/
// RESPUESTA AQUÍ 👇
