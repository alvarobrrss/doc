const clock = document.getElementById("date");
let fixedYear = false;

function generateRandomDate() {
  const day = Math.floor(Math.random() * 28 + 1).toString().padStart(2, "0");
  const month = Math.floor(Math.random() * 12 + 1).toString().padStart(2, "0");
  const year = fixedYear ? "<span class='underlined-year'>2026</span>" : Math.floor(Math.random() * (2026 - 1970 + 1) + 1970);
  return `${day}/${month}/${year}`;
}

function animateClock() {
  let speed = 50;
  let interval = setInterval(() => {
    clock.innerHTML = generateRandomDate();
  }, speed);

  setTimeout(() => {
    fixedYear = true;
  }, 10000);
}

window.addEventListener("DOMContentLoaded", () => {
  animateClock();
});
