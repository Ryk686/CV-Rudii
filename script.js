// Proteksi index - taruh PALING ATAS
if (sessionStorage.getItem('loggedIN') !== 'true') {
    window.location.href = 'login.html';
}

// Fungsi login
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

