
requirejs([
    'jquery', 'owl', 'slidereveal'
], function ($) {
    $(document).ready(function () {



        // -------- Sticky Header  -------- //

        var stickyHeader = function(){

            var windowTopPosition = $(window).scrollTop();

            var triggerContainer = $('main').offset().top;

            var stickyContainer = $('.header-main');

            if (windowTopPosition > triggerContainer) {
                stickyContainer.addClass('sticky-header');
                stickyContainer.slideDown('fast');
            }else{
                stickyContainer.removeClass('sticky-header');
                stickyContainer.css("display","");
            }
        };

        $(window).scroll(stickyHeader);


        // -------- Scroll To Top  -------- //

        $(window).scroll(function() {
            if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
                $('#return-to-top').fadeIn(200); // Fade in the arrow
            } else {
                $('#return-to-top').fadeOut(200); // Else fade out the arrow
            }
        });
        $('#return-to-top').click(function() { // When arrow is clicked
            $('body,html').animate({
                scrollTop: 0 // Scroll to top of body
            }, 500);
        });


        // -------- Owl Carousel  -------- //


        $('#owl-hero').owlCarousel({
            loop: true,
            margin: 0,
            // autoplay: true,
            // autoplayHoverPause: true,
            // autoHeight:true,
            nav: true,
            dots: true,
            navText: [
                '<i class="fal fa-chevron-left" aria-hidden="true"></i>',
                '<i class="fal fa-chevron-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $('#owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            nav: true,
            dots: false,
            navText: [
                '<i class="fal fa-chevron-left" aria-hidden="true"></i>',
                '<i class="fal fa-chevron-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


    });


    // -------- Toggles  -------- //

    $("#account-nav-trigger").click(function(){
        $("#dd-account-nav").toggle();
        $("#account-nav-trigger").click(function(){
            $("#dd-account-nav").toggle();
        });
    });

    $("#search-toggle-trigger").click(function(){
        $("#toggle-search").toggle();
        $("#close-search-toggle-trigger").click(function(){
            $("#toggle-search").hide();
        });
    });

    // Default Mobile Search Dropdown

    $("#search-dd-trigger").click(function(){
        $("#search-dd").toggle();
    });


    $(document).mouseup(function (e) {
        if ($(e.target).closest("#dd-account-nav").length
            === 0) {
            $("#dd-account-nav").hide();


        }
        if ($(e.target).closest("#toggle-search").length
            === 0) {
            $("#toggle-search").hide();

        }
    });


    // --------  Cart Slide  -------- //

    $("#cart-slider").slideReveal({
        trigger: $(".cart-trigger"),
        width: 375,
        push: false,
        overlay: true,
        position: "right"
    });

    // --------  Tabs  -------- //

    // $('#tabs li a:not(:first)').addClass('inactive');
    // $('.container').hide();
    // $('.container:first').show();
    //
    // $('#tabs li a').click(function(){
    //     var t = $(this).attr('id');
    //     if($(this).hasClass('inactive')){ //this is the start of our condition
    //         $('#tabs li a').addClass('inactive');
    //         $(this).removeClass('inactive');
    //
    //         $('.container').hide();
    //         $('#'+ t + 'C').fadeIn('slow');
    //     }
    // });


});






