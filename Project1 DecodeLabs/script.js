// ============================================
// MOBILE NAV TOGGLE
// ============================================
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav = document.getElementById('main-nav');

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  hamburgerBtn.classList.toggle('open', isOpen);
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  });
});


// ============================================
// FAQ ACCORDION
// ============================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    faqItems.forEach(i => i.classList.remove('open'));
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});


// ============================================
// ANIMATED STAT COUNTER
// ============================================
const statValue = document.querySelector('.mockup-stat-value');

function animateCounter(el, target, duration = 1500) {
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = value.toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

if (statValue) {
  const target = parseInt(statValue.dataset.target, 10);
  animateCounter(statValue, target);
}


// ============================================
// ROTATING HEADLINE
// ============================================
const headlineEl = document.getElementById('rotating-headline');

const headlines = [
  "Turn raw data into real answers.",
  "Stop guessing. Start knowing.",
  "The clarity your data deserves.",
  "Insight, without the overhead."
];

let headlineIndex = 0;

function rotateHeadline() {
  headlineEl.style.opacity = '0';
  setTimeout(() => {
    headlineIndex = (headlineIndex + 1) % headlines.length;
    headlineEl.textContent = headlines[headlineIndex];
    headlineEl.style.opacity = '1';
  }, 400);
}

if (headlineEl) {
  setInterval(rotateHeadline, 4000);
}