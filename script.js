document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('side-menu');
    
    // Toggle menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('open');
        sideMenu.classList.toggle('open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
            hamburger.classList.remove('open');
            sideMenu.classList.remove('open');
        }
    });
    
    // Smooth scroll for menu links
    document.querySelectorAll('#side-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close menu after clicking
                hamburger.classList.remove('open');
                sideMenu.classList.remove('open');
            }
        });
    });
});
