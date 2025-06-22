const botaoAbrir = document.querySelector(".header-desktop > button")
const botaoFechar = document.querySelector(".header-desktop nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-desktop nav")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abrirMenu(){
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu(){
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}

const linksDoMenu = document.querySelectorAll('.header-desktop nav a[href^="#"]');

linksDoMenu.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const idDaSecao = this.getAttribute('href');

        const secaoDeDestino = document.querySelector(idDaSecao);

        secaoDeDestino.scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
        });

        fecharMenu();
    });
});