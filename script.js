const slideshowContainer = document.querySelector(".slideshow");
const clock = document.querySelector(".clock");
const audio = document.getElementById("background-music");

// Autenticación anónima
firebase.auth().signInAnonymously()
  .then(() => console.log("Usuario anónimo autenticado"))
  .catch(error => console.error("Error en autenticación:", error));

document.getElementById("upload-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const file = document.getElementById("fileInput").files[0];
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const termsAccepted = document.getElementById("terms").checked;
  const uploadStatus = document.getElementById("upload-status");

  if (!file || !name || !termsAccepted) {
    uploadStatus.textContent = "Debes completar los campos obligatorios.";
    return;
  }

  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(`uploads/${file.name}`);

  try {
    await fileRef.put(file);
    uploadStatus.textContent = "Archivo subido correctamente.";

    console.log("Datos del usuario:", { name, email, phone, file: file.name });

  } catch (error) {
    console.error("Error al subir:", error);
    uploadStatus.textContent = "Error al subir el archivo.";
  }
});

// Reloj aleatorio
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
    setTimeout(() => {}, 1000);
  }, 3000);
}

window.addEventListener("DOMContentLoaded", () => {
  animateClock();
  audio.volume = 0.5;
});
