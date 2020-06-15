$(window).on("load",function(){
    $("#preloader").fadeOut(1000);
});
$(document).ready(function(){
    //Owl Carousel
    AOS.init({
        duration: 500
    });
    $('#gallery .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        autoplay: true
    });
    $('#testimonial .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        // autoplay: true,
        responsive : {
            0:{
                items: 1
            },
            993:{
                items: 1
            },
            1000:{
                items: 3
            }
        }
    });
});