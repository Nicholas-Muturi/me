$(document).ready(function(){
    $.scrollIt();

    // $(".owl-carousel").owlCarousel({
    //     loop:true,
    //     margin:10,
    //     autoplay:true,
    //     autoplayTimeout:3000,
    //     autoplayHoverPause:true
    // });

    $(window).scroll(function(){
        $('nav').toggleClass('fixed-top',$(this).scrollTop() > 700);
    });

    
});