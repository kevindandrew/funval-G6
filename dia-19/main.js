/* EJEMPLO BASICO */
/* let superTitulo = document.querySelector("#titulo");
console.log(superTitulo);
superTitulo.textContent = "HOLA AMIGOS DE FUNVAL"; */
/* ------------SELECIONADORES DE ELEMENTOS-------------------- */
/* let selecion1 = document.getElementById("titulo"); //RETORNA 1 SOLO ELEMENTO
let selecion2 = document.getElementsByClassName("titu"); // RETORNA UNA LISTA DE ELEMENTOS
let selecion3 = document.getElementsByTagName("h1"); // RETORNA UNA LISTA DE ELEMENTOS
let selecion4 = document.querySelector("#titulo"); // RETORNA EL PRIMER ELEMENTO Q COINICDA CON ESE CRITERIO
let selecion5 = document.querySelectorAll(".titu"); //RETORNA UNA LISTA DE ELEMENTOS */
/* console.log(selecion1);
console.log(selecion2);
console.log(selecion3);
console.log(selecion4);
console.log(selecion5); */
/* -----------MODIFICAMDO EL TEXTO----------------------- */
/* selecion4.textContent = "Kevin"; */
/* -----------MODIFICADOR DE CSS-----------------------------*/
//selecion4.style.backgroundColor = "red";
/* selecion4.style.fontSize = "100px"; */
/* --------------MODIFICADOR DE CLASES-------------------*/
/* selecion4.classList.add("p-4", "text-blue-500", "bg-slate-900"); */
/* -----------------modificando ATRIBUTOS----------------------- */
/* let imagenSud = document.querySelector("#imagen");
imagenSud.setAttribute(
  "src",
  "https://discursosud.com/wp-content/uploads/2023/08/jesus.jpg"
);
imagenSud.setAttribute("width", "100px");
console.log(imagenSud.getAttribute("alt")); */
/* -----------------MODIFICACION DE TODO EL HTML INTERIOR------------------ */
/* let contenedor = document.querySelector("#contenedor-card");
contenedor.innerHTML = `
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
`; */
/* --------------CREAR ELEMENTOS O NODOS PARA PODER INSERTARLOS ------------------------------ */
/* let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
li1.textContent = "Boren";
li2.textContent = "David";
li3.textContent = "Alfredo";
ul.append(li1, li2, li3);
contenedor.appendChild(ul); */
/* -------------------------------------------------------------------------------------------- */
let estudiantesFunval = [
  {
    nombre: "Alfredo",
    pais: "Mexico",
    edad: 28,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3jA3MbwHowvop3NIg0qJdTX9huIxgOgTXw&s",
  },
  {
    nombre: "Belen",
    pais: "Bolivia",
    edad: 28,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMRLJrOZsQ0jHtal6W9cNJv-FpmVwl10Uug&s",
  },
  {
    nombre: "Boren",
    pais: "colombia",
    edad: 28,
    img: "https://i.pinimg.com/236x/7f/f8/65/7ff8652de53c4e699ded5b5abd110282.jpg",
  },
  {
    nombre: "David",
    pais: "Chile",
    edad: 28,
    img: "https://i.etsystatic.com/19304061/r/il/8de4b1/2643592446/il_570xN.2643592446_czun.jpg",
  },
  {
    nombre: "Ibraim",
    pais: "Mexico",
    edad: 28,
    img: "https://i.etsystatic.com/10837499/r/il/b87e98/2725017395/il_570xN.2725017395_htfd.jpg",
  },
  {
    nombre: "Moises",
    pais: "Bolivia",
    edad: 28,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IVN9brixm_O6mtZmKAYMRv3w1BJy74QEpw&s",
  },
  {
    nombre: "job",
    pais: "Bolivia",
    edad: 28,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4O4gtgVmIHxbH-F1EGt93RNIR_uhcFhnrQ&s",
  },
];
let contendor = document.querySelector("#contenedor-estudiantes");

estudiantesFunval.forEach((estudiante) => {
  contendor.innerHTML += `
    
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${estudiante.img}" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">edad:${estudiante.edad}-pais:${estudiante.pais}</p>
    </div>
</a>

`;
});

/* 
    el profesor kevin necesita ver la lista de estudiantes en una tabla 
    q tendra las siguientes columnas
    nombre edad y pais crear una tabla de forma dinamica q cargue los datos 
    de los objetos de la lista estudiantes Funval
*/

/* let tabla = document.querySelector("#cuerpo-tabla");

estudiantesFunval.forEach((est) => {
  if (est.nombre.length >= 5) {
    tabla.innerHTML += ` <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <td
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ${est.nombre}
            </td>
            <td class="px-6 py-4">${est.edad}</td>
            <td class="px-6 py-4">${est.pais}</td>
            <td class="px-6 py-4 flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>

            </td>
          </tr>`;
  }
}); */
/* ----------------------------------------------------------------------------------------------- */
/* ============================
 🟢 BLOQUE 1: SELECTORES + MODIFICADORES (Nivel Básico)
 Duración sugerida: 30 minutos
============================ */

/* 1. Selecciona un elemento por ID y cambia su color de fondo a rojo. */

/* 2. Selecciona un elemento por clase y cambia su texto por "Modificado". */

/* 3. Selecciona un párrafo y cambia el tamaño de su fuente. */

/* 4. Selecciona una imagen por su ID y cambia su atributo "src". */

/* 5. Selecciona todos los elementos con una misma clase y cambia su color de texto. */

/* 6. Cambia el contenido de un div usando innerHTML. */

/* 7. Cambia el contenido de un párrafo usando textContent. */

/* 8. Añade una nueva clase CSS a un elemento usando classList.add(). */

/* 9. Elimina una clase existente usando classList.remove(). */

/* 10. Alterna una clase (toggle) en un elemento. */

/* ============================
 🟡 BLOQUE 2: NAVEGACIÓN ENTRE NODOS (Nivel Intermedio)
 Duración sugerida: 30 minutos
============================ */

/* 11. Selecciona un elemento y accede a su elemento padre con parentNode. */

/* 12. Selecciona un elemento y accede a su primer hijo usando firstElementChild. */

/* 13. Selecciona un contenedor y accede a su último hijo con lastElementChild. */

/* 14. Selecciona un elemento de una lista y navega a su siguiente hermano con nextElementSibling. */

/* 15. Selecciona un elemento de una lista y navega a su hermano anterior con previousElementSibling. */

/* 16. Muestra en consola el número de hijos que tiene un contenedor usando children.length. */

/* 17. Accede a todos los hijos de un contenedor usando children y cambia el color de cada uno. */

/* 18. Usa firstChild para mostrar en consola el primer nodo hijo (puede ser texto o elemento). */

/* 19. Accede al nodo padre de un párrafo y cambia su color de fondo. */

/* 20. Selecciona un elemento y recorre sus hijos con un bucle for para cambiarles el estilo. */

/* ============================
 🔴 BLOQUE 3: COMBINADOS (Selectores + Modificadores + Navegación)
 Duración sugerida: 30 minutos
============================ */

/* 21. Selecciona un contenedor, accede a su primer hijo y cambia su texto. */

/* 22. Selecciona una lista (ul), accede al segundo li y cámbiale el color de fondo. */

/* 23. Selecciona el tercer hijo de un contenedor y elimina una clase de él. */

/* 24. Selecciona un contenedor y cambia el texto de todos sus hijos. */

/* 25. Selecciona un div, accede a su padre y cambia su borde. */

/* 26. Selecciona el primer elemento de una lista y cambia el texto de su siguiente hermano. */

/* 27. Selecciona un elemento, navega a su padre y luego a su primer hijo para cambiarle el estilo. */

/* 28. Selecciona un contenedor con varios elementos y alterna una clase en cada uno de sus hijos. */

/* 29. Usa innerHTML para insertar una etiqueta <strong> dentro de un párrafo hijo. */

/* 30. Recorre todos los hijos de un contenedor y cambia el contenido de cada uno con un texto numerado. */
