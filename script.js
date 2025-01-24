// Movimiento del fondo interactivo
const background = document.querySelector('.background');
const grain = document.querySelector('.grain');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  // Movimiento del fondo
  background.style.transform = `translate(-${x / 2}%, -${y / 2}%)`;

  // Movimiento del grano
  grain.style.background = `
    radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.2), transparent)
  `;
});

// Generador de fechas aleatorias (reloj roto)
function generateRandomDate() {
  const day = Math.floor(Math.random() * 28 + 1).toString().padStart(2, "0");
  const month = Math.floor(Math.random() * 12 + 1).toString().padStart(2, "0");
  const year = Math.floor(Math.random() * (2030 - 1970 + 1) + 1970);
  return `${day}/${month}/${year}`;
}

function initBrokenClock() {
  const clock = document.querySelector('.clock');
  let isPaused = false;
  let fixedDate = "";

  const intervalId = setInterval(() => {
    if (!isPaused) {
      clock.textContent = generateRandomDate();
    }
  }, 50);

  setInterval(() => {
    isPaused = true;
    fixedDate = generateRandomDate();
    clock.textContent = fixedDate;

    setTimeout(() => {
      isPaused = false;
    }, 2000); // Pausa de 2 segundos
  }, 5000);
}

// Música de fondo
function initMusic() {
  const music = document.getElementById('background-music');
  music.loop = true;
  music.autoplay = true;
  music.play().catch(() => {
    const playButton = document.createElement('button');
    playButton.textContent = "Reproducir música";
    playButton.style.position = 'absolute';
    playButton.style.zIndex = 10;
    playButton.style.top = '20px';
    playButton.style.right = '20px';
    playButton.addEventListener('click', () => {
      music.play();
      playButton.remove();
    });
    document.body.appendChild(playButton);
  });
}

// Subida de archivos
const fileInput = document.getElementById('file-upload');
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log('Archivo seleccionado:', file.name);
  }
});

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  initBrokenClock();
  initMusic();
});

