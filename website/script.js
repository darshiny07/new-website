document.getElementById('menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.getElementById('menu-toggle');

    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
