(function ($) {

    // Variables

    var hpSlider = $('.hp-slider'),
        counterCurrent = $('.hp-slider__current'),
        counterTotal = $('.hp-slider__total'),
        hpPrev = $(".hp-slider__arrows-prev"),
        hpNext = $(".hp-slider__arrows-next");

    // Change slides funcion 

    // Hp-slider

    hpPrev.on('click', function (e) {
        e.stopPropagation();
        hpSlider.slick('slickPrev');
        hpSlider.slick('slickPause');
    });

    hpNext.on('click', function (e) {
        e.stopPropagation();
        hpSlider.slick('slickNext');
        hpSlider.slick('slickPause');
	});

	hpNext.on('mouseenter', function(){
		var hpSlideCurrent = $('.hp-slider__slide.slick-slide.slick-current.slick-active');
		hpSlideCurrent.next().css('opacity', '1');
		hpSlideCurrent.animate({ "left": "-=50px" }, "slow" );
	});

	hpNext.on('mouseleave', function(){
		var hpSlideCurrent = $('.hp-slider__slide.slick-slide.slick-current.slick-active');
		hpSlideCurrent.animate({ "left": "+=50px" }, "slow" );
		hpSlideCurrent.next().css('opacity', '0');
	});

	
	// hpNext.on('hover', function(){
	// 	var $this = $(this); 
	// 	var hpSlideCurrent = $('.hp-slider__slide.slick-slide.slick-current.slick-active');
	// 	hpSlideCurrent.css('left', '2rem');
	// 	$this.click(function(){
	// 		hpSlideCurrent = hpSlideCurrent.prev();
	// 		$('.hp-slider__slide').css('left', '-1376px');
	// 		hpSlideCurrent.css('left', '2rem');
	// 	});
	// });


    // Counter Function

    hpSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        counterCurrent.text("0" + i);
        counterTotal.text(" / " + "0" + slick.slideCount);
        if (slick.slideCount == null) {
            slick.slideCount = 5;
        };
    });


    // Slider Settings

    hpSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        swipe: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        dots: false,
        infinite: true
    });
})(jQuery);