// ── ARTIST DATA ──────────────────────────────────────────────
const artists = {
  'Solo Fernández': {
    img: 'assets/img/SF1.jpg',
    origin: 'Dominican Republic · Alternative Pop / Rock',
    description: 'One of the leading emerging alternative pop/rock acts from the Dominican Republic, recognized for emotional songwriting, cinematic production, and powerful live performances across Latin America.',
    sections: [
      { title: 'Discography', content: 'Multicolor (2019) · Las Cosas Que Nunca Me Dije (2022)' },
      { title: 'Collaborations', content: 'CLUBZ · Midnight Generation · Alex Ferreira · Rubytates · Noah Pino Palo' },
      { title: 'Upcoming', content: 'Third studio album — expected late 2026 / early 2027' }
    ],
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/artist/0bvP91QlkYvAFP71Cw6PkM' },
      { label: 'Instagram', url: 'https://www.instagram.com/solo.fernandez/' },
      { label: 'YouTube', url: 'https://youtube.com/@solofernandez' }
    ]
  },
  'VENADO MERAKI': {
    img: 'assets/img/VENADO_MERAKI.jpg',
    origin: 'Mexico · Indie Rock / Folk',
    description: "A Guadalajara-based band blending indie-rock with folk textures into a nostalgic, authentic sound. Their debut EP was produced by Siddhartha, and they've since opened for his arena tours twice.",
    sections: [
      { title: 'Discography', content: 'EP "Aquí Estoy" (2018) · Album "Romperse y Bailar" (2022) · "Ambrosía" (2026)' },
      { title: 'Shared Stages', content: 'Siddhartha (x2 tours) · El Zar · Chetes · Benjamín Walker' },
      { title: 'Festivals', content: 'Festival Santa Lucía · Remind GNP · Isla Fest · Rock x la Vida' }
    ],
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/artist/5bLXtvIMDtusv4j9PtXjgB?si=Bhi4KrDKSyWYmcksJtLDiQ' },
      { label: 'Instagram', url: 'https://www.instagram.com/venadomeraki/' },
      { label: 'YouTube', url: 'https://www.youtube.com/@VenadoMeraki' }
    ]
  },
  'AVEPARADISO': {
    img: 'assets/img/AVEPARADISO_2.jpg',
    origin: 'Mexico · Alternative / Electronic',
    description: 'The project of Nacho Luquin from Guadalajara, 8 years in the making. Debut single "Broken Hearts" hit Spotify México\'s Top 10 Viral; "Coco Heart" appeared on the Netflix México soundtrack for "¿Qué culpa tiene el Karma?" With 180+ shows across Mexico and abroad, shared stages with Rufus du Sol, Milky Chance, and Bob Moses.',
    sections: [
      { title: 'Discography', content: 'Sempre Avanti (2022) · El Diablo Enamorado (2025)' },
      { title: 'Festivals', content: 'Vaivén · Trópico · Corona Weekend · SXSW (USA)' },
      { title: 'Top Markets', content: 'México · United States · Argentina · Spain · Chile' }
    ],
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/artist/4zbxpLFyPdF7tSA1TPpJuL?si=CdLtreneTP6dd5m8U3nOzA' },
      { label: 'Instagram', url: 'https://www.instagram.com/aveparadiso/' },
      { label: 'YouTube', url: 'https://youtube.com/@aveparadiso' }
    ]
  },
  'MARTE': {
    img: 'assets/img/Marte-Digital-HR_005.jpg',
    origin: 'México · Synth Pop / Indie Funk',
    description: "Guadalajara's MARTE is a five-piece act fusing Pop Rock, Indie Funk, and Synth Pop with a vintage aesthetic and serious live energy. Sold-out shows, festival appearances across Mexico and abroad, and a catalog that hits harder every release.",
    sections: [
      { title: 'Discography', content: 'Polos Vol. I (2020) · Polos Vol. II (2023)' },
      { title: 'Top Tracks', content: 'Fugaz (848K streams) · Eternos · Mar · Limbo' },
      { title: 'Live', content: 'Heineken Silver Live Out · C3 Rooftop · Stage · Isla de Caras (Argentina)' }
    ],
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/artist/3O2mT8DFtMzB6ptxFXdpHm?si=o-7ZB5BXSzeLg9FnFEqxFg' },
      { label: 'Instagram', url: 'https://www.instagram.com/martebnd' },
      { label: 'YouTube', url: 'https://www.youtube.com/@martebnd' }
    ]
  },
  'KAFI': {
    img: 'assets/img/KAFI_card.jpg',
    origin: 'Mexico · Alt Rock / Indie Pop',
    description: 'A Monterrey-born, Mexico City-based singer-songwriter and actress blending indie pop, neo-soul, and alt-rock into an emotional, old-school sound. Rolling Stone named her one of the 25 most outstanding Mexican artists of the moment.',
    sections: [
      { title: 'Discography', content: 'EP "Ni Un Paso Atrás" (2021) · Album "Aquí y Ahora" (2025) · EP "Amores" (2026)' },
      { title: 'Shared Stages', content: 'JUMBO · Belanova · MIRANDA! · Hello Seahorse! · MARO + Nasaya' },
      { title: 'Festivals', content: 'Fiestas del Pitic · Mérida Beer Fest · Tiempo de Mujeres CDMX · FIMPro Guadalajara' }
    ],
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/artist/4Sel9suIpjL2glt946Fx4I?si=yMKXo7HfSnCzwPw7SFy9cQ' },
      { label: 'Instagram', url: 'https://www.instagram.com/kafimusica/' },
      { label: 'YouTube', url: 'https://www.youtube.com/@Kafimusica/videos' }
    ]
  },
  'KOKÔ CECÊ': {
    img: 'assets/img/KOKO_CECE-02-UNIVERSA.jpg',
    origin: 'México · Alternative Pop / Electronic',
    description: 'Singer, songwriter, producer, and beatmaker from Ciudad Juárez. Her Pop Realista fuses pop, electronic, and Latin rhythms, exploring introspection, vulnerability, and resilience from an honest, unfiltered perspective. Building her own universe since 2016.',
    sections: [
      { title: 'Discography', content: 'Para Dos (Album) · Marginado · Bestias de Ciudad · Konecta' },
      { title: 'Collaborations', content: 'Tino El Pingüino · Mediopicky · Kile J · CLO (Virgin Records remix)' },
      { title: 'Brand Partnerships', content: 'Kenzo · adidas · American Eagle · Tous · Fender · Nixon · Jägermeister' }
    ],
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/artist/4MAPWlyF0tOgw8djPFLU9V?si=7jVtCfAjTqu9BBL8aXUcPg' },
      { label: 'Instagram', url: 'https://www.instagram.com/soykokocece/' },
      { label: 'YouTube', url: 'https://www.youtube.com/@KOKOCECE' }
    ]
  }
};

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
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
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
  const artist = artists[name];
  if (!artist) return;

  document.getElementById('modalImg').src = artist.img;
  document.getElementById('modalImg').alt = name;
  document.getElementById('modalTitle').innerText = name;
  document.getElementById('modalOrigin').innerText = artist.origin;
  document.getElementById('modalDescription').innerText = artist.description;

  document.getElementById('modalSections').innerHTML = artist.sections.map(s => `
    <div class="modal-section">
      <h4>${s.title}</h4>
      <p>${s.content}</p>
    </div>
  `).join('');

  document.getElementById('modalLinks').innerHTML = artist.links.map(l => `
    <a href="${l.url}" target="_blank">${l.label}</a>
  `).join('');

  const modal = document.getElementById('modal');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('show');
  document.body.style.overflow = '';
}

document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

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
