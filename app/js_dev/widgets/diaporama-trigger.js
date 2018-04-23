(function ($) {
  // Diaporama trigger \\

  // Variables 

  var diaporamaTrigger = $('.diaporama-trigger'),
    slider = diaporamaTrigger.find('.diaporama-trigger__slider'),
    slides = slider.find('.diaporama-trigger__slide'),
    navigation = diaporamaTrigger.find('.diaporama-trigger__navigation'),
    arrowPrev = navigation.find('.diaporama-trigger__prev'),
    arrowNext = navigation.find('.diaporama-trigger__next'),
    openDiaporama = diaporamaTrigger.find('.diaporama-trigger__button'),
    windowWidth = $(window).outerWidth(),
    diaporama = $('body').find('.diaporama'),
    diaporamaSlider = diaporama.find('.diaporama--wrap'),
    diaporamaThumbs = diaporamaTrigger.find('.diaporama-trigger__thumbs');

  openDiaporama.on('click', function (e) {
    e.stopPropagation();
    diaporama.slideDown(200);
    diaporama.addClass('opened');
    diaporamaSlider.slick('setPosition');
    $('.diaporama .diaporama__thumbs').slick('setPosition');
    $('body, html').addClass('diaporamaOpened');
  });

  if (windowWidth < 767) {

    slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 400,
      autoplay: false,
      dots: false,
      pauseOnHover: true,
      adaptiveHeight: true
    });

  } else {

    slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      speed: 300,
      autoplay: false,
      dots: false,
      pauseOnHover: true,
      infinite: false,
      draggable: false,
      asNavFor: diaporamaThumbs,
      prevArrow: $(".diaporama-trigger__arrows-left"),
      nextArrow: $(".diaporama-trigger__arrows-right")
    });

    diaporamaThumbs.slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      speed: 300,
      autoplay: false,
      dots: false,
      pauseOnHover: true,
      infinite: false,
      draggable: false,
      centerMode: false,
      focusOnSelect: true,
      asNavFor: slider
    });




    // Working version!

    // $('.diaporama-trigger__slider').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   fade: true,
    //   speed: 400,
    //   autoplay: false,
    //   dots: false,
    //   pauseOnHover: true,
    //   arrows: false,
    //   draggable: false,
    //   asNavFor: '.diaporama-trigger__thumbs'
    // });

    // $('.diaporama-trigger__thumbs').slick({
    //   slidesToShow: 5,
    //   slidesToScroll: 1,
    //   speed: 400,
    //   autoplay: false,
    //   dots: false,
    //   pauseOnHover: true,
    //   arrows: false,
    //   draggable: false,
    //   centerMode: false,
    //   focusOnSelect: true,
    //   asNavFor: '.diaporama-trigger__slider'
    // });

  }

})(jQuery);