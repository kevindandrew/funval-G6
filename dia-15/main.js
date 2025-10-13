/* -------------------CONCEPTOS BASICOS---------------- */
//boleanos-strings-NUMBER-UNDEFINED-NULL-BIGINT-symbol
//i++ i+=8   c*=8   c--
//incrementar su valor restar su valor hacer mas breve el codigo actualizar el valor original
// AND && || OR  !NOT
/* 
    AND    V   LOS 2 Q ESTAN CONECTADOS SON V TODOS LOS DEMAS SON F
    OR     F LOS 2 Q ESTAN CONECTADOS SON F TODO LO DEMAS ES V
    NOT    INVIERTE EL VALOR BOOLEANO DE UN ELEMENTO SI ES V SE CONVIERTE EN F Y VICEBERSA
    ----------------------------------------------------------------------------------------
    <    >  ===   !==
    =
    ==
    ===
*/
/* --------------------CONDICIONALES--------------------- */
/* CONDCION
    ?VERDADERO
    SENTENCIA1
    SENTENCIA2
    :FALSO
    IF           SI ES VERDAD SUCEDE ALGO X NO EVALUA NADA SI ES FALSO
    IF-ELSE      EVALUA TANTO SI ES VERDADERA O SI ES FALSA 
    IF-ELSE-IF

    IF(CONDICION){
    CONDICION ES V
    }ELSE IF(CONDICION){         MULTIPLES-OPCIONES   REMPLAZABLE CON UN SWICH CASE
    CONDICION 2 ES V
    }

    IF(CONDICION){
    CONDICION ES V
    }ELSE{
        CODIGO SI LA CONDICION 1 ES FALSA Y AUN NO SE EVALUA LA CONDICION 2
        IF(CONDICION){
        CONDICION2 ES V
        }
    }

*/
let edad = 19;

if (edad >= 18) {
  console.log("puedes ingresar");
} else {
  console.log("eres menor de edad");
  if (edad <= 10) {
    console.log("llamar a sus padres");
  }
}
/* ---------------------------SINTAXIS WHILE--------------------------- */
/* 
    while(CONDICION){
    codigo q estara dentro del bucle
    }
*/

/* let n = "";
while (n !== "chau") {
  n = prompt("saluda a nuestro hermano Jaime");
  console.log(n);
} */

/*
20. Calcula la suma de los números del 1 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇

let num = 1;
let resultado = 0;
while (num <= 20) {
  resultado = resultado + num;
  console.log(resultado);
  num++;
}
console.log("el resultado es :" + resultado);
/* -----------------SINTAXIS DE DO-WHILE---------------- */

/* 
    do{
        codigo q estara dentro del bucle  pero ingresara almenos 1 vez
    }while(CONDICION)
*/

/* let username, passwd;
let c = 0;
do {
  c++;
  if (c >= 2) {
    alert("datos incorrectos por favor ingresa de nuevo");
  }
  username = prompt("ingresa tu nombre de usuario");
  passwd = prompt("ingresa tu contraseña");
} while (username !== "KEVIN322@" || passwd != 123456);
alert("ACCESO CORRECTO BIENVENIDO"); */
/* -----------------------FOR------------------------------- */
/* 
    for(let c=0;c<=10;c++){
    CODIGO Q SE EJECUTARA DENTRO DE NUESTRO BUCLE
    }
*/
/* let n = 5;
let cant = parseInt(
  prompt("ingresa la cantidad de elementos q te gustaria de la serie del 5")
);

for (let i = 1; i <= cant; i++) {
  console.log(n);
  n += 5;
} */
/* -------------ejercicios---------------------------------- */
/*
37. Simula un inicio de sesión:
   Tienes 3 intentos para ingresar correctamente usuario="admin" y contraseña="1234".
   Si falla los 3 intentos, muestra "Acceso bloqueado".
*/
// RESPUESTA AQUÍ 👇    kevin :v

/* let usuario, contraseña;
let superContador = 0;
do {
  usuario = prompt("ingresa tu usuario");
  contraseña = prompt("ingresa tu contraseña");
  superContador++;
  if (superContador >= 3) {
    break;
  }
} while (usuario !== "admin" || contraseña != 1234);

if (superContador > 3) {
  alert("ACCESO BLOQUEADO");
} else {
  alert("Bienvenida al sistema");
} */

//let usuario, contrasena;
// let contador = 0;
// let permitido = false;
// do {
//   usuario = prompt("Ingrese su usuario:");
//   contrasena = prompt("Ingrese su contraseña:");
//   contador++;
//   if (usuario === "admin" && contrasena === "1234") {
//     alert("¡Acceso concedido! Bienvenido " + usuario);
//     permitido = true;
//     break;
//   } else {
//     alert("Credenciales incorrectas. Intento " + contador + " de 3.");
//   }
// } while (contador < 3 && !permitido);
// if (!permitido) {
//   alert("Acceso bloqueado ");
// }
/* ----------------EJERCICIOS 33------------------------ */
/*
33. Pide nombre de usuario y contraseña.
   Si usuario es "Kevin" o "Belen" y contraseña es "1234",
   muestra "Acceso autorizado", de lo contrario "Denegado".
*/
// RESPUESTA AQUÍ 👇
/* let nmr;
let pass;
let swch = true;
do {
  nmr = prompt("Nombre de usuario").toLowerCase();
  pass = parseInt(prompt("Contraseña"));
  if ((nmr !== "kevin" && nmr !== "Belen") || pass !== 1234) {
    alert("Acesso denegado");
  } else {
    swch = false;
  }
} while (swch);
alert("Acceso autorizado"); */
/* -----------------------FUNCIONES------------------------- */
function nombreDeLaFuncion() {
  //todo el codigo q se ejecutara
  console.log("funcion normalita");
}
//FUNCIONES ANONIMAS
const funcionAnonima = function () {
  //todo el codigo q se ejecutara
  console.log("funcion anonima");
};
//FUNCIONES FLECHA (ARROW FUNCTION)
const funcionFlecha = (a) => console.log("funcion flecha");

nombreDeLaFuncion();
funcionAnonima();
funcionFlecha();
