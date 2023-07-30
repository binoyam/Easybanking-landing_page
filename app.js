const menu = document.querySelector('.menu');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

function openMenu() {
    menu.classList.add('nav');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
}
function closeMenu() {
    menu.classList.remove('nav');
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
}
