const background = document.querySelector('.background');
const grain = document.querySelector('.grain');
const images = document.querySelectorAll(".slideshow img");
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  background.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
});

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
    }, 2000);
  }, 5000);
}

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

const fileInput = document.getElementById('file-upload');
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log('Archivo seleccionado:', file.name);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showNextImage, 3000);
  initBrokenClock();
  initMusic();
});


