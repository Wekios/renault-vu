(function($){
  // Diaporama \\

  // Variables

  var diaporama = $('.diaporama'),
      diaporamaWrap = diaporama.find('.diaporama--wrap'),
      diaporamaClose = diaporama.find('.diaporama__close'),
      diaporamaSlides = diaporamaWrap.find('.diaporama__slide'),
      diaporamaImages = diaporamaWrap.find('.diaporama__image'),
      diaporamaThumbs = diaporama.find('.diaporama__thumbs'),
      diaporamaPrev = diaporama.find('.diaporama__prev'),
      diaporamaNext = diaporama.find('.diaporama__next'),
      diaporamaCounter = diaporamaWrap.find('.diaporama__counter'),
      diaporamaCurrent = diaporamaCounter.find('.diaporama__current'),
      diaporamaTotal = diaporamaCounter.find('.diaporama__total'),
      windowWidth = $(window).outerWidth(),
      windowHeight = $(window).outerHeight();

  $.each(diaporamaTotal, function() {
    $(this).text(diaporamaSlides.length);
  });

  $.each(diaporamaCurrent, function() {
    var currentIndex = $(this).closest('.diaporama__slide').index();
    $(this).text(currentIndex + 1);
  });

  diaporamaClose.on('click', function(e) {
    e.stopPropagation();
    $('body, html').removeClass('diaporamaOpened');
    diaporama.slideUp(200);
  });

  diaporamaPrev.on('click', function(e) {
    e.stopPropagation();
    diaporamaWrap.slick('slickPrev');
    diaporamaWrap.slick('slickPause');
  });

  diaporamaNext.on('click', function(e) {
    e.stopPropagation();
    diaporamaWrap.slick('slickNext');
    diaporamaWrap.slick('slickPause');
  });

  // Mobile + Tablet version \\

  if (windowWidth < 1024) {

    diaporamaWrap.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 400,
      autoplay: false,
      dots: false,
      fade: true,
      pauseOnHover: true,
      arrows: false
    });

  }

  // Desktop version \\

  if (windowWidth >= 1024) {

    $('.diaporama .diaporama--wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      speed: 400,
      autoplay: false,
      draggable: false,
      dots: false,
      pauseOnHover: true,
      arrows: false,
      asNavFor: '.diaporama .diaporama__thumbs'
    });

    $('.diaporama .diaporama__thumbs').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      speed: 400,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      centerMode: false,
      focusOnSelect: true,
      asNavFor: '.diaporama .diaporama--wrap'
    });

  }

})(jQuery);
