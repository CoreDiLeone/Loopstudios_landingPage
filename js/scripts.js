const menuMobile = document.getElementById('navbar');
const menuBtn = document.getElementById('btn-menu');
const imageIcon = document.getElementById('btn-icon');
const handlerMenu = ()=>{
    menuMobile.classList.toggle('show');
    if (imageIcon.src.includes('icon-hamburger.svg')) {
        // Cambiar el ícono a icon-close.svg
        imageIcon.src = 'images/icon-close.svg';
    } else {
        // Cambiar el ícono a icon-hamburger.svg
        imageIcon.src = 'images/icon-hamburger.svg';
    }
}

menuBtn.addEventListener('click', handlerMenu);
