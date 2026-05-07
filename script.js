/* ============================================================
   SCRIPT.JS — CV Rudi Yuridul Khoir
   Sections:
   1. Proteksi Halaman
   2. Fungsi Login
   3. Fungsi Sidebar (Mobile Only)
   ============================================================ */

/* ===== 1. PROTEKSI HALAMAN ===== */
if (sessionStorage.getItem('loggedIN') !== 'true' && !window.location.href.includes('login.html')) {
  window.location.href = 'login.html';
}

/* ===== 2. FUNGSI LOGIN ===== */
function cekLogin() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value;

  if (user === 'admin' && pass === '1234') {
    sessionStorage.setItem('loggedIN', 'true');
    window.location.href = 'index.html';
  } else {
    alert('Username atau Password salah bro');
  }
}

/* ===== 3. FUNGSI SIDEBAR (MOBILE ONLY) ===== */
function toggleSidebar() {
  const navbar = document.querySelector('.navbar');
  const overlay = document.getElementById('overlay');
  const mainWrapper = document.querySelector('.main-wrapper');
  const hamburger = document.querySelector('.hamburger');
  const body = document.querySelector('.index-body');

  navbar.classList.toggle('open');

  if (window.innerWidth > 768) {
    // Desktop: tidak pakai overlay sama sekali
    overlay.style.display = 'none'; // ← paksa overlay selalu sembunyi di desktop
    
    if (navbar.classList.contains('open')) {
      // Sidebar ditutup
      navbar.style.left = '-200px';
      body.style.paddingLeft = '0';
    } else {
      // Sidebar dibuka
      navbar.style.left = '0';
      body.style.paddingLeft = '200px';
    }
  } else {
    // Mobile: pakai overlay
    overlay.style.display = ''; // ← reset ke CSS default
    overlay.classList.toggle('open');
    mainWrapper.classList.toggle('sidebar-open');
    hamburger.style.display = navbar.classList.contains('open') ? 'none' : 'block';
  }
}

window.addEventListener('resize', () => {
  const overlay = document.getElementById('overlay');
  if (window.innerWidth > 768) {
    overlay.style.display = 'none'; // ← sembunyikan overlay saat resize ke desktop
    document.querySelector('.hamburger').style.display = 'block';
    document.getElementById('overlay').classList.remove('open');
    document.querySelector('.main-wrapper').classList.remove('sidebar-open');
  } else {
    overlay.style.display = ''; // ← kembalikan ke CSS saat mobile
  }
});