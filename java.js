$(window).on('scroll', function () {
    scrollFunction();
});
function scrollFunction() {
    if ($(document).scrollTop() > 60) {
        $('.header').css('position', 'fixed');
        $('.header').css('top', '0');
        $('.header').css('z-index', '9999999');
        $('.header').css('width', '100%');
        $('.header').css('z-index', '9999999');
        $('.header').css('transition', ' all 0.40s linear');
    } else {
        $('.header').css('position', 'relative');
        $('.header').css('top', '0');
        $('.header').css('transition', ' all 0.9s linear');
        $('.header').css('width', '100%');
    }
}
$(document).ready(function () {
    $(".popup").hide();
    $(".select-btn").click(function () {
        $(".popup").show();
        $('body').css({ "overflow": "hidden" });
    });
    $(".cross i").click(function () {
        $(".popup").hide();
        $('body').css({ "overflow": "auto" });
    });
});
$(".search-popup").hide();
$(".navbar a svg").click(function () {
    $(".search-popup").fadeIn();
    $(".search-popup").fadeIn("slow");
    $(".search-popup").fadeIn(3000);
});
$(".search-popup i").click(function () {
    $(".search-popup").fadeIn("slow");
    $(".search-popup").fadeIn(3000);
    $(".search-popup").fadeOut();

});
$(".cross i").hide();
$(".bar i").click(function () {
    $(".navbar").addClass("active");
    $(".bar i").hide();
    $(".cross i").show();
});
$(".cross i").click(function () {
    $(".navbar").removeClass("active");
    $(".cross i").hide();
    $(".bar i").show();
});
