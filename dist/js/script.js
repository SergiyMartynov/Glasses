// "use strict";

window.addEventListener('DOMContentLoaded', () => {

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

    










});