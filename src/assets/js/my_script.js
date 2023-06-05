import $ from 'jquery';

// Change navbar style on scroll
$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
            $('.navbar .logo a').css("font-size", "25px");
            $('.border').addClass('active');
        } else {
            $('.navbar').removeClass("sticky");
            $('.navbar .logo a').css("font-size", "35px");
            $('.border').removeClass('active');
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up').addClass("show");
            $('.scroll-up').css("margin-right", "5px");

        } else {
            $('.scroll-up').removeClass("show");
            $('.scroll-up').css("margin-right", "-1px");

        }
    });

    // slide-up script
    $('.scroll-up').click(function () {
        $('html').animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    function ToggleMenu() {
        $('.menu-btn').click(function () {
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });
    }

    ToggleMenu();
});

// Paralax
function ParalaxReady(){
    $(window).scroll(function () {
        parallax();
    })
    function parallax() {
        var wScroll = $(window).scrollTop();
        $(".parallax").css("background-position",
            "center " + (wScroll * 0.60) + "px")
        $(".parallax-2").css("background-position",
            "center " + (wScroll * 2) + "px")
        $(".parallax-box").css("top",
            -50 + (wScroll * 0.50) + "em")
    }

}

