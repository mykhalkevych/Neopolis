  jQuery(document).ready(function($){ 
  	/*select*/ 
  	$(".select").selectbox(); 

  	$(".letters li").click(function(){
  		if($(".mobile_select").hasClass("on")){ 
  			$(".mobile_select").removeClass("on");
  			$(".mobile_select").text($(this).text());
  			$(".letters").scrollTop("0");
  			$(".letters").css({"overflow":"hidden"});
  			$(".letters").animate({"height":"22px"},300,function(){
  				console.log("sdfs");
  			});
  		}
  		else{
  			$(".mobile_select").addClass("on");
  			$(".letters").css({"overflow-y":"scroll"});
  			$(".letters").animate({"height":"110px"},300,function(){
  				console.log("sdfs");
  			});
  		}

  	}); 

  });
