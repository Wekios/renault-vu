(function ($) {

  // Variables

  var  portraitSlider = $('.portrait-slider');
  var  counterCurrent = $('.portrait-slider__current');
  var  counterTotal = $('.portrait-slider__total');


  // Counter Function

  portraitSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var  i = (currentSlide ? currentSlide : 0) + 1;
    counterCurrent.text("0" + i);
    counterTotal.text(" / " + "0" + slick.slideCount);
    if (slick.slideCount == null) {
      slick.slideCount = 2;
    };
  });


  // Slider Settings

  portraitSlider.slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    dots: false,
    infinite: true,
    prevArrow: $(".portrait-slider__arrows-left"),
    nextArrow: $(".portrait-slider__arrows-right")
  });

})(jQuery);