$(function(){
     $(window).scroll(function(){
               var scroll = $(window).scrollTop();
         if ($(window).scrollTop() > 0){
             $(".car").css("left", scroll);
         }
     });
 });