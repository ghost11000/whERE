let x = document.getElementById('nav-mobile');
let menu = document.getElementById('menu');
let burguer = document.getElementById('burguer-menu');

x.addEventListener('click', () => {
    menu.style.display = 'none';
});

burguer.addEventListener('click', () => {
    menu.style.display = 'block';
})