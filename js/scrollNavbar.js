$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $(".header").addClass("nav-fixed");
    } else {
        $(".header").removeClass("nav-fixed");
    }
});
$(document).ready(function () {
    window.innerWidth <= 991 ? $(".navbar-collapse").addClass("nav-toggle-fixed")
    : $(".navbar-collapse").removeClass("nav-toggle-fixed");
    $(window).resize(function () {
        window.innerWidth <= 991 ? $(".navbar-collapse").addClass("nav-toggle-fixed")
        : $(".navbar-collapse").removeClass("nav-toggle-fixed");
    });
})
