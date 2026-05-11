/* ============================================================
   SCRIPT.JS — CV Rudi Yuridul Khoir
   Sections:
   1. Proteksi Halaman
   2. Fungsi Login
   3. Fungsi Sidebar
   ============================================================ */

/* ===== 1. PROTEKSI HALAMAN ===== */
if (sessionStorage.getItem('loggedIN') !== 'true' && !window.location.href.includes('login.html')) {
  window.location.href = 'login.html';
}

/* ===== 2. FUNGSI LOGIN ===== */
function cekLogin() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value;

  if (user === 'ryk06' && pass === '1234') {
    sessionStorage.setItem('loggedIN', 'true');
    window.location.href = 'index.html';
  } else {
    alert('Username atau Password salah bro');
  }
}

/* ===== 3. FUNGSI SIDEBAR ===== */
function toggleSidebar() {
  const navbar   = document.querySelector('.navbar');
  const overlay  = document.getElementById('overlay');
  const wrapper  = document.querySelector('.main-wrapper');
  const hamburger = document.querySelector('.hamburger');
  const body     = document.querySelector('.index-body');

  navbar.classList.toggle('open');
  const isOpen = navbar.classList.contains('open');

  if (window.innerWidth > 768) {
    /* ── DESKTOP ── */
    overlay.style.display = 'none'; // overlay tidak dipakai di desktop

    if (isOpen) {
      // Sidebar terbuka → ikon berubah jadi <
      hamburger.innerHTML = '<b>&#60;</b>';
      navbar.style.left   = '0';
      body.style.paddingLeft = '200px';
    } else {
      // Sidebar tertutup → ikon kembali ke ☰
      hamburger.innerHTML = '<b>&#9776;</b>';
      navbar.style.left   = '-200px';
      body.style.paddingLeft = '0';
    }

  } else {
    /* ── MOBILE ── */
    overlay.style.display = ''; // kembalikan ke CSS
    overlay.classList.toggle('open');
    wrapper.classList.toggle('sidebar-open');

    // Di mobile hamburger sembunyi, tombol < di dalam sidebar yang aktif
    hamburger.style.display = isOpen ? 'none' : 'block';
    hamburger.innerHTML = '<b>&#9776;</b>'; // tetap ☰ di mobile
  }
}

/* Reset saat resize */
window.addEventListener('resize', () => {
  const navbar    = document.querySelector('.navbar');
  const overlay   = document.getElementById('overlay');
  const wrapper   = document.querySelector('.main-wrapper');
  const hamburger = document.querySelector('.hamburger');
  const body      = document.querySelector('.index-body');

  navbar.classList.remove('open');
  overlay.classList.remove('open');
  wrapper.classList.remove('sidebar-open');
  hamburger.innerHTML = '<b>&#9776;</b>';

  if (window.innerWidth > 768) {
    overlay.style.display  = 'none';
    hamburger.style.display = 'block';
    navbar.style.left      = '-200px';
    body.style.paddingLeft = '0';
  } else {
    overlay.style.display  = '';
    hamburger.style.display = 'block';
  }
});