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