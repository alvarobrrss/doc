// Seleccionar todas las imágenes
const images = document.querySelectorAll(".slideshow img");
const fadeOut = document.querySelector(".slideshow::after"); // Fondo negro
let currentIndex = 0; // Índice de la imagen actual

// Función para mostrar la siguiente imagen
function showNextImage() {
  // Desvanecer la imagen actual a negro
  fadeOut.style.opacity = 1; // Hacer que el fondo negro aparezca

  setTimeout(() => {
    // Ocultar la imagen actual
    images[currentIndex].classList.remove("active");

    // Calcular el índice de la siguiente imagen
    currentIndex = (currentIndex + 1) % images.length;

    // Mostrar la nueva imagen
    images[currentIndex].classList.add("active");

    // Eliminar el fondo negro para mostrar la nueva imagen
    fadeOut.style.opacity = 0;
  }, 1000); // Este tiempo debería coincidir con la duración de la transición de opacidad (1s)
}

// Inicializar la primera imagen como visible
function initSlideshow() {
  if (images.length > 0) {
    images[0].classList.add("active"); // Activa la primera imagen
    setInterval(showNextImage, 10000); // Cambia de imagen cada 10 segundos
  } else {
    console.error("No se encontraron imágenes en el slideshow.");
  }
}

// Llamar a la función de inicialización al cargar la página
document.addEventListener("DOMContentLoaded", initSlideshow);

