document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
        const toggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        });
    });
});