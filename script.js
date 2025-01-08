// Lista de imágenes en la raíz del repositorio
const images = [
    '1.JPG',
    '2.JPG',
    '3.JPG',
    '4.JPG',
    '5.JPG' // Asegúrate de que las imágenes estén correctamente nombradas
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

        // Verificar si la imagen se carga correctamente
        imageElement.onload = () => {
            // Remover el efecto de desvanecimiento
            imageElement.classList.remove('fade-out');
        };
        
        // Si no se puede cargar la imagen
        imageElement.onerror = () => {
            console.error("Error al cargar la imagen: " + images[currentImageIndex]);
            imageElement.src = "1.JPG"; // Cargar una imagen por defecto en caso de error
        };

    }, 1000); // Espera que termine el efecto de desvanecimiento (1 segundo)
}

// Iniciar el cambio de imagen cada 10 segundos
setInterval(changeImage, 10000); // Cambiar cada 10 segundos

