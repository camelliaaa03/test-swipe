let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Touch events for swipe functionality
let startX, endX;

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Get the starting X coordinate
});

slider.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX; // Get the current X coordinate
});

slider.addEventListener('touchend', () => {
    if (startX - endX > 50) {
        moveSlide(1); // Swipe left
    } else if (endX - startX > 50) {
        moveSlide(-1); // Swipe right
    }
});

// Tampilkan slide pertama
showSlide(currentSlide);
