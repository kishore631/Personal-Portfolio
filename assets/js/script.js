const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
};

overlay.onclick = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    overlay.classList.remove('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    overlay.classList.remove('active');
};
