// ===== HERO ANIMATION =====
window.addEventListener('DOMContentLoaded', () => {
  const heroMain = document.getElementById('heroMain');

  // Show hero immediately with a subtle fade-in
  requestAnimationFrame(() => {
    if (heroMain) heroMain.classList.add('visible');
    startTyping();
  });

  // Initialize 3D card tilt
  initTilt();

  // Initialize status card live local time
  initStatusTime();
});

// ===== STATUS CARD LIVE LOCAL TIME =====
function initStatusTime() {
  const timeEl = document.getElementById('statusLocalTime');
  if (!timeEl) return;

  function update() {
    try {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(now);
      timeEl.textContent = `${timeStr} IST`;
    } catch {
      timeEl.textContent = 'IST · UTC+5:30';
    }
  }

  update();
  setInterval(update, 30000);
}

// ===== TYPING EFFECT =====
const phrases = [
  'Build scalable fullstack web apps.',
  'Build AI agents.',
  'Turn ideas into products.',
  'Solving real world problems.',
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
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when link clicked
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== ACTIVE NAV HIGHLIGHT & URL HASH =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
let currentSectionId = '';

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach((item) => {
    item.style.color = '';
    if (item.getAttribute('href') === '#' + current) {
      item.style.color = 'var(--green)';
    }
  });

  // Update URL hash without scrolling jump
  if (current && current !== currentSectionId) {
    currentSectionId = current;
    history.replaceState(null, null, '#' + current);
  } else if (!current && currentSectionId && window.scrollY < 100) {
    currentSectionId = '';
    history.replaceState(null, null, window.location.pathname);
  }
});

// ===== SCROLL REVEAL ANIMATION =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll('.project-card, .timeline-item, .cert-card, .skill-category, .code-window')
  .forEach((el) => {
    revealObserver.observe(el);
  });

// ===== 3D CARD TILT ENGINE =====
function initTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const tiltElements = document.querySelectorAll('[data-tilt]');

  tiltElements.forEach((card) => {
    // Specular glare element
    let glare = card.querySelector('.card-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'card-glare';
      card.appendChild(glare);
    }

    let isHovered = false;

    card.addEventListener('mouseenter', () => {
      isHovered = true;
      card.style.transition = 'transform 0.1s ease-out, border-color 0.3s ease, box-shadow 0.3s ease';
    });

    card.addEventListener('mousemove', (e) => {
      if (!isHovered) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Max tilt angle (very subtle)
      const maxTilt = 4;
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      card.style.setProperty('--glare-x', `${percentX.toFixed(1)}%`);
      card.style.setProperty('--glare-y', `${percentY.toFixed(1)}%`);
    });

    card.addEventListener('mouseleave', () => {
      isHovered = false;
      card.style.transition = 'transform 0.4s ease-out, border-color 0.3s ease, box-shadow 0.3s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// ===== ACHIEVEMENT TABS =====
function showTab(tabName) {
  document.querySelectorAll('.ach-content').forEach((c) => c.classList.add('hidden'));
  document.querySelectorAll('.ach-tab').forEach((t) => t.classList.remove('active'));

  const target = document.getElementById(tabName);
  if (target) target.classList.remove('hidden');
  if (window.event && window.event.target) {
    window.event.target.classList.add('active');
  }
}
window.showTab = showTab;

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

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
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
