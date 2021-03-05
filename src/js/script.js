// "use strict";

window.addEventListener('DOMContentLoaded', () => {

//////Hide navigation section when header__lang:hover &  .header__currency:hover 

    const navigation = document.querySelector('.navigation__empty'),
        headerLang = document.querySelector('.header__lang'),
        headerCurrency = document.querySelector('.header__currency'),
        navigationLogo = document.querySelector('.navigation__logo');



    function hideNavigationLogo() { 
        navigationLogo.style.opacity = 0;
    }

    function showNavigationLogo() {
        navigationLogo.style.opacity = 1;
    }

    // function hideNavigation () {
    //     navigation.style.display = 'block';
    //     setInterval(function setTitle() {
    //         navigation.style.opacity = 1;
    //     }, 100);
    // }

    // function showNavigation() {
    //     navigation.style.opacity = 0;
    //     setInterval(function setTitle() {
    //         navigation.style.display = 'none';      
    //     }, 750);
    // }



    headerLang.addEventListener("mouseover", () => {
        // hideNavigation();
        hideNavigationLogo();
    });
    headerCurrency.addEventListener("mouseover", () => {
        // hideNavigation();
        hideNavigationLogo();
    });


    headerLang.addEventListener("mouseleave", () => {
        // showNavigation();
        showNavigationLogo();
    });
    headerCurrency.addEventListener("mouseleave", () => {
        // showNavigation();
        showNavigationLogo();
    });




////Slider 

    const slides = document.querySelectorAll('.carousel__item'),
        prev = document.querySelector('.carousel__buttonsPrev'),
        next = document.querySelector('.carousel__buttonsNext');


    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'flex';
    }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        prev.addEventListener ('click', () => {
            plusSlides(-1);
        });

        next.addEventListener('click', () => {
            plusSlides(1);
        });

  

////////Slider width push effect

    // const slides = document.querySelectorAll('.carousel__item'),
    //     prev = document.querySelector('.carousel__buttonsPrev'),
    //     next = document.querySelector('.carousel__buttonsNext'),
    //     slidesWrapper = document.querySelector('.carousel__sliderWrapper'),
    //     slidesField = document.querySelector('.carousel__track'),
    //     width = window.getComputedStyle(slidesWrapper).width;

    // let slideIndex = 1;
    // let offset = 0;

    // slidesField.style.width = 100 * slides.length + '%'; 
    // slidesWrapper.style.overflow = 'hidden';


    // slides.forEach( slide => {
    //     slide.style.width = width;
    // });

    // next.addEventListener('click', () => {
    //     if (offset == +width.slice(0,width.length - 2) * (slides.length -1)) {
    //         offset = 0;
    //     } else {
    //         offset += +width.slice(0, width.length - 2); 
    //     }

    //     slidesField.style.transform = `translateX(-${offset}px)`;

    //     if (slideIndex == 1) {
    //         slideIndex = slides.length;
    //     } else {
    //         slideIndex--;
    //     }
   
    // });

    // prev.addEventListener('click', () => {
    //     if (offset == 0) {
    //         offset = +width.slice(0, width.length - 2) * (slides.length - 1);  
    //     } else {
    //         offset -= +width.slice(0, width.length - 2);
    //     }

    //     slidesField.style.transform = `translateX(-${offset}px)`;

    //     if (slideIndex == slides.length) {
    //         slideIndex = 1;
    //     } else {
    //         slideIndex++;
    //     }

    // });


        
























});