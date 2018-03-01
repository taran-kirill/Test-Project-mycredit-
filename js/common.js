$(document).ready(function () {
	"use strict";
	var swiper = new Swiper('.swiper-container-discount', {
		slidesPerView: 4,
		spaceBetween: 25,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		 breakpoints: {
            600: {
                slidesPerView: 1,
            },
            950: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
	});
    $(".btn-footer-menu").click(function(){
        $(this).toggleClass("fa-plus-square-o");
        $(this).toggleClass("fa-minus-square-o");
        $(this).next(".footer-menu-b").fadeToggle('fast');
    });
    $(document).ready(function() {
        $(window).resize(function(){
            var windowWidth = $(window).width();
            if(windowWidth < 767) {
                var b1 = document.getElementById("block1");
                var b2 = document.getElementById("block2");
            b1.parentNode.insertBefore(block2, block1);
            }
        })
    });
});

