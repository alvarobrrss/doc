const images = document.querySelectorAll(".slideshow img");
let currentIndex = 0;

function showNextImage() {
  // Ocultar la imagen actual
  images[currentIndex].classList.remove("active");

  // Calcular el índice de la siguiente imagen
  currentIndex = (currentIndex + 1) % images.length;

  // Mostrar la nueva imagen
  images[currentIndex].classList.add("active");
}

// Mostrar la primera imagen al cargar la página
images[currentIndex].classList.add("active");

// Cambiar imagen cada 10 segundos
setInterval(showNextImage, 10000);


// Iniciar el cambio de imagen cada 10 segundos
setInterval(changeImage, 10000); // Cambiar cada 10 segundos

