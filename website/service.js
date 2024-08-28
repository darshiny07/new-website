document.addEventListener('DOMContentLoaded', () => {
    const serviceContainer = document.querySelector('.service-container');
    const slideLeftButton = document.querySelector('.slide-left');
    const slideRightButton = document.querySelector('.slide-right');

    const slideAmount = 300; // Adjust this value to match your service card width

    slideLeftButton.addEventListener('click', () => {
        serviceContainer.scrollBy({
            left: -slideAmount,
            behavior: 'smooth'
        });
    });

    slideRightButton.addEventListener('click', () => {
        serviceContainer.scrollBy({
            left: slideAmount,
            behavior: 'smooth'
        });
    });
});


// toggle button

document.getElementById('menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.getElementById('menu-toggle');

    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
