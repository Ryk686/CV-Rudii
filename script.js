
function cekLogin() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;

    // Validasi input kosong
    if (!user || !pass) {
        alert('Username dan password tidak boleh kosong');
        return;
    }

    // ⚠️ Idealnya: validasi dilakukan di server, bukan client-side
    if (user === 'admin' && pass === '1234') {
        sessionStorage.setItem('loggedIN', 'true'); // simpan status login
        window.location.href = 'index.html';
    } else {
        alert('Username atau Password salah bro');
    }
}

