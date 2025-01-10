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
    setInterval(showNextImage, 10000); // Cambia de imagen cada 10 segundos
  } else {
    console.error("No se encontraron imágenes en el slideshow.");
  }
}

// Función para actualizar el reloj
function updateClock() {
  const clock = document.querySelector('.clock');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Inicializar todo al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  setInterval(updateClock, 1000); // Actualizar el reloj cada segundo
});
