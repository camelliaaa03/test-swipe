let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slidesContainer.style.transform = `translateX(${-currentSlide * 100}%)`;
}

// Touch events for swipe functionality
let startX, endX, isDragging = false;

const slider = document.getElementById('slider');

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Get the starting X coordinate
    isDragging = true;
});

slider.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX; // Get the current X coordinate
});

slider.addEventListener('touchend', () => {
    if (isDragging) {
        if (startX - endX > 50) {
            showSlide(currentSlide + 1); // Swipe left
        } else if (endX - startX > 50) {
            showSlide(currentSlide - 1); // Swipe right
        }
        isDragging = false;
    }
});

// Mouse events for swipe functionality
let mouseStartX;

slider.addEventListener('mousedown', (e) => {
    mouseStartX = e.clientX; // Get the starting mouse X coordinate
    isDragging = true;
    slider.style.cursor = 'grabbing'; // Change cursor to grabbing
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // If not dragging, do nothing
    endX = e.clientX; // Get the current mouse X coordinate
});

slider.addEventListener('mouseup', () => {
    if (isDragging) {
        if (mouseStartX - endX > 50) {
            showSlide(currentSlide + 1); // Swipe left
        } else if (endX - mouseStartX > 50) {
            showSlide(currentSlide - 1); // Swipe right
        }
        isDragging = false;
        slider.style.cursor = 'grab'; // Change cursor back to grab
    }
});

slider.addEventListener('mouseleave', () => {
    isDragging = false; // Reset dragging state when mouse leaves
});

// Tampilkan slide pertama
showSlide(currentSlide);
