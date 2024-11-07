const track = document.querySelector('.carousel-home'); 
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev-button'); 
const nextButton = document.querySelector('.next-button'); 
const carouselContainer = document.querySelector('.cont-carousel'); 

let currentSlideIndex = 0;
let slidesToShow = calculateSlidesToShow();

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

// Ajuste de carrusel al redimensionar
window.addEventListener('resize', () => {
    slidesToShow = calculateSlidesToShow();
    adjustCarousel();
});

function calculateSlidesToShow() {
    const containerWidth = carouselContainer.getBoundingClientRect().width;
    return Math.floor(containerWidth / 300);
}

function adjustCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    currentTranslate = -currentSlideIndex * slideWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
    updateButtons();
}

function updateButtons() {
    nextButton.disabled = currentSlideIndex >= slides.length - slidesToShow;
    prevButton.disabled = currentSlideIndex <= 0;
}

nextButton.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - slidesToShow) {
        currentSlideIndex++;
        adjustCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        adjustCarousel();
    }
});

// Eventos de arrastre solo para dispositivos móviles
carouselContainer.addEventListener('touchstart', startDrag);
carouselContainer.addEventListener('touchend', endDrag);
carouselContainer.addEventListener('touchmove', drag);

function startDrag(event) {
    isDragging = true;
    startPos = event.touches[0].clientX;
    animationID = requestAnimationFrame(animation);
}

function endDrag() {
    cancelAnimationFrame(animationID);
    isDragging = false;

    const movedBy = currentTranslate - prevTranslate;
    const slideWidth = slides[0].getBoundingClientRect().width;

    if (movedBy < -slideWidth / 2 && currentSlideIndex < slides.length - slidesToShow) {
        currentSlideIndex++;
    } else if (movedBy > slideWidth / 2 && currentSlideIndex > 0) {
        currentSlideIndex--;
    }

    adjustCarousel();
}

function drag(event) {
    if (isDragging) {
        const currentPosition = event.touches[0].clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
        setSliderPosition();
    }
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
    track.style.transform = `translateX(${currentTranslate}px)`;
}

// Ajuste inicial
adjustCarousel();
