$(function() {

    // Header

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if ( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        } 
    }

    // Scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let blockID = $(this).data('scroll');
        let blockOffset = $(blockID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
           scrollTop: blockOffset  - 150
        }, 700);
        
    });



    // Modal

    let modalCall = $("[data-modal]");
    let modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0deg)"
            });
        }, 110);


    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function() {

            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);

    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function() {

            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });



    // NavToggle
    
    navToggle.on("click", function (event) {
        nav.toggleClass("show");
        
    })


    // Slider : https://kenwheeler.github.io/slick/

    let slider = $("#introSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });




})