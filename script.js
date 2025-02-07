const slideshowContainer = document.querySelector(".slideshow");
const clock = document.querySelector(".clock");
const audio = document.getElementById("background-music");

let imagesArray = [];
let currentIndex = 0;

for (let i = 1; i <= 44; i++) {
  let img = document.createElement("img");
  img.src = `bkh_50/imagenbkh (${i}).jpg`;
  img.alt = `Imagen ${i}`;
  imagesArray.push(img);
  slideshowContainer.appendChild(img);
}

imagesArray[0].classList.add("active");

function showNextImage() {
  imagesArray[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % imagesArray.length;
  imagesArray[currentIndex].classList.add("active");
}

function generateRandomDate() {
  const day = Math.floor(Math.random() * 28 + 1).toString().padStart(2, "0");
  const month = Math.floor(Math.random() * 12 + 1).toString().padStart(2, "0");
  const year = Math.floor(Math.random() * (2026 - 1970 + 1) + 1970);
  return `${day}/${month}/${year}`;
}

function animateClock() {
  let speed = 50;
  let interval = setInterval(() => {
    clock.textContent = generateRandomDate();
  }, speed);

  setInterval(() => {
    clearInterval(interval);
    setTimeout(() => {
      interval = setInterval(() => {
        clock.textContent = generateRandomDate();
      }, speed);
    }, 1000);
  }, 3000);
}

window.addEventListener("DOMContentLoaded", () => {
  animateClock();
  setInterval(showNextImage, 3000);
  audio.volume = 0.5;
});
