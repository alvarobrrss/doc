const images = document.querySelectorAll(".slideshow img");
const clock = document.querySelector(".clock");
const audio = document.getElementById("background-music");

let currentIndex = 0;
let isPaused = false;
let interval;

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

function startClockAnimation() {
  clearInterval(interval);
  let speed = 100; 

  interval = setInterval(() => {
    if (!isPaused) {
      clock.textContent = generateRandomDate();
    }
  }, speed);

  setInterval(() => {
    isPaused = true;
    setTimeout(() => {
      clock.textContent = generateRandomDate();
      setTimeout(() => {
        isPaused = false;
      }, 500);
    }, 500);
  }, 3000);
}

window.addEventListener("DOMContentLoaded", () => {
  startClockAnimation();
  setInterval(showNextImage, 3000);
  audio.volume = 0.5;
});
