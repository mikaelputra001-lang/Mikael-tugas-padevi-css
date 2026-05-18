let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides(n) {
    // Reset semua gambar dan titik
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    // Tampilkan yang dipilih
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// // Otomatis jalan setiap 5 detik
// setInterval(() => {
//     slideIndex++;
//     if (slideIndex >= slides.length) slideIndex = 0;
//     showSlides(slideIndex);
// }, 5000);