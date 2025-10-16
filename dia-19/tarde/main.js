/* let titulo = document.querySelector(".titulo");

titulo.textContent = "HOLA FUNVAL CURSO DE DESARROLLO WEB";
titulo.style.color = "red";
console.log(titulo.classList);
titulo.classList.add("kevin");
console.log(titulo.classList);
console.log(titulo); */
/* -------------------------------------------------------- */
/* ============================
 🟢 BLOQUE 1: SELECTORES + MODIFICADORES (Nivel Básico)
 Duración sugerida: 30 minutos
============================ */

/* 1. Selecciona un elemento por ID y cambia su color de fondo a rojo. */
let titulo = document.querySelector("#titulo");
titulo.classList.add("bg-red-600", "text-white");
/* 2. Selecciona un elemento por clase y cambia su texto por "Modificado". */
document.querySelector(".parrafito").textContent = "Modificado";
/* 3. Selecciona un párrafo y cambia el tamaño de su fuente. */
document.querySelector(".parrafo2").style.fontSize = "35px";
/* 4. Selecciona una imagen por su ID y cambia su atributo "src". */
document
  .querySelector("#hero")
  .setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEaGr7_IeTZ9bVkaFm9B1Wcik19quP-wNDOOQHoZoscVcrJ2cYhyM3QhYlKgEvpyf2FrY&usqp=CAU"
  );
/* 5. Selecciona todos los elementos con una misma clase y cambia su color de texto. */
let listaClase = document.querySelectorAll(".boku");
listaClase.forEach((elemento) => {
  elemento.classList.add("text-green-600");
});
/* 6. Cambia el contenido de un div usando innerHTML. */

/* 7. Cambia el contenido de un párrafo usando textContent. */
document.querySelector(".parrafo2").textContent =
  "suscribanse a Gemini usando su cuenta institucional :D recibiran 1 año de gemini";
/* 8. Añade una nueva clase CSS a un elemento usando classList.add(). */

/* 9. Elimina una clase existente usando classList.remove(). */
document
  .querySelector("#superParrafo")
  .classList.remove("font-bold", "bg-slate-900", "text-white");
/* 10. Alterna una clase (toggle) en un elemento. */

/* ============================
 🟡 BLOQUE 2: NAVEGACIÓN ENTRE NODOS (Nivel Intermedio)
 Duración sugerida: 30 minutos
============================ */

/* 11. Selecciona un elemento y accede a su elemento padre con parentNode. */
let hijo = document.querySelector(".hijo-parrafo");
let padre = hijo.parentNode;
padre.classList.add("bg-slate-900", "text-white");
console.log(padre);
/* 12. Selecciona un elemento y accede a su primer hijo usando firstElementChild. */
let papa = document.querySelector(".papa");
let hijito = papa.firstElementChild; /// usar este  x favor
let primerHijo = papa.firstChild;
console.log(primerHijo);
console.log(hijito);
/* 13. Selecciona un contenedor y accede a su último hijo con lastElementChild. */
let ultimo = papa.lastElementChild;
ultimo.classList.add("bg-red-700", "text-white", "font-bold");
console.log(ultimo);

/* 14. Selecciona un elemento de una lista y navega a su siguiente hermano con nextElementSibling. */

/* 15. Selecciona un elemento de una lista y navega a su hermano anterior con previousElementSibling. */
let medio = document.querySelector(".hermano-medio");
let mayor = medio.previousElementSibling;
console.log(mayor);
/* 16. Muestra en consola el número de hijos que tiene un contenedor usando children.length. childElementCount*/

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
