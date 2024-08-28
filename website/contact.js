// Toggle Menu

document.getElementById('menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.getElementById('menu-toggle');

    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Google Map
function initMap() {
    const location = { lat: 11.9139, lng: 79.8145 }; // Coordinates for Puducherry
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
});

