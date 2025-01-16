const images = document.querySelectorAll(".slideshow img");
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

function initSlideshow() {
  if (images.length > 0) {
    setInterval(showNextImage, 3000);
  }
}

function generateRandomTime() {
  const hours = Math.floor(Math.random() * 24).toString().padStart(2, "0");
  const minutes = Math.floor(Math.random() * 60).toString().padStart(2, "0");
  const seconds = Math.floor(Math.random() * 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function initBrokenClock() {
  const clock = document.querySelector('.clock');
  setInterval(() => {
    clock.textContent = generateRandomTime();
  }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  initBrokenClock();
});
