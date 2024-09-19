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

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the show class when the hamburger menu is clicked
hamburger.onclick = function () {
    navLinks.classList.toggle('show');
};

