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

      if (menuTrigger.children().hasClass('fa-bars')) {
        menuTrigger.children().removeClass('fa-bars').addClass('fa-times');
      } else {
        menuTrigger.children().removeClass('fa-times').addClass('fa-bars');
      }

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

        if ($arrow.hasClass('fa-chevron-down')) {
          $arrow.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else {
          $arrow.removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }

      });

    });

  }

  // search overlay \\

  headerSearch.on('click', function () {

    searchOverlay.fadeIn(200);
    searchInput.focus();

  });

  searchClose.on('click', function () {

    searchOverlay.fadeOut(200);

  });

  searchInput.on('mouseenter', function () {

    $('.search-popup .search__field svg').css('color', 'white');

  });

  searchInput.on('mouseleave', function () {

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

      $sub.on('mouseleave', function () {

        $sub.fadeOut(200);
        $current.removeClass('active');

      });

    });

  }
});