// ===== BOOT SEQUENCE & HERO ANIMATION =====
window.addEventListener('DOMContentLoaded', () => {
  const heroMain = document.getElementById('heroMain');

  // Show hero after boot lines finish
  setTimeout(() => {
    heroMain.classList.add('visible');
    startTyping();
  }, 2400);
});

// ===== TYPING EFFECT =====
const phrases = [
  'Building fullstack web apps.',
  'Exploring AI & Machine Learning.',
  'Creating tools for students.',
  'Turning ideas into products.',
];

let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;

function startTyping() {
  const el = document.getElementById('typedText');
  if (!el) return;
  typeLoop(el);
}

function typeLoop(el) {
  const current = phrases[phraseIdx];

  if (isDeleting) {
    charIdx--;
  } else {
    charIdx++;
  }

  el.textContent = '> ' + current.substring(0, charIdx) + '|';

  let speed = isDeleting ? 40 : 70;

  if (!isDeleting && charIdx === current.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    speed = 400;
  }

  setTimeout(() => typeLoop(el), speed);
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when link clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.style.color = '';
    if (item.getAttribute('href') === '#' + current) {
      item.style.color = 'var(--green)';
    }
  });
});

// ===== SCROLL REVEAL ANIMATION =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .timeline-item, .cert-card, .skill-category').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// ===== ACHIEVEMENT TABS =====
function showTab(tabName) {
  // Hide all
  document.querySelectorAll('.ach-content').forEach(c => c.classList.add('hidden'));
  document.querySelectorAll('.ach-tab').forEach(t => t.classList.remove('active'));

  // Show selected
  document.getElementById(tabName).classList.remove('hidden');
  event.target.classList.add('active');
}

// ===== CONTACT FORM =====
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    btnText.textContent = '$ sending...';
    submitBtn.disabled = true;

    const data = {
      name: form.querySelector('[name="name"]').value,
      email: form.querySelector('[name="email"]').value,
      message: form.querySelector('[name="message"]').value
    };

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        btnText.textContent = '✓ message sent!';
        formSuccess.classList.remove('hidden');
        form.reset();
        setTimeout(() => {
          btnText.textContent = '$ send_message --execute';
          submitBtn.disabled = false;
          formSuccess.classList.add('hidden');
        }, 4000);
      } else {
        throw new Error('Failed');
      }
    } catch {
      btnText.textContent = '✗ error — try email directly';
      submitBtn.disabled = false;
      setTimeout(() => {
        btnText.textContent = '$ send_message --execute';
      }, 3000);
    }
  });
}

// ===== GLITCH EFFECT ON NAME HOVER =====
const heroName = document.querySelector('.hero-name');
if (heroName) {
  heroName.addEventListener('mouseenter', () => {
    heroName.style.textShadow = '2px 0 var(--green), -2px 0 rgba(255,0,0,0.3)';
    setTimeout(() => {
      heroName.style.textShadow = '0 0 40px rgba(0,255,136,0.2)';
    }, 200);
  });
}

// ===== CURSOR TRAIL (subtle) =====
const trail = [];
const TRAIL_LENGTH = 8;

for (let i = 0; i < TRAIL_LENGTH; i++) {
  const dot = document.createElement('div');
  dot.style.cssText = `
    position: fixed;
    width: ${4 - i * 0.4}px;
    height: ${4 - i * 0.4}px;
    background: rgba(0,255,136,${0.5 - i * 0.06});
    border-radius: 50%;
    pointer-events: none;
    z-index: 9997;
    transition: transform 0.1s;
    transform: translate(-50%, -50%);
  `;
  document.body.appendChild(dot);
  trail.push({ el: dot, x: 0, y: 0 });
}

let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateTrail() {
  let x = mouseX, y = mouseY;
  trail.forEach((dot, i) => {
    dot.el.style.left = x + 'px';
    dot.el.style.top = y + 'px';
    const prev = trail[i - 1];
    if (prev) {
      x = prev.x * 0.6 + dot.x * 0.4;
      y = prev.y * 0.6 + dot.y * 0.4;
    }
    dot.x = x;
    dot.y = y;
  });
  trail[0].x = mouseX;
  trail[0].y = mouseY;
  requestAnimationFrame(animateTrail);
}
animateTrail();