// Seleccionar todas las imágenes
const images = document.querySelectorAll(".slideshow img");
let currentIndex = 0; // Índice de la imagen actual

// Función para mostrar la siguiente imagen
function showNextImage() {
  // Ocultar la imagen actual
  images[currentIndex].classList.remove("active");

  // Calcular el índice de la siguiente imagen
  currentIndex = (currentIndex + 1) % images.length;

  // Mostrar la nueva imagen
  images[currentIndex].classList.add("active");
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
