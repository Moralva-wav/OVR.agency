// ── NAV SCROLL ──────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── HERO ENTRANCE ───────────────────────────────────────────
window.addEventListener('load', () => {
  const eyebrow = document.querySelector('.hero-eyebrow');
  const logo    = document.querySelector('.hero-logo');
  const divider = document.querySelector('.hero-divider');
  const tagline = document.querySelector('.hero-tagline');

  if (eyebrow) setTimeout(() => eyebrow.classList.add('show'), 100);
  if (logo)    setTimeout(() => logo.classList.add('show'),    350);
  if (divider) setTimeout(() => divider.classList.add('show'), 900);
  if (tagline) setTimeout(() => tagline.classList.add('show'), 1050);
});

// ── CARD SCROLL REVEAL ──────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger each card slightly
      const card = entry.target;
      const delay = Array.from(document.querySelectorAll('.artist-card')).indexOf(card) * 80;
      setTimeout(() => card.classList.add('visible'), delay);
      observer.unobserve(card);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.artist-card').forEach(card => observer.observe(card));

// ── MODAL ───────────────────────────────────────────────────
function openModal(name) {
  const modal = document.getElementById('modal');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
  if (name) document.getElementById('modalTitle').innerText = name;
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

// close on background click
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── BOOKING FORM ─────────────────────────────────────────────
const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');

if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = bookingForm.querySelector('.submit-btn');
    const btnText = btn.querySelector('.btn-text');
    btnText.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const response = await fetch(bookingForm.action, {
        method: 'POST',
        body: new FormData(bookingForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        bookingForm.style.display = 'none';
        formSuccess.style.display = 'block';
      } else {
        btnText.textContent = 'Something went wrong — try again';
        btn.disabled = false;
      }
    } catch {
      btnText.textContent = 'Something went wrong — try again';
      btn.disabled = false;
    }
  });
}
