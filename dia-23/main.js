/* ---------------------------SINCRONO............................... */
/* console.log("Juan");
console.log("Kevin");
console.log("david");
console.log("Alfredo");
console.log("Emanuel");
console.log("Boren"); */
/* --------------------------ASINCRONO------------------------------ */

/* console.log("Ibraim");

setTimeout(() => {
  console.log("kevin");
}, 5000);

console.log("Belen");
console.log("Edmund");
setTimeout(() => {
  console.log("jorge");
}, 3000);
console.log("moises"); */
/* --------------------PROBLEMA DE TRABAJR CON ASINCRONIA----------------------- */

let estudiantes = [
  {
    nombre: "Juan",
    materia: "JavaScript",
    nota: 85,
  },
  {
    nombre: "Ana",
    materia: "JavaScript",
    nota: 92,
  },
  {
    nombre: "Luis",
    materia: "JavaScript",
    nota: 78,
  },
  {
    nombre: "Maria",
    materia: "JavaScript",
    nota: 90,
  },
];

/* console.log(estudiantes); */
/* aprender a crear una promesa */
const promesaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let resuelto = true;
    if (resuelto) {
      resolve(estudiantes);
    } else {
      reject("mala conexion del servidor");
    }
  }, 3000);
});
let contenedor = document.querySelector("#container");
/* -----CONSUME UNA PROMESA--- */
promesaEstudiantes
  .then((respuesta) => {
    console.log(respuesta);
    respuesta.forEach(({ nombre, materia, nota }) => {
      contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">materia:${materia}-nota:${nota}.</p>
</a>
`;
    });
  })
  .catch((err) => {
    console.log(err);
  });
/* 
crear una promesa y consumirla
*/
/* ----------------EJERCICIOS PROMESAS---------------- */
// 1. Promesa que retorna un array de productos
const getProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    const productos = [
      { id: 1, nombre: "Laptop", precio: 1200 },
      { id: 2, nombre: "Mouse", precio: 25 },
      { id: 3, nombre: "Teclado", precio: 45 },
    ];
    resolve(productos);
  }, 1000);
});

// 2. Promesa que retorna un array de notas de estudiantes
const getNotas = new Promise((resolve, reject) => {
  setTimeout(() => {
    const notas = [
      { estudiante: "Ana", notas: [18, 15, 19] },
      { estudiante: "Luis", notas: [12, 14, 16] },
      { estudiante: "María", notas: [20, 19, 18] },
    ];
    resolve(notas);
  }, 1500);
});

// 3. Promesa que puede fallar aleatoriamente
const getUsuarios = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = Math.random() > 0.3; // 70% de éxito
    if (exito) {
      resolve([
        { id: 1, nombre: "Kevin" },
        { id: 2, nombre: "Carla" },
        { id: 3, nombre: "Diego" },
      ]);
    } else {
      reject("Error al obtener usuarios 😢");
    }
  }, 1200);
});

// 4. Promesa que retorna un array de cursos
const getCursos = new Promise((resolve) => {
  setTimeout(() => {
    const cursos = [
      { codigo: "INF101", nombre: "Programación I" },
      { codigo: "INF202", nombre: "Estructuras de Datos" },
      { codigo: "INF303", nombre: "Base de Datos" },
    ];
    resolve(cursos);
  }, 800);
});

// 5. Promesa que retorna un array de tareas
const getTareas = new Promise((resolve) => {
  setTimeout(() => {
    const tareas = [
      { id: 1, titulo: "Estudiar Promesas", completada: false },
      { id: 2, titulo: "Hacer ejercicio", completada: true },
      { id: 3, titulo: "Leer un libro", completada: false },
    ];
    resolve(tareas);
  }, 2000);
});
