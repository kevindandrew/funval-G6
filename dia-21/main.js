/* --------------DESESTRUCUTRACION DE ARRAYS------------------------ */
let paises = [
  "Brasil",
  "Argentina",
  "Colombia",
  "Peru",
  "Venezuela",
  "Bolivia",
];

/* let pais1 = paises[0];
let pais2 = paises[1];
let pais3 = paises[2];
let pais4 = paises[3];
let pais5 = paises[4]; */

let [pais2, , , , , pais6 = "pais no definido"] = paises;
console.log(pais2);
/* --------------------DESESTRUCTURACION DE OBJETOS-------------- */
let computadora = {
  procesador: "ryzen 5 3500g",
  ram: "16gb",
  disco: "480gb ssd",
  fuente: "1200wts",
  tarjeta: "3060ti",
  gabinete: "asus",
  madre: "gigabite",
};

let {
  fuente,
  tarjeta,
  procesador: cerebro,
  disco,
  ram,
  gabinete = "sure",
  madre = "asus prime",
} = computadora;
console.log(gabinete);
/* --------------------EJEMPLO REAL------------------------------------- */
/* let tiendaPC = [
  {
    procesador: "ryzen 5 3500g",
    ram: "16gb",
    disco: "480gb ssd",
    fuente: "1200wts",
    tarjeta: "3060ti",
    gabinete: "asus",
    madre: "gigabite",
  },
  {
    procesador: "intel corei3 1000f",
    ram: "32gb",
    disco: "480gb ssd",
    fuente: "1200wts",
    gabinete: "asus",
    madre: "gigabite",
  },
  {
    procesador: "ryzen 3 3200g",
    ram: "16gb",
    disco: "480gb ssd",
    fuente: "1200wts",
    gabinete: "iris",
    madre: "aorus",
  },
  {
    procesador: "corei7",
    ram: "16gb",
    disco: "1tb hdd",
    fuente: "1000wts",
    tarjeta: "3080ti",
    madre: "gigabite",
  },
  {
    fuente: "1200wts",
    tarjeta: "3060ti",
    gabinete: "asus",
  },
];

let tabla = document.querySelector("#cuerpo-tabla");

tiendaPC.forEach(
  ({
    procesador = "componente no comprado",
    ram = "componente no comprado",
    disco = "componente no comprado",
    fuente = "componente no comprado",
    tarjeta = "componente no comprado",
    gabinete = "componente no comprado",
    madre = "componente no comprado",
  }) => {
    tabla.innerHTML += `          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ${procesador}
            </th>
            <td class="px-6 py-4">${ram}</td>
            <td class="px-6 py-4">${disco}</td>
            <td class="px-6 py-4">${fuente}</td>
            <td class="px-6 py-4">${tarjeta}</td>
            <td class="px-6 py-4">${gabinete}</td>
            <td class="px-6 py-4">${madre}</td>
          </tr>`;
  }
); */

/* -------------------SPREAD OPERATOR------------------------------------ */
//CUANDO QUEREMOS CREAR UNA COPIA DE UN ARRAY O UN OBJETO
//CUANDO APARTIR DE UN OBJETO O UN ARRAY QUEREMOS CREAR UNO NUEVO CON ALGUNOS ATRIBUTOS ADICIONALES
//CUANDO QUEREMOS UNIR O FUSIONAR 2 O MAS OBJETOS O ARRAYS EN UN SOLO
/* ---------------------ARRAYS------------------------------------------ */
let frutas = ["naranja", "papaya", "palta", "sandia", "manzana"];
let copiaFrutas = [...frutas];

/* --------------------------------------------------------------------- */
let frutasCaras = [...frutas, "chirimoya", "igo", "ciruela"];
console.log(frutasCaras);
/* ------------------------------------------------------------------ */
let est = ["Jaime", "Alfredo", "Moises"];
let fusion = [...est, ...frutas, "Kevin", ...frutasCaras];
console.log(fusion);
/* ------------------OBJETOS-------------------------------- */
let humano = {
  nombre: "peter parker",
  edad: 22,
  pais: "ESTADOS UNIDOS",
};
let copiaObjeto = { ...humano };
console.log(copiaObjeto);
/* ------------------------------------------------------------ */
let superHero = {
  ...humano,
  superNombre: "Spiderman",
  poder: "sentido araña",
  fuerza: 80,
};
console.log(superHero);
/* ----------------------------------------------------------- */
let hero = {
  nombre: "steve rogers",
  nombreSuper: "Capitan America",
  fuerza: 90,
};
let AgenteShield = {
  nombre: "Nick Fury",
  arma: "cañon",
  nivel: "capitan",
  fuerza: 10,
};
let superFusion = {
  ...hero,
  ...AgenteShield,
};

console.log(superFusion);
/* 
        quiero q ustedes creen un objeto puedan copiarlo crear una version 
        mejorada del objeto y fusionarlo con otro objeto
*/
/* ------------------------------------------------------------ */
let estudiantesFunval = [
  {
    nombre: "ALFREDO",
    edad: 35,
    pais: "Mexico",
    notas: [35, 67, 89],
  },
  {
    nombre: "David",
    edad: 25,
    pais: "Chile",
    notas: [12, 98, 64],
  },
  {
    nombre: "Emanuel",
    edad: 28,
    pais: "Peru",
    notas: [67, 39, 100],
  },
  {
    nombre: "Gerardo",
    edad: 22,
    pais: "El Salvador",
    notas: [89, 77, 66],
  },
];
let tabla = document.querySelector("#cuerpo-tabla");
let botoncito = document.querySelector("#btn");
let cerrar = document.querySelector("#close");
let modal = document.querySelector(".modal");
let formulario = document.querySelector("#formulario-estudiante");
mostrarEstudiantes();
botoncito.addEventListener("click", (e) => {
  /* let estudianteNuevo = {
    nombre: "kevin",
    edad: 28,
    pais: "Bolivia",
    notas: [10, 20, 30],
  };
  estudiantesFunval = [...estudiantesFunval, estudianteNuevo];
  mostrarEstudiantes(); */
  modal.classList.remove("hidden");
});
cerrar.addEventListener("click", (e) => {
  modal.classList.add("hidden");
});
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  console.log("hola funval");
  let nombre = formulario.nombre.value;
  let edad = formulario.edad.value;
  let pais = formulario.pais.value;
  let objNuevo = { nombre, pais, edad };
  estudiantesFunval = [...estudiantesFunval, objNuevo];
  modal.classList.add("hidden");
  formulario.reset();
  mostrarEstudiantes();
});
function mostrarEstudiantes() {
  tabla.innerHTML = "";
  estudiantesFunval.forEach(({ nombre, edad, pais, notas = [0] }) => {
    tabla.innerHTML += ` <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ${nombre}
            </th>
            <td class="px-6 py-4">${edad}</td>
            <td class="px-6 py-4">${pais}</td>
            <td class="px-6 py-4">${promedio(notas)}</td>
          </tr>`;
  });
}

function promedio(notasArray) {
  let resultado = 0;
  for (let index = 0; index < notasArray.length; index++) {
    resultado += notasArray[index];
  }
  resultado /= notasArray.length;
  return resultado.toFixed(2);
}

/* -----------------------------------------------------------
TANDA DE 30 EJERCICIOS — Desestructuración + Spread 
----------------------------------------------------------- */

//  BLOQUE 1: Desestructuración aplicada (objetos + arrays)
// Objetivo: aplicar desestructuración en escenarios reales.

// 1. Dado un objeto usuario con {nombre, edad, direccion: {ciudad, pais}},
// desestructura todos los valores y muestra un mensaje con ellos.

// 2. Dado un array de estudiantes con objetos {nombre, edad, notas: [..]},
// desestructura para obtener nombre y calcular promedio de notas.

// 3. Desestructura el primer y último elemento de un array sin usar índices directos.

// 4. Dado un objeto producto con muchas propiedades, usa desestructuración con rest
// para extraer "nombre" y "precio" y guardar el resto en otra variable.

// 5. Usa desestructuración en parámetros de una función para recibir
// un objeto con {usuario, rol, activo} y mostrar solo usuario y rol.

// 6. Dado un array anidado [[1,2],[3,4],[5,6]], desestructura para obtener el número 6 directamente.

// 7. Desestructura un array de 10 elementos para obtener solo los primeros 3
// y el resto guardarlo en otra variable con rest.

// 8. Dado un objeto con propiedades anidadas (empresa → departamento → empleado),
// desestructura en una sola línea para obtener el nombre del empleado.

// 9. Usa desestructuración para intercambiar el valor de dos variables sin usar una variable temporal.

// 10. Desestructura una función que retorna un array [estado, setEstado],
// similar a como hace React con useState().

//  BLOQUE 2: Operador Spread aplicado
// Objetivo: crear, combinar y actualizar datos sin mutar.

// 11. Combina dos arrays de objetos (estudiantes y nuevosEstudiantes)
// en uno solo usando spread y muestra la lista combinada.

// 12. A partir de un array de productos, agrega un nuevo producto usando spread
// sin usar push.

// 13. A partir de un objeto usuario, crea uno nuevo con un rol adicional "admin"
// sin modificar el original.

// 14. Dado un array de usuarios, reemplaza el usuario con id = 3
// con uno nuevo usando map + spread.

// 15. Combina las propiedades de dos objetos que tienen claves repetidas
// y observa qué propiedad prevalece.

// 16. Crea una copia profunda de un array de objetos usando spread
// y modifica uno de ellos sin afectar el original.

// 17. A partir de un array de notas, usa spread para agregar múltiples notas de una sola vez.

// 18. Clona un objeto anidado y modifica solo una propiedad interna sin alterar el original.

// 19. Crea un nuevo objeto "pedido" combinando los datos de un cliente y un producto.

// 20. Usa spread para clonar un array grande y ordénalo sin modificar el original.

//  BLOQUE 3: Casos prácticos combinando Desestructuración + Spread
// Objetivo: simular casos reales tipo mini app / lógica avanzada.

// 21. Dado un array de estudiantes con notas, crea una función que
// devuelva un nuevo array con todos los estudiantes que tengan promedio > 80,
// usando desestructuración y spread para crear nuevos objetos.

// 22. Crea una función "actualizarStock" que reciba un array de productos y un id,
// y retorne un nuevo array con el producto incrementado en +1 stock sin mutar.

// 23. Crea una función "agregarTarea" que reciba una lista de tareas y una nueva tarea
// y retorne una nueva lista (no mutar el original).

// 24. Crea una función que reciba un objeto usuario y retorne otro
// con la propiedad "estado: activo" agregada usando spread.

// 25. Desestructura un array de objetos libros y devuelve un nuevo array
// solo con el título y autor usando map + desestructuración.

// 26. Crea una función que desestructure los parámetros {nombre, precio}
// de un producto y devuelva un nuevo objeto con un impuesto agregado (IVA).

// 27. Combina dos arrays de objetos usuarios y usa desestructuración para
// crear un nuevo array solo con {nombre, email} de cada uno.

// 28. Desestructura un objeto anidado de configuración de app para extraer
// opciones específicas y combina con otras opciones usando spread.

// 29. Simula una “actualización masiva”: dado un array de estudiantes,
// retorna un nuevo array con +1 año en edad para todos (sin mutar el original).

// 30. Crea una función que reciba un array de órdenes de compra y devuelva
// un nuevo array con el total calculado por cada orden usando desestructuración y spread.
