$(document).ready(function () {

    var windowWidth = $(window).outerWidth(),
        article = $('.page--article').find('.container--article-body'),
        social = $('.page--article').find('.widget__social-box--article');

    if (windowWidth > 1023 && social.length > 0) {

        $(window).on('load', function () {
            var headerHeight = $('.header').outerHeight(),
                articleHeight = article.outerHeight(),
                articleTopPosition = article.offset().top,
                articleBottomPosition = articleTopPosition + articleHeight,
                socialHeight = social.outerHeight();

            $(window).on('scroll', $.debounce(300, function () {
                var windowTopPosition = $(window).scrollTop() + headerHeight,
                    socialTopPosition = social.offset().top + headerHeight,
                    socialBottomPosition = socialTopPosition + socialHeight,
                    offset;

                if (windowTopPosition > articleTopPosition && windowTopPosition < (articleBottomPosition - socialHeight - headerHeight)) {
                    offset = windowTopPosition - articleTopPosition;
                    social.animate({
                        marginTop: offset
                    }, 400);
                }

                if (windowTopPosition > (articleBottomPosition - socialHeight + headerHeight)) {
                    social.animate({ marginTop: articleHeight - socialHeight + 'px'});
                }

                if (windowTopPosition < (articleBottomPosition - socialHeight - headerHeight)) {
                    social.stop();
                    social.css('margin-bottom', 'auto');
                    social.animate({
                        marginTop: offset + 10  + 'px'
                    });

                    if (windowTopPosition < articleTopPosition) {
                        social.stop();
                        social.animate({
                            marginTop: 0
                        });

                    }
                }

            }));

        });

    }

});