
$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 600,
        arrows: true,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });
});