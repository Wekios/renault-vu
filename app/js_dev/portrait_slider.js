$(document).ready(function () {

// Const and Lets 

const portraitSlider = $('.portrait-slider');
const counterCurrent = $('.portrait-slider__current');
const counterTotal = $('.portrait-slider__total');


// Counter Function

portraitSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  let i = (currentSlide ? currentSlide : 0) + 1;
  counterCurrent.text(i);
  counterTotal.text(" / " + slick.slideCount);
  if(slick.slideCount == null ) {
    slick.slideCount = 5;
  };
});


// Slider Settings

$('.portrait-slider').slick({
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
});
