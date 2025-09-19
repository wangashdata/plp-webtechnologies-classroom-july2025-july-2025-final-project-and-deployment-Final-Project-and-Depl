document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Simple validation
            if (name.value.trim() === '') {
                alert('Please enter your name.');
                name.focus();
                return;
            }

            if (email.value.trim() === '') {
                alert('Please enter your email.');
                email.focus();
                return;
            }

            if (message.value.trim() === '') {
                alert('Please enter a message.');
                message.focus();
                return;
            }
            
            // Basic email format check
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                alert('Please enter a valid email address.');
                email.focus();
                return;
            }
            
            // If all checks pass, you could send the form data
            // For this project, a simple success alert is enough
            alert('Thank you for your message! We will get back to you shortly.');
            
            // Reset the form after submission
            contactForm.reset();
        });
    }
});