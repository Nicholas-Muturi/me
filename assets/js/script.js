$(document).ready(function(){
    
    $(window).scroll(function(){
        $('nav').toggleClass('fixed-top',$(this).scrollTop() > 700);
    });

    
});