function animateValue(el, newValue) {
  if (el.textContent === newValue) return;
  el.style.transition = 'none';
  el.style.opacity = '0';
  el.style.transform = 'translateY(8px)';
  setTimeout(() => {
    el.textContent = newValue;
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }, 50);
}

function updateCountdown() {
  const target = new Date('2026-08-15T00:00:00');
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    animateValue(document.getElementById('days'),    '000');
    animateValue(document.getElementById('hours'),   '00');
    animateValue(document.getElementById('minutes'), '00');
    animateValue(document.getElementById('seconds'), '00');
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  animateValue(document.getElementById('days'),    String(days).padStart(3, '0'));
  animateValue(document.getElementById('hours'),   String(hours).padStart(2, '0'));
  animateValue(document.getElementById('minutes'), String(minutes).padStart(2, '0'));
  animateValue(document.getElementById('seconds'), String(seconds).padStart(2, '0'));
}

updateCountdown();
setInterval(updateCountdown, 1000);
