// Seleccionamos el botón y el contenedor
const boton = document.querySelector("button");
const contenedor = document.getElementById("contenedor");

// Evento del botón: detiene la propagación del evento
boton.addEventListener("click", function(event) {
  event.stopPropagation(); // Evita que el evento llegue al div
  alert("Hola!");
});

// Evento del div
contenedor.addEventListener("click", function() {
  alert("Hola! Soy el div");
});
