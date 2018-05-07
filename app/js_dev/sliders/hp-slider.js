(function ($) {

    // Variables

    let hpSlider = $('.hp-slider'),
        counterCurrent = $('.hp-slider__current'),
        counterTotal = $('.hp-slider__total'),
        hpPrev = $(".hp-slider__arrows-prev"),
        hpNext = $(".hp-slider__arrows-next");

    // Change slides funcion 

    // Hp-slider

    hpPrev.on('click', function (e) {
        e.stopPropagation();
        hpSlider.slick('slickPrev');
        hpSlider.slick('slickPause');
    });

    hpNext.on('click', function (e) {
        e.stopPropagation();
        hpSlider.slick('slickNext');
        hpSlider.slick('slickPause');
    });


    // Counter Function

    hpSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        let i = (currentSlide ? currentSlide : 0) + 1;
        counterCurrent.text("0" + i);
        counterTotal.text(" / " + "0" + slick.slideCount);
        if (slick.slideCount == null) {
            slick.slideCount = 5;
        };
    });


    // Slider Settings

    hpSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        dots: false,
        infinite: true
    });
})(jQuery);