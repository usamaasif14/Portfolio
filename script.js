// Mobile Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || phone === '' || subject === '' || message === '') {
        alert("Please fill in all fields.");
    } else {
        alert("Form submitted successfully!");
    }
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-container img');
const totalSlides = slides.length;

function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    const offset = -currentSlide * 100;  // Move the slider by 100% of the image width
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
