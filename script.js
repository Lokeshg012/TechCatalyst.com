document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Testimonial slider functionality
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    document.getElementById('next').addEventListener('click', () => {
        testimonials[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.display = 'block';
    });

    document.getElementById('prev').addEventListener('click', () => {
        testimonials[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        testimonials[currentIndex].style.display = 'block';
    });
});
