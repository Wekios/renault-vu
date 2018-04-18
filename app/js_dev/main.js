$(document).ready(function () {

  // navigation \\

  var $headerNavWrap = $('.c-main-navigation--wrap'),
    $headerNav = $('.c-main-navigation'),
    $menuTrigger = $('.b-header__menu-trigger i'),
    $subMenuTrigger = $('.sub__menu__trigger'),
    $menuOpenedOverlay = $('.menu__opened__overlay'),
    $mainContent = $('.page'),
    $headerSearch = $('.w-search-trigger'),
    $searchOverlay = $('.w-search-popup'),
    $searchClose = $('.search__close'),
    windowWidth = $(window).outerWidth();


  // mobile main menu \\

  if (windowWidth < 1025) {

    $menuTrigger.on('click', function (e) {

      e.stopPropagation();

      $headerNavWrap.toggleClass('inView');
      $headerSearch.fadeToggle(200);
      $menuOpenedOverlay.fadeToggle(200);
      $mainContent.toggleClass('menuOpened');
      $('body, html').toggleClass('menuOpened');

      if ($menuTrigger.hasClass('fa-bars')) {
        $menuTrigger.removeClass('fa-bars').addClass('fa-times');
      } else {
        $menuTrigger.removeClass('fa-times').addClass('fa-bars');
      }

    });

    $.each($subMenuTrigger, function () {

      var $current = $(this);

      $current.on('click', function (e) {

        e.preventDefault();
        e.stopPropagation();

        var $sub = $current.next('.sub__menu');
        var $arrow = $current.prev('i.fa');

        $headerNavWrap.css('overflow-y', 'scroll');
        $sub.slideToggle(200);

        if ($arrow.hasClass('fa-chevron-down')) {
          $arrow.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else {
          $arrow.removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }

      });

    });

  }

  // search overlay \\

  $headerSearch.on('click', function () {

    $searchOverlay.fadeIn(200);

  });

  $searchClose.on('click', function () {

    $searchOverlay.fadeOut(200);

  });

  // desktop main menu \\

  if (windowWidth > 1024) {

    $.each($subMenuTrigger, function () {

      var $current = $(this);
      var $li = $(this).closest('li');
      var $sub = $li.find('.sub__menu');

      $li.on('mouseenter', function () {

        $current.addClass('active');
        $sub.fadeIn(200);

      });

      $sub.on('mouseleave', function () {

        $sub.fadeOut(200);
        $current.removeClass('active');

      });

    });

  }

  // Slick Slider 

  $('.hp-slider').slick({
    arrows: true,
    prevArrow: '<div class="hp-slider__arrows hp-slider__arrows-left"><span class="fas fa-arrow-circle-left"></span><span class="sr-only">Prev</span></div>',
    nextArrow: '<div class="hp-slider__arrows hp-slider__arrows-right"><span class="fas fa-arrow-circle-right"></span><span class="sr-only">Next</span></div>'
  });
});