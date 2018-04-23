// Const and Lets

const faqSlider = $('.faq-slider');
const counterCurrent = $('.faq-slider__current');
const counterTotal = $('.faq-slider__total');

// Counter Function

faqSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  let i = (currentSlide ? currentSlide : 0) + 1;
  counterCurrent.text("0" + i);
  counterTotal.text(" / " + "0" + slick.slideCount);
  if(slick.slideCount == null ) {
    slick.slideCount = 3;
  };
});


// Slider Settings

faqSlider.slick({
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
  prevArrow: $(".faq-slider__arrows-left"),
  nextArrow: $(".faq-slider__arrows-right")
});