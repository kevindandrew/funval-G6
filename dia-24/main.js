let contenedor = document.querySelector("#contenedor-usuarios");

/* ------------------FETCH------------------------ */
/* fetch("https://jsonplaceholder.typicode.com/users")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    console.log(data);
    data.forEach(({ name, email, phone }) => {
      contenedor.innerHTML += `
        
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${name}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">correo:${email}.</p>
<p class="font-normal text-gray-700 dark:text-gray-400">telefono:${phone}</p>
</a>

        `;
    });
  });
 */

/* -------------------FUNCIONES ASYNC Y AWAIT------------------ */
/* async function traerDatosAPI() {
  let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await respuesta.json();
  data.forEach(({ name, email, phone }) => {
    contenedor.innerHTML += `
        
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${name}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">correo:${email}.</p>
<p class="font-normal text-gray-700 dark:text-gray-400">telefono:${phone}</p>
</a>
`;
  });
}
traerDatosAPI();
 */

/* ---------------------------AXIOS--------------------------------- */

/* axios("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
  data.forEach(({ name, email, phone }) => {
    contenedor.innerHTML += `
        
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${name}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">correo:${email}.</p>
<p class="font-normal text-gray-700 dark:text-gray-400">telefono:${phone}</p>
</a>
`;
  });
}); */
/* -------------------AXIOS-FUNCIONES ASYNC Y AWAIT--------------------------- */
/* async function traerDatosAPI() {
  let { data } = await axios("https://jsonplaceholder.typicode.com/users");
  data.forEach(({ name, email, phone }) => {
    contenedor.innerHTML += `
        
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${name}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">correo:${email}.</p>
<p class="font-normal text-gray-700 dark:text-gray-400">telefono:${phone}</p>
</a>
`;
  });
}

traerDatosAPI(); */

axios("https://www.demonslayer-api.com/api/v1/characters").then((respuesta) => {
  console.log(respuesta);
});
