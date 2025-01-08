// Lista de imágenes en la carpeta "imagenes"
const images = [
    'imagen (1).JPG',
    'imagen (2).JPG',
    'imagen (3).JPG',
    'imagen (4).JPG' // Agrega más imágenes según necesites
];

let currentImageIndex = 0;
const imageElement = document.getElementById('image');

// Función para cambiar la imagen
function changeImage() {
    // Aplica el efecto de desvanecimiento
    imageElement.classList.add('fade-out');

    setTimeout(() => {
        // Cambiar la imagen después de la animación
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];
        
        // Remover el efecto de desvanecimiento y aplicar el nuevo barrido
        imageElement.classList.remove('fade-out');
    }, 1000); // Espera que termine el efecto de desvanecimiento (1 segundo)
}

// Iniciar el cambio de imagen cada 10 segundos
setInterval(changeImage, 10000); // Cambiar cada 10 segundos
