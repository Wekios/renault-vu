(function ($) {

    // Variables

    var lesPlusPrev = $(".les-plus-slider__arrows-prev"),
        lesPlusNext = $(".les-plus-slider__arrows-next"),
        lesPlusNext = $(".les-plus-slider__arrows-next"),
        lesPlusSlider = $('.les-plus-slider');


    // Les Plus

    lesPlusPrev.on('click', function (e) {
        e.stopPropagation();
        lesPlusSlider.slick('slickPrev');
        lesPlusSlider.slick('slickPause');
    });

    lesPlusNext.on('click', function (e) {
        e.stopPropagation();
        lesPlusSlider.slick('slickNext');
        lesPlusSlider.slick('slickPause');
    });

    // Slider Settings

    lesPlusSlider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 400,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 641,
                settings: "unslick"
            }
        ]
    });
})(jQuery);
