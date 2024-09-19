// 1. Fade-in Animation for Menu Items on Page Load
function fadeInMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    let delay = 0;
    
    menuItems.forEach(item => {
        item.style.opacity = '0';  // Initially hide the items
        setTimeout(() => {
            item.style.transition = 'opacity 1s ease';
            item.style.opacity = '1';  // Fade in
        }, delay);
        delay += 300;  // Delay each item by 300ms
    });
}

// 2. Hover Animation for Menu Item Images
function addHoverEffect() {
    const menuImages = document.querySelectorAll('.menu-item img');
    
    menuImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';  // Scale up on hover
            img.style.transition = 'transform 0.5s ease';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';  // Reset to original size
        });
    });
}

// 3. Slide-in Animation for the Menu Section on Scroll
function slideInOnScroll() {
    const menuSection = document.querySelector('.menu');
    const windowHeight = window.innerHeight;
    const sectionTop = menuSection.getBoundingClientRect().top;

    if (sectionTop < windowHeight) {
        menuSection.style.transform = 'translateY(0)';
        menuSection.style.opacity = '1';
        menuSection.style.transition = 'transform 1s ease, opacity 1s ease';
    }
}

// Initial setup: Hide the menu section for the slide-in effect
window.onload = function() {
    const menuSection = document.querySelector('.menu');
    menuSection.style.opacity = '0';
    menuSection.style.transform = 'translateY(100px)';  // Start below the viewport

    fadeInMenuItems();  // Start the fade-in animation for menu items
    addHoverEffect();  // Add hover effect to menu images
};

// Trigger slide-in effect when scrolling
window.onscroll = function() {
    slideInOnScroll();
};
