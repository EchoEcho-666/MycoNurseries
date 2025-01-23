let slideIndex = 0; // Start with the first slide
const slideIntervalTime = 4000; // Change slides every 5 seconds
let slideInterval; // Declare a variable for the interval

// Function to show slides
function showSlides() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    // Hide all slides and remove "active" class from dots
    slides.forEach(slide => (slide.style.display = "none"));
    dots.forEach(dot => dot.classList.remove("active"));

    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Wrap around to the first slide
    }

    // Show the current slide and mark the corresponding dot as active
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Function to start the automatic slideshow
function startSlideShow() {
    slideInterval = setInterval(() => {
        showSlides();
    }, slideIntervalTime);
}

// Function for manual control using dots
function currentSlide(n) {
    clearInterval(slideInterval); // Stop the current interval
    slideIndex = n - 1; // Set the slide index to the clicked dot
    showSlides(); // Show the corresponding slide
    startSlideShow(); // Restart the slideshow interval
}

// Function for clicking the slideshow to go to the next slide
function nextSlide() {
    clearInterval(slideInterval); // Stop the current interval
    showSlides(); // Show the next slide
    startSlideShow(); // Restart the slideshow interval
}

// Initialize the slideshow
document.addEventListener("DOMContentLoaded", () => {
    showSlides();
    startSlideShow();

    // Add click event to the slideshow container
    const slideshowContainer = document.querySelector(".slideshow-container");
    if (slideshowContainer) {
        slideshowContainer.addEventListener("click", nextSlide);
    }
});


//------------------------------------------------------
function copyToClipboard(event, email) {
    // Prevent the default action (e.g., page refresh)
    event.preventDefault();

    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);

    // Select and copy the email
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary input
    document.body.removeChild(tempInput);

    // Optional: Alert to confirm copy
    alert('Email address copied to clipboard!');
}