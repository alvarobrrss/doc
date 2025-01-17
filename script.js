function generateRandomDate() {
  const day = Math.floor(Math.random() * 28 + 1).toString().padStart(2, "0");
  const month = Math.floor(Math.random() * 12 + 1).toString().padStart(2, "0");
  const year = Math.floor(Math.random() * (2030 - 1970 + 1) + 1970);
  return `${day}/${month}/${year}`;
}

function initBrokenClock() {
  const clock = document.querySelector('.clock');
  let isPaused = false;
  let fixedDate = "";

  const intervalId = setInterval(() => {
    if (!isPaused) {
      clock.textContent = generateRandomDate();
    }
  }, 50);

  setInterval(() => {
    isPaused = true;
    fixedDate = generateRandomDate();
    clock.textContent = fixedDate;

    setTimeout(() => {
      isPaused = false;
    }, 1000);
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  initBrokenClock();
});
