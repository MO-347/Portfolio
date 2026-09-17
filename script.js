// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px -10px rgba(2,12,27,0.7)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});