import sunset1 from './utils/images/sunset1.jpg';
import sunset2 from './utils/images/sunset2.jpg';
import sunset3 from './utils/images/sunset3.jpg';
import sunset4 from './utils/images/sunset4.jpg';
import sunset5 from './utils/images/sunset5.jpg';

import style from './styles.css';

const createSkeleton = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const main = document.createElement('main');
    main.id = 'main';
    header.id = 'header';
    content.appendChild(header);
    content.appendChild(main);
};

const createCarrousel = () => {
    const main = document.getElementById('main');
    const carousel = document.createElement('div');
    carousel.id = 'carousel';
    main.appendChild(carousel);

    

    const images = [sunset1, sunset2, sunset3, sunset4, sunset5];

    images.forEach((image, index) => {
        const slideNumber = document.createElement('div');
        slideNumber.className = 'slide-number';
        slideNumber.textContent = `${index + 1} / 5`;

        const slide = document.createElement('div');
        slide.classList.add('slide', 'fade');
        const img = document.createElement('img');
        img.src = image;
        slide.appendChild(slideNumber);
        slide.appendChild(img);
        carousel.appendChild(slide);
    });

    const prev = document.createElement('a');
    prev.className = 'prev';
    prev.textContent = '❮';
    prev.onclick = () => plusSlides(-1);
    carousel.appendChild(prev);
    const next = document.createElement('a');
    next.className = 'next';
    next.textContent = '❯';
    next.onclick = () => plusSlides(1);
    carousel.appendChild(next);

    const dots = document.createElement('div');
    dots.className = 'dots';
    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => currentSlide(index + 1);
        dots.appendChild(dot);
    });
    main.appendChild(dots);
};

const showSlides = (n) => {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
};

const plusSlides = (n) => {
    showSlides((slideIndex += n));
}

const currentSlide = (n) => {
    showSlides((slideIndex = n));
}

createSkeleton();
createCarrousel();

let slideIndex = 1;
showSlides(slideIndex);