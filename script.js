const clock = document.querySelector(".clock");
const audio = document.getElementById("background-music");
let isPaused = false;

function generateRandomDate() {
  const day = Math.floor(Math.random() * 28 + 1).toString().padStart(2, "0");
  const month = Math.floor(Math.random() * 12 + 1).toString().padStart(2, "0");
  const year = Math.floor(Math.random() * (2026 - 1970 + 1) + 1970);
  return `${day}/${month}/${year}`;
}

function animateClock() {
  let speed = 50;
  let interval = setInterval(() => {
    if (!isPaused) {
      clock.textContent = generateRandomDate();
    }
  }, speed);

  setInterval(() => {
    isPaused = true;
    setTimeout(() => {
      isPaused = false;
    }, 1000);
  }, 3000);
}

window.addEventListener("DOMContentLoaded", () => {
  animateClock();
  audio.volume = 0.5;
});
