const hamButton = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
const body = document.body;

hamButton.addEventListener('click', () => {
    navbar.classList.toggle('open');
    hamButton.classList.toggle('open');
    body.classList.toggle('no-scroll');
});