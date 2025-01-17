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

function showNextImage() {
  const images = document.querySelectorAll(".slideshow img");
  let currentIndex = 0;

  if (images.length > 0) {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }
}

function initSlideshow() {
  const images = document.querySelectorAll(".slideshow img");
  if (images.length > 0) {
    setInterval(showNextImage, 3000);
  }
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

document.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  initBrokenClock();
  initMusic();
});
