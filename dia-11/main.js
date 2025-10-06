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
