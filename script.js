// Seleccionar todas las imágenes en la presentación
const images = document.querySelectorAll(".slideshow img");
let currentIndex = 0; // Índice de la imagen actual

function showNextImage() {
  // Ocultar la imagen actual
  images[currentIndex].classList.remove("active");

  // Calcular el índice de la siguiente imagen
  currentIndex = (currentIndex + 1) % images.length;

  // Mostrar la nueva imagen
  images[currentIndex].classList.add("active");
}

// Inicializar la primera imagen como visible
images[currentIndex].classList.add("active");

// Cambiar la imagen automáticamente cada 10 segundos
setInterval(showNextImage, 10000);
