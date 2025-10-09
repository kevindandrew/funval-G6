/* -----------------WHILE------------------ */
/* 
    while(CONDICION){
    TODO EL CODIGO Q SE EJECUTARA 
    DENTRO DEL BUCLE
    }
*/
/* 
let n = 0;
while (n < 5) {
  console.log("hola hermano Jaime");
  console.log("hola hermano Gerardo");
  n++;
} */

//CREAR UNA APLICACION Q PERMITA INGRESAR TODA LA CANTIDAD DE NUMEROS Q GUSTE EL CLIENTE HASTA Q SE INGRESE EL 0

/* let x = 1;

while (x !== 0) {
  x = parseInt(
    prompt(`ingresa cualquier numero para mostrarlo en consola+
            ingresa 0 para salir de la consulta`)
  );
  console.log("el numero ingresado x el cliente es: " + x);
}
 */
/* -----------------DO-WHILE------------------ */
/* 
    do{
    TODO EL CODIGO Q SE EJECUTARA 
    DENTRO DEL BUCLE pero ingresa almenos 1 vez
    }while(Condicion)
*/

/* let n = 6;

do {
  console.log("entrando al bucle");
} while (n < 5);
 */
/*
crear una aplicacion q pida el nombre de usuario y 
la contraseña a una persona si esta contraseña o nombre de usuario son incorrectos 
volver a pedir q ingrese sus datos hasta q estos sean correctos
username == "ADMIN"
password == 123456n
*/
/* ------------------FOR----------------------------- */

/* for (let contador = 1; contador <= 7; contador++) {
  console.log("hola mundo");
} */

/* 
    crear una aplicacion q muestre los n terminos de la serie de los numeros
    pares ejemplo
    si el cliente coloca n = 6
    deberan mostrar en consola  2,4,6,8,10,12
    n=3
    2,4,6
    n=7
    2,4,6,8,10,12,14
*/

/* let serie = 2;
let n = parseInt(
  prompt("ingresa la cantidad de terminos de la serie q deseas ver")
);

for (let i = 1; i <= n; i++) {
  console.log(serie);
  serie += 2;
} */
/* 
    crear un multiplicador de 2 numeros sin utilizar el simbolo *
    4*5 = 4+4+4+4+4 =20
    4*5 = 5+5+5+5 =20
*/
let n1 = parseInt(prompt("ingresa EL PRIMER NUMERO"));
let n2 = parseInt(prompt("ingresa EL SEGUNDO NUMERO"));
let resultado = 0;

for (let i = 1; i <= n2; i++) {
  resultado += n1;
}
console.log(resultado);

/* 
    crear el factorial de un numero y dar el resultado utilizando el bucle for
    ejemplo 5!= 1*2*3*4*5 = 120
    3!=1*2*3 = 6
    0!=1
*/
/* -----------------------EJERCICIOS PRUEBAS TECNICAS--------------------- */
/*
1. Serie de Fibonacci
   Pide al usuario un número n y muestra en consola los primeros n números de la serie de Fibonacci.
   Ejemplo si n = 8 → 0 1 1 2 3 5 8 13

   Instrucciones:
   - Usa un bucle (for o while) para generar la serie.
   - Usa variables para almacenar los dos números anteriores.
   - Muestra cada número con console.log().
*/
// RESPUESTA AQUÍ 👇

/*
2. Números Primos
   Pide al usuario un número n y muestra todos los números primos desde 1 hasta n.
   Ejemplo si n = 10 → 2, 3, 5, 7

   Instrucciones:
   - Usa bucles anidados para verificar si un número es primo.
   - Un número primo es divisible solo por 1 y por sí mismo.
   - Usa if para verificar divisibilidad.
*/
// RESPUESTA AQUÍ 👇

/*
3. Suma de Dígitos
   Pide al usuario que ingrese un número y calcula la suma de todos sus dígitos.
   Ejemplo: si el número es 472, la suma es 4 + 7 + 2 = 13.

   Instrucciones:
   - Usa parseInt() para convertir el número.
   - Usa un bucle (while o do...while) para separar y sumar los dígitos.
   - Muestra el resultado con console.log().
*/
// RESPUESTA AQUÍ 👇

/*
4. Invertir un Número
   Pide al usuario un número y muestra su versión invertida.
   Ejemplo: si el número es 1234, la salida debe ser 4321.

   Instrucciones:
   - Usa un bucle (while o for) para extraer los dígitos.
   - Usa operaciones matemáticas (% y /) para obtener cada dígito.
   - Construye el número invertido y muéstralo en consola.
*/
// RESPUESTA AQUÍ 👇

/*
5. Número Perfecto
   Un número perfecto es aquel que es igual a la suma de sus divisores positivos (excluyéndose a sí mismo).
   Ejemplo: 6 es perfecto porque sus divisores son 1, 2 y 3 → 1 + 2 + 3 = 6

   Pide al usuario un número y determina si es perfecto o no.

   Instrucciones:
   - Usa un bucle for para sumar los divisores del número.
   - Usa if para comparar la suma con el número original.
   - Muestra un mensaje indicando si es perfecto o no.
*/
// RESPUESTA AQUÍ 👇
