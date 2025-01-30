const slideshowContainer = document.querySelector(".slideshow");
const clock = document.querySelector(".clock");
const audio = document.getElementById("background-music");

let imagesArray = [];
let currentIndex = 0;
let isPaused = false;

for (let i = 1; i <= 26; i++) {
  let img = document.createElement("img");
  let imagePath = `bkh_50/imagenbkh (${i}).jpg`;
  
  img.src = imagePath;
  img.alt = `Imagen ${i}`;
  
  img.onerror = function() {
    imagesArray = imagesArray.filter(image => image !== imagePath);
    if (imagesArray.length > 0) {
      this.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    }
  };
  
  imagesArray.push(imagePath);
  if (i === 1) img.classList.add("active");
  
  slideshowContainer.appendChild(img);
}

const images = document.querySelectorAll(".slideshow img");

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = Math.floor(Math.random() * imagesArray.length);
  images[currentIndex].classList.add("active");
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
  setInterval(showNextImage, 3000);
  audio.volume = 0.5;
});
