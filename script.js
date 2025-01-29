const images = document.querySelectorAll(".slideshow img");
const clock = document.querySelector('.clock');

let currentIndex = 0;
let isPaused = false;
let rapidInterval, stopInterval;

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

function generateRandomDate() {
  const day = Math.floor(Math.random() * 28 + 1).toString().padStart(2, "0");
  const month = Math.floor(Math.random() * 12 + 1).toString().padStart(2, "0");
  const year = Math.floor(Math.random() * (2026 - 1970 + 1) + 1970);
  return `${day}/${month}/${year}`;
}

function startClockEffect() {
  let fastUpdate = () => {
    if (!isPaused) {
      clock.textContent = generateRandomDate();
      requestAnimationFrame(fastUpdate);
    }
  };
  
  fastUpdate();
}

function stopClockEffect() {
  stopInterval = setInterval(() => {
    isPaused = true;
    setTimeout(() => {
      isPaused = false;
      startClockEffect();
    }, 3000);
  }, 3000);
}

startClockEffect();
stopClockEffect();
setInterval(showNextImage, 3000);
