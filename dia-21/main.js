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
let tiendaPC = [
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
);

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
