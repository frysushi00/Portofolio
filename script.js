window.addEventListener('scroll', function () {
    var scrolled = window.scrollY;
    var star = document.querySelector('.star-animation');
    var starRect = star.getBoundingClientRect();
    var isVisible = (starRect.top < window.innerHeight && starRect.bottom >= 0);
    if (isVisible) {
        var rotation = scrolled / 15;
        star.style.transform = 'rotate(' + rotation + 'deg)';
    }
});
document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}
document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.header-section', { delay: 300, origin: 'top', distance: '50px' });
    ScrollReveal().reveal('.skills-section', { delay: 300, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.services-section', { delay: 300, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.works-section', { delay: 300, origin: 'bottom', distance: '50px' });
    ScrollReveal().reveal('.contact', { delay: 300, origin: 'left', distance: '50px' });
});

var swiper = new Swiper('.skills-swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});