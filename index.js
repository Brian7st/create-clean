document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const footerMenu = document.getElementById('footer-menu');
    
    toggleButton.addEventListener('click', function() {
        footerMenu.classList.toggle('active'); // Alternar visibilidad
    });
});