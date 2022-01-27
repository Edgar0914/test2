$(document).ready(function () {
    $('.container_second').slick({
        arrows: true,
        adaptiveHeight: true,
        easing: 'ease',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});