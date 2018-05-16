$(document).ready(function () {

// var  and Lets

var  qaSlider = $('.qa-slider');
var  counterCurrent = $('.qa-slider__current');
var  counterTotal = $('.qa-slider__total');

// Counter Function

qaSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var  i = (currentSlide ? currentSlide : 0) + 1;
  counterCurrent.text("0" + i);
  counterTotal.text(" / " + "0" + slick.slideCount);
  if(slick.slideCount == null ) {
    slick.slideCount = 3;
  };
});


// Slider Settings

qaSlider.slick({
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  speed: 400,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  infinite: true,
  dots: false,
  prevArrow: $(".qa-slider__arrows-left"),
  nextArrow: $(".qa-slider__arrows-right")
    });
});
