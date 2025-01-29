const background = document.querySelector('.background');
const images = document.querySelectorAll(".slideshow img");
const clock = document.querySelector('.clock');

let currentIndex = 0;
let lastX = 0, lastY = 0;
let isPaused = false;

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

document.addEventListener('mousemove', (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 10;
  let y = (e.clientY / window.innerHeight - 0.5) * 10;
  
  if (Math.abs(x - lastX) > 0.5 || Math.abs(y - lastY) > 0.5) {
    lastX = x;
    lastY = y;
    requestAnimationFrame(() => {
      background.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    });
  }
});

function generateRandomDate() {
  const day = Math.floor(Math.random() * 28 + 1).toString().padStart(2, "0");
  const month = Math.floor(Math.random() * 12 + 1).toString().padStart(2, "0");
  const year = Math.floor(Math.random() * (2026 - 1970 + 1) + 1970);
  return `${day}/${month}/${year}`;
}

function initBrokenClock() {
  setInterval(() => {
    if (!isPaused) {
      clock.textContent = generateRandomDate();
    }
  }, 1000);

  setInterval(() => {
    isPaused = !isPaused;
  }, 3000);
}

initBrokenClock();
setInterval(showNextImage, 3000);
