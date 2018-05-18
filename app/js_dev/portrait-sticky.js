$(document).ready(function () {

    var windowWidth = $(window).outerWidth();

    if (windowWidth > 1023) {

        var articlePortrait = $('.page--article-portrait').find('.article-portrait-body__wrap'),
            articleHero = $('.page--article-portrait').find('.article__header'),
            headerHeight = $('.header').outerHeight(),
            articlePortraitHeight = articlePortrait.outerHeight(),
            articlePortraitTopPosition = articlePortrait.offset().top,
            articlePortraitBottomPosition = articlePortraitTopPosition + articlePortraitHeight,
            articleHeroHeight = articleHero.outerHeight();

        $(window).on('scroll', $.debounce(300, function () {
            var windowTopPosition = $(window).scrollTop() + headerHeight,
                articleHeroTopPosition = articleHero.offset().top + headerHeight,
                articleHeroBottomPosition = articleHeroTopPosition + articleHeroHeight,
                offset;

            if (windowTopPosition > articlePortraitTopPosition && windowTopPosition < (articlePortraitBottomPosition - articleHeroHeight - headerHeight)) {
                offset = windowTopPosition - articlePortraitTopPosition;
                articleHero.animate({
                    marginTop: offset
                }, 400);
            }

            if (windowTopPosition < (articlePortraitBottomPosition - articleHeroHeight - headerHeight)) {
                articleHero.stop();
                articleHero.css('margin-bottom', 'auto');
                articleHero.animate({
                    marginTop: offset  + 'px'
                });

                if (windowTopPosition < articlePortraitTopPosition) {
                    articleHero.stop();
                    articleHero.animate({
                        marginTop: 0
                    });

                }
            }

        }));
    }

});