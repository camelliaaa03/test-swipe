const card = document.getElementById('card');

// Menambahkan event listener untuk swipe
card.addEventListener('click', () => {
    card.classList.toggle('flip'); // Menambahkan atau menghapus class flip saat diklik
});
