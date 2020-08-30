$(document).ready(function() {
    $(".home-slider").owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        dots: false,
        autoplayHoverPause: false,
        autoplay: true,
        smartSpeed: 1000
    });

    $('.owl-courses').owlCarousel({
        animateOut: 'fadeOut',
        loop: true,
        autoplayHoverPause: false,
        autoplay: false,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 3,
            }
        }
    })
});