const menuMobile = document.getElementById('navbar');
const menuBtn = document.getElementById('btn-menu');
const imageIcon = document.getElementById('btn-icon');
const navbar = document.getElementById('scrolled-nav');

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

/*Javascript for Scroll event */
const heroImageOne = document.getElementById('img-mobile-scrolled');
const heroImageTwo = document.getElementById('img-desktop-scrolled');

const handlerScroll = (image) =>{

    const scrollPosition = window.scrollY;
    let imageHeight = image.getBoundingClientRect().height; 
        if(scrollPosition > imageHeight){
            navbar.classList.add('scrolled');
        }else{
            navbar.classList.remove('scrolled');
        }
}

const onResizeOrScroll = () => {
    const screenWidth = window.innerWidth; 


    if (screenWidth <= 1200) {  
        handlerScroll(heroImageOne);
    } else {  
        handlerScroll(heroImageTwo);
    }
};

window.addEventListener('scroll', onResizeOrScroll);
window.addEventListener('resize', onResizeOrScroll);
document.addEventListener('DOMContentLoaded', onResizeOrScroll);




