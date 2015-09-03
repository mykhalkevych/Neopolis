$(document).ready(function(){
    var $menu = $("#menu");
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
            $menu.fadeOut('fast',function(){
                $(this).removeClass("default")
                    .addClass("fixed transbg")
                    .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("fixed transbg")
                           .addClass("default")
                           .fadeIn('fast');
                });
            }
        });
        
        $menu.hover(
            function(){
                if( $(this).hasClass('fixed') ){
                    $(this).addClass('default');
                }
            },
            function(){
                if( $(this).hasClass('fixed') ){
                    $(this).removeClass('default');
                }
            });
    });
$(document).ready(function() {
   $('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
     if($.browser.safari){
       $('body').animate( { scrollTop: destination }, 1100 );
     }else{
       $('html').animate( { scrollTop: destination }, 1100 );
     }
     return false;
   });
 }); 
 
	function play(){

		document.getElementById('video1').style.visibility="visible";
		var source=document.getElementsByTagName("iframe")[0].getAttribute("src");
		document.getElementsByTagName("iframe")[0].setAttribute("src",source+"?autoplay=1"); 
	}  