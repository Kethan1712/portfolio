 // This file can be used for any interactive JavaScript functionality later.
// For now, it's empty as the requested features are primarily HTML/CSS.

// Example: Smooth scrolling (optional, but a common enhancement)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});