$(document).ready(function () {

  // Navigation Variables \\

  var headerNavWrap = $('.main-navigation--wrap'),
    headerNav = $('.main-navigation'),
    menuTrigger = $('.header__menu-trigger'),
    subMenuTrigger = $('.sub__menu__trigger'),
    menuOpenedOverlay = $('.menu__opened__overlay'),
    mainContent = $('.page'),
    headerSearch = $('.search-trigger'),
    searchOverlay = $('.search-popup'),
    pageOverlay = $('.page-overlay'),
    searchInput = $('.search__field').find('input'),
    searchClose = $('.search__close'),
    windowWidth = $(window).outerWidth();


  // mobile main menu \\

  if (windowWidth < 1025) {

    menuTrigger.on('click', function (e) {

      e.stopPropagation();

            
      pageOverlay.fadeToggle(200);
      headerNavWrap.toggleClass('inView');
      headerSearch.fadeToggle(200);
      menuOpenedOverlay.fadeToggle(200);
      mainContent.toggleClass('menuOpened');
      $('body, html').toggleClass('menuOpened');

      menuTrigger.find('.fa-bars').toggleClass('closed');
      menuTrigger.find('.fa-times').toggleClass('closed');

    });

    $.each(subMenuTrigger, function () {

      var $current = $(this);

      $current.on('click', function (e) {

        e.preventDefault();
        e.stopPropagation();

        var $sub = $current.next('.sub__menu');
        var $arrow = $current.prev('svg');

        headerNavWrap.css('overflow-y', 'scroll');
        $sub.slideToggle(200);

        $arrow.toggleClass('rotate');

      });

    });

  }

  // search overlay \\

  headerSearch.on('click', function (e) {

    if((navigator.userAgent.indexOf('Safari') !== -1) &&
        (navigator.userAgent.indexOf('Version/9') !== -1)) {
          $('html').addClass('overflow-none');
          $('body').addClass('overflow-none');
        }

    e.preventDefault();
    searchOverlay.fadeIn(200);
    searchInput.focus();

  });

  searchClose.on('click', function () {

    searchOverlay.fadeOut(200);
    $('html').removeClass('overflow-none');
    $('body').removeClass('overflow-none');
  });

  searchInput.on('keypress', function () {

    $('.search-popup .search__field svg').css('color', 'white');

  });

  searchInput.on('focusout', function () {

    $('.search-popup .search__field svg').css('color', 'gray');

  });

  // desktop main menu \\

  if (windowWidth > 1024) {

    $.each(subMenuTrigger, function () {

      var $current = $(this);
      var $li = $(this).closest('li');
      var $sub = $li.find('.sub__menu');

      $li.on('mouseenter', function () {

        $current.addClass('active');
        $sub.fadeIn(200);

      });

      $li.on('mouseleave', function () {

        $sub.fadeOut(200);
        $current.removeClass('active');

      });

    });

  }
});