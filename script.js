function cekLogin() {
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;

            if (user === 'admin' && pass === '1234') {
                sessionStorage.setItem('loggedIN' , 'true') // simpan status logis
                window.location.href = 'login.html';
                window.location.href = 'index.html';
            } 
            else {
                    alert('Username atau Password salah');
            }
        }

