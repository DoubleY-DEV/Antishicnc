$(function() {

    if($(window).width() > 991) {
        $('.h-burger').on('click', function() {
            $('.header__bottom').fadeToggle(300);
            return false;
        });
        $('.h-lang').hover(function() {
            $('.h-lang__list').stop(false, true).fadeIn(300);
        }, function() {
            $('.h-lang__list').stop(false, true).fadeOut();
        });

        $('.h-menu__link').hover(function() {
            if($(this).hasClass('h-menu__link-submenu')) {
                $(this).addClass('active');
                $('.header__menu').show();
            } else {
                $('.h-menu__link').removeClass('active');
                $('.header__menu').hide();
            }
        }, function() {

        });

        $('.header__menu').hover(function() {}, function() {
            $('.h-menu__link').removeClass('active');
            $('.header__menu').hide();
        });

    } else {
        $('.h-burger').on('click', function() {
            $('.header__mobmenu').fadeIn(300);
            return false;
        });
        $('.h-mobclose').on('click', function() {
            $('.header__mobmenu').fadeOut(300);
            return false;
        });
        $('.h-lang__current').on('click', function() {
            $(this).parent().children('.h-lang__list').fadeToggle(300);
            return false;
        });

        $('.h-menu__link').on('click', function() {
            if($(this).hasClass('h-menu__link-submenu')) {
                $(this).parent().children('.h-mobsubmenu').slideToggle(300);
                return false;
            }
        });
    }

    $('.s11-sidebar__link').on('click', function() {
        $(this).parent().toggleClass('s11-sidebar__item-active');
        $(this).parent().children('.s11-sidebar__sublist').slideToggle(300);
        return false;
    });

    $('.s11-sort__current').on('click', function() {
        $(this).toggleClass('s11-sort__current-active');
        $(this).parent().children('.s11-sort__list').slideToggle(300);
        return false;
    });

    $('.s11-vid__link').on('click', function() {
        var element_vid = $(this).data('id');
        $('.s11-vid__link').removeClass('s11-vid__link-active');
        $(this).addClass('s11-vid__link-active');
        $('.s11-content__area').hide();
        $('.s11-content__area[data-id="' + element_vid + '"]').show();
        return false;
    });

    $('.s18-sidebar__link').on('click', function() {
        $(this).parent().toggleClass('s18-sidebar__item-active');
        $(this).parent().children('.s18-sidebar__sublist').slideToggle();
        return false;
    });

	$('.slider-1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 400,
        autoplay: false,
        autoplaySpeed: 8000,
        fade: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
	});

	$('.s4-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        speed: 400,
        autoplay: false,
        autoplaySpeed: 8000,
        fade: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

	$('.s6-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        speed: 400,
        autoplay: false,
        autoplaySpeed: 8000,
        fade: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

	$('.s7-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        speed: 400,
        autoplay: false,
        autoplaySpeed: 8000,
        fade: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

	$('.s8-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        speed: 400,
        autoplay: false,
        autoplaySpeed: 8000,
        fade: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

	$('.s16-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 400,
        autoplay: false,
        autoplaySpeed: 8000,
        fade: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.s21-slider__small').slick({
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.s21-slider__big',
        focusOnSelect: true,
        speed: 400,
        autoplay: false,
        autoplaySpeed: 8000,
        fade: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.s21-slider__big').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.s21-slider__small',
        speed: 400,
        autoplay: false,
        autoplaySpeed: 8000,
        fade: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.s25-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 400,
        autoplay: false,
        autoplaySpeed: 8000,
        fade: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.s26-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        speed: 400,
        autoplay: false,
        autoplaySpeed: 8000,
        fade: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.s22-tabs__link').on('click', function() {
        $('.s22-tabs__link').removeClass('s22-tabs__link-current');
        $(this).addClass('s22-tabs__link-current');
        $('.s22-content').hide();
        $('.s22-content[data-id="' + $(this).data('id') + '"]').show();
        return false;
    });


    $('.news-element').height($('.news-element').height());
	$('.news-element').addClass('news-element-hover');

	$('.news-element-hover').hover(function() {
	    $(this).removeClass('news-element-hover');
    }, function() {
        $(this).addClass('news-element-hover');
    });

	$('.element-question__link').on('click', function() {
	    if($(this).parent('.element-question').hasClass('element-question-active')) {
	        $(this).children('.element-question__icon').html("+");
            $(this).parent('.element-question').removeClass('element-question-active');
	    } else {
            $(this).children('.element-question__icon').html("-");
            $(this).parent('.element-question').addClass('element-question-active');
        }
        return false;
    });

	$('.fb-img').fancybox();
	$('.fb-modal').fancybox();

});