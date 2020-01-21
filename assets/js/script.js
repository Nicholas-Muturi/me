$(document).ready(function(){
    $.scrollIt();

    $(window).scroll(function(){
        $('nav').toggleClass('fixed-top',$(this).scrollTop() > 700);
    });

    
});