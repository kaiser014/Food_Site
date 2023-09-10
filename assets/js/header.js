$(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
        if (_opened === true && !clickover.hasClass("mobile-navbar-toggler")) {
            $("button.mobile-navbar-toggler").click();
        }
    });
});
$('#headerLarge .navbar-nav a').on('click', function () {
    $('#headerLarge .navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});
$('body').click(function(){
    var icon = document.getElementById('headerDownArrowIcon');
    if($('#LocationCollapse').hasClass('show')){
        $('#LocationCollapse').removeClass('show');
        icon.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
    }
});
$(".mobileheader-collapse-btn").click(function() {
    if ($(this).hasClass('collapsed')) {
        $(this).children('.mobileheader-arrowbutton-hold').find('svg').attr('data-icon', 'angle-down');
    } else {
        $(this).children('.mobileheader-arrowbutton-hold').find('svg').attr('data-icon', 'angle-up');
    }
});

// Fix position of Header
$(window).scroll(function (e) {
    var $el = $('.mobile-header-navsection');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 60 && !isPositionFixed) {
        $el.css({
            'position': 'fixed',
            'top': '0px',
            'left': '0px',
            'right': '0px',
            'margin-bottom': '0',
            'border-radius': '0px',
        });
    }
    if ($(this).scrollTop() < 60 && isPositionFixed) {
        $el.css({
            'position': 'static',
        });
    }
});