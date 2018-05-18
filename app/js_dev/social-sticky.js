$(document).ready(function () {

    var windowWidth = $(window).outerWidth();

    if (windowWidth > 1023) {

        $(window).on('load', function () {
            var article = $('.page--article').find('.container--article-body'),
                social = $('.page--article').find('.widget__social-box--article'),
                headerHeight = $('.header').outerHeight(),
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

                // if (windowTopPosition > (articleBottomPosition - socialHeight - headerHeight)) {
                //     social.css('margin-top', 'auto');
                //     social.animate({
                //         marginBottom: '25px'
                //     });
                // }

                if (windowTopPosition < (articleBottomPosition - socialHeight - headerHeight)) {
                    social.stop();
                    social.css('margin-bottom', 'auto');
                    social.animate({
                        marginTop: offset + 30 + 'px'
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