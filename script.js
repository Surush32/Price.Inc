const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const servicesWrapper = document.querySelector('.services-wrapper');
const serviceItems = document.querySelectorAll('.service'); // Select all service items

let scrollAmount = 0;

rightArrow.onclick = function () {
    // Scroll by the width of one item
    servicesWrapper.scrollBy({ 
        left: serviceItems[0].clientWidth + 10, // Add 10px for margin, adjust as necessary
        behavior: 'smooth' 
    });
};

leftArrow.onclick = function () {
    // Scroll by the width of one item
    servicesWrapper.scrollBy({ 
        left: -(serviceItems[0].clientWidth + 10), // Subtract 10px for margin, adjust as necessary
        behavior: 'smooth' 
    });
};

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active'); // Toggle the nav-active class
        hamburger.querySelector('i').classList.toggle('fa-bars'); // Change icon to X
        hamburger.querySelector('i').classList.toggle('fa-times'); // Change icon back to hamburger
    });

    // Close the menu when a link is clicked
    navLinks.querySelectorAll('li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active'); // Hide nav links
            hamburger.querySelector('i').classList.remove('fa-times'); // Change back to hamburger
            hamburger.querySelector('i').classList.add('fa-bars'); // Change icon back to hamburger
        });
    });
});

