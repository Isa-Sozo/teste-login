document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    
    alert('Conta criada com sucesso! Faça login.');
    window.location.href = 'index.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        alert('Login bem-sucedido!');
        // Redirecionar para a página principal (pode ser uma nova página ou conteúdo)
        window.location.href = 'main.html'; // Crie essa página se necessário
    } else {
        alert('Email ou senha incorretos.');
    }
});