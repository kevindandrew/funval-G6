let input = document.querySelector("#tarea");
let botoncito = document.querySelector("#adicionar");
let listado = document.querySelector(".tareas");

botoncito.addEventListener("click", () => {
  listado.innerHTML += `<li>${input.value}<button class="eliminar">X</button></li>`;
  input.value = "";
});

listado.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    console.log("encontre el boton");
    let padre = e.target.parentElement;
    console.log(padre);
    padre.remove();
  }
});
