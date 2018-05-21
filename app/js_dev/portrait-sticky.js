$(document).ready(function () {

    var windowWidth = $(window).outerWidth(),
        articlePortrait = $('.page--article-portrait').find('.article-portrait-body__wrap'),
        articleHero = $('.page--article-portrait').find('.article__header'),
        articleBody = articlePortrait.find('.article-body__main-content');

    if (windowWidth > 1023 && articlePortrait.length > 0) {

        var headerHeight = $('.header').outerHeight(),
            articlePortraitHeight = articlePortrait.outerHeight(),
            articlePortraitTopPosition = articlePortrait.offset().top,
            articlePortraitBottomPosition = articlePortraitTopPosition + articlePortraitHeight,
            articleBodyHeight = articleBody.outerHeight(),
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

            if (windowTopPosition > (articlePortraitBottomPosition - articleHeroHeight - headerHeight)) {
                articleHero.animate({ marginTop: articlePortraitHeight - articleHeroHeight -headerHeight + 'px'});
            }

            if (windowTopPosition < (articlePortraitBottomPosition - articleHeroHeight - headerHeight)) {
                articleHero.stop();
                articleHero.css('margin-bottom', 'auto');
                articleHero.animate({
                    marginTop: offset + 'px'
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