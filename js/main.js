//*Gloubal JS */
$(function () {
    
    "use strict";
      var win = $(window),
        htmlBody = $("html, body"),
        scrollToTop = $(".scroll-top"),
        navBar = $(".navbar"),
        factsCheck = false;
    /*Scroll Navbar  Animation*/    
     function activeNavbar() {
            if (win.scrollTop() > 20) {
                navBar.addClass("active-nav");
            } else {
                navBar.removeClass("active-nav");
            } 
        }
        activeNavbar();
        win.on("scroll", function () {
            activeNavbar();
        });
    //** Smooth Scroll To div*/

    $('.navbar-nav li a').click(function (){
        $('htmlBody').animate ({

            scrollTop: $('#'+$(this).data('value')).offset().top
        },1000);
    });
    /** Owl Carousel of Testimonial*/
        $(document).ready(function(){
            
            $("#testimonial-slider").owlCarousel({
                items:1,
                itemsDesktop:[1000,1],
                itemsDesktopSmall:[979,1],
                itemsTablet:[768,1],
                pagination:true,
                transitionStyle:"backSlide",
                autoPlay:true
            });
        });
         /* Portfolio Trigger*/
            $("#control li").on('click', function () {
                $(this).addClass('active')
                .siblings("li")
                .removeClass('active');
            });
            // The Filterizr
            $('.filter-container').filterizr({
                   //options object
                 animationDuration: 0.5,
                 });
     /*Facts Counter */
			if (!factsCheck && $(this).scrollTop() >= $(".facts").offset().top - 400) {
				$(".facts .fact-number").countTo();
				factsCheck = true;
			}
			
			win.on("scroll", function () {
				if (!factsCheck && $(this).scrollTop() >= $(".facts").offset().top - 400) {
					$(".facts .fact-number").countTo();
					factsCheck = true;
				}
			});
			
        /* Scroll Top*/
        function scrollUp() {
                if (win.scrollTop() >= 1200) {
                    scrollToTop.addClass("active");
                } else {
                    scrollToTop.removeClass("active");
                }
            }
            scrollUp();
            win.on("scroll", function () {
                scrollUp();
            });
            scrollToTop.on("click", function (e) {
                e.preventDefault();
                htmlBody.animate({
                    scrollTop: 0
                }, 800);
            });
        /** wow js */
        new WOW().init();

});