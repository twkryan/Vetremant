const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = '../pages/home.html'; 
});