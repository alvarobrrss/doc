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

// Subida de archivos a Firebase Storage
document.getElementById("upload-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const user = firebase.auth().currentUser;
  if (!user) {
    alert("Error: No se pudo autenticar.");
    return;
  }

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value || "No proporcionado";
  const telefono = document.getElementById("telefono").value || "No proporcionado";
  const file = document.getElementById("fileInput").files[0];

  if (!file) {
    alert("Por favor, selecciona un archivo.");
    return;
  }

  const storageRef = firebase.storage().ref(`uploads/${Date.now()}_${file.name}`);
  const uploadTask = storageRef.put(file);

  document.getElementById("upload-status").textContent = "Subiendo archivo...";

  uploadTask.on("state_changed",
    snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      document.getElementById("upload-status").textContent = `Subiendo: ${progress.toFixed(2)}%`;
    },
    error => {
      alert("Error al subir archivo: " + error.message);
    },
    async () => {
      const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
      document.getElementById("upload-status").textContent = "Archivo subido correctamente.";

      console.log("Archivo subido:", downloadURL);
      console.log("Subido por:", nombre, correo, telefono);
    }
  );
});
