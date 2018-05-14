(function ($) {

  // Psychotest

  // Variables 

  const header = $('.header'),
    headerHeight = header.outerHeight(),
    windowWidth = $(window).outerWidth(),
    windowHeight = $(window).outerHeight();

  var pageWrap = $('.psychotest'),
    intro = pageWrap.find('.psychotest-intro'),
    startButton = intro.find('.psychotest-start'),
    allSlides = pageWrap.find('.psychotest-slide'),
    questions = pageWrap.find('.psychotest-question'),
    counters = pageWrap.find('.psychotest-counter');

  // Update counter

  // pageWrap.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  //     let i = (currentSlide ? currentSlide : 0) + 1;
  //     counterCurrent.text("0" + i);
  //     counterTotal.text(" / " + "0" + slick.slideCount);
  //     if (slick.slideCount == null) {
  //       slick.slideCount = 3;
  //     };
  //   });


  $.each(counters, function () {
    let counter = $(this),
      currentQuestion = counter.closest('.psychotest-question'),
      total = counter.find('.psychotest-counter__total'),
      current = counter.find('.psychotest-counter__current');

    total.text(questions.length);
    current.text(currentQuestion.index());
  });

  pageWrap.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    pauseOnHover: false,
    dots: false,
    draggable: false,
    autoplay: false,
    swipe: false,
    dots: false,
    arrows: false
  });

  // Responsive Height

  var slickList = pageWrap.find('.slick-list');
  slickList.height(intro.outerHeight());

  startButton.on('click', function () {
    pageWrap.slick('slickNext');
  });

  if (windowWidth >= 1024) {

    intro.height(windowHeight - headerHeight);
    slickList.height(windowHeight - headerHeight);

    pageWrap.on('afterChange', function (event, slick, currentSlide) {

      var currentQuestion = $(questions[currentSlide - 1]),
        options = currentQuestion.find('.question-option'),
        confirm = currentQuestion.find('.btn-confirm'),
        endTest = currentQuestion.find('.btn-confirm.end-test');

      function activateOption(element) {

        var current = $(element).closest('.question-option'),
          circle = current.find('.question-option-circle'),
          tick = circle.find('.tick');

        $.each(options, function () {

          var elem = $(this);

          if (elem.hasClass('active')) {
            elem.removeClass('active');
            elem.find('.question-option-circle').removeClass('active');
            elem.find('.tick').fadeOut(200);
          }
          if (elem.hasClass('inactive')) elem.removeClass('inactive');
        });

        current.addClass('active');
        confirm.addClass('btn--yellow');

        $.each(options, function () {
          if (!$(this).hasClass('active')) {
            $(this).addClass('inactive');
          }
        });

        circle.addClass('active');
        tick.fadeIn(200);

      }


      options.on('click', function (e) {
        e.stopPropagation();
        activateOption($(this));
      });

      confirm.on('click', function (e) {
        e.stopPropagation();
        if ($(this).hasClass('btn--yellow') && !$(this).hasClass('end-test')) pageWrap.slick('slickNext');
      });

      endTest.on('click', function (e) {
        if (!$(this).hasClass('btn--yellow')) e.preventDefault();
      });

    });

  }

  if (windowWidth < 1024) {

    pageWrap.on('afterChange', function (event, slick, currentSlide) {

      var currentQuestion = $(questions[currentSlide - 1]),
        options = currentQuestion.find('.question-option');

      // Adjust slick height to current question height

      slickList.height(currentQuestion.outerHeight());

      function activateOption(element) {

        var current = $(element).closest('.question-option'),
          overlay = current.find('.question-option__overlay'),
          confirm = overlay.find('.btn'),
          cancel = overlay.find('.option-cancel'),
          circle = current.find('.question-option-circle'),
          tick = circle.find('.tick');

        current.addClass('active');

        $.each(options, function () {
          if (!$(this).hasClass('active')) {
            $(this).addClass('inactive').off();
          }
        });

        overlay.fadeIn(200);
        circle.addClass('active');
        tick.fadeIn(200);

        cancel.on('click', function (e) {
          e.stopPropagation();
          overlay.fadeOut(200);
          circle.removeClass('active');
          tick.fadeOut(200);
          current.removeClass('active');

          $.each(options, function () {
            if ($(this).hasClass('inactive')) {
              $(this).removeClass('inactive');
            }
            options.on('click', function (e) {
              activateOption(e.target);
            });
          });
        });

        confirm.on('click', function () {
          pageWrap.slick('slickNext');
        });

      }

      options.on('click', function (e) {
        activateOption(e.target);
      });

    });

  }

})(jQuery);