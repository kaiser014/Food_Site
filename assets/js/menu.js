var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#mobileMenuSlide'
});

// Fix position of slider
$(window).scroll(function (e) {
    var $el = $('.mobile-menu-list-item');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 80 && !isPositionFixed) {
        $el.css({
            'position': 'fixed',
            'top': '51px',
            'margin-bottom': '30px',
            'border-radius': '0px',
            'border-top': '2px solid #fff'
        });
    }
    if ($(this).scrollTop() < 80 && isPositionFixed) {
        $el.css({
            'position': 'static',
            'top': '0px',
            'margin-bottom': '10px',
            'border-radius': '5px'
        });
    }
});

// active the selected category: from mobile sldider
$('.mobile-menu-list-item .owl-item a').on('click', function () {
    $(this).addClass('active-item').siblings().removeClass('active-item');
});

// Gap on the top when select category
$(".mobile-menu-list-item").on('click', 'a', function (event) {
    event.preventDefault();
    var screen_width = screen.width;
    var gap = $(".mobile-header-menu").outerHeight(true);
    if (screen_width > 767) {
        gap = 21;
    } else {
        gap = 100;
    }
    var o = $($(this).attr("href")).offset();
    var sT = o.top - gap; // get the fixedbar height
    // compute the correct offset and scroll to it.
    window.scrollTo(0, sT);
});

// Gap on top of basket
$(".mobile-basket-buttonhold").on('click', 'a', function (event) {
    event.preventDefault();
    var screen_width = screen.width;
    var gap = $(".mobile-header-navsection").outerHeight(true);
    if (screen_width > 767) {
        gap = 100;
    } else {
        gap = 100;
    }
    var o = $($(this).attr("href")).offset();
    var sT = o.top - gap; // get the fixedbar height
    // compute the correct offset and scroll to it.
    window.scrollTo(0, sT);
});


// Gap on the top when select category For Large
$(".menu-list").on('click', 'a', function (event) {
    event.preventDefault();
    var screen_width = screen.width;
    var gap = $(".header-large-device").outerHeight(true);
    if (screen_width > 767) {
        gap = 5;
    } else {
        gap = 50;
    }
    var o = $($(this).attr("href")).offset();
    var sT = o.top - gap; // get the fixedbar height
    // compute the correct offset and scroll to it.
    window.scrollTo(0, sT);
});

// mobile top category slide
$(document).ready(function () {
    var sectionIds = $('.cat-menu-item');

    $(document).scroll(function () {
        sectionIds.each(function () {

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
            if (scrollPosition < containerBottom - 80 && scrollPosition >= containerOffset - 110) {

                var activeItemIndex = $(this).parent().parent().index();

                owl.trigger('to.owl.carousel', activeItemIndex);

                $(this).addClass('active-item').siblings().removeClass('active-item');
            } else {
                $(this).removeClass('active-item');
            }

        });
    });
});