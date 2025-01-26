document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Contoh validasi sederhana
    if (username === 'admin' && password === 'asce') {
        message.style.color = 'green';
        message.textContent = 'Login berhasil!';
        
        // Alihkan ke halaman dashboard setelah 1 detik
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } else {
        message.style.color = 'red';
        message.textContent = 'Username atau password salah!';
    }
});