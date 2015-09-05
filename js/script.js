  jQuery(document).ready(function($){ 
/*select*/ 
$(".select").selectbox(); 


// categories Isotope
var container = $('#categories-wrap');  


container.isotope({
    animationEngine : 'best-available',
    animationOptions: {
        duration: 200,
        queue: false
    },
    layoutMode: 'fitRows'
}); 

$('#filters a').click(function(){
    $('#filters a').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    container.isotope({ filter: selector });
    setProjects();      
    return false;
});


function splitColumns() { 
    var winWidth = $(window).width(), 
    columnNumb = 1;


    if (winWidth > 1500) {
        columnNumb = 6;
    } else if (winWidth > 992) {
        columnNumb = 4;
    } else if (winWidth > 768) {
        columnNumb = 3;
    } else if (winWidth < 479) {
        columnNumb = 1;
    }
    return columnNumb;
}       

function setColumns() { 
    var winWidth = $(window).width()-30, 
    columnNumb = splitColumns(), 
    postWidth = Math.floor(winWidth / columnNumb);

    container.find('.categories-item').each(function () { 
        $(this).css( { 
            width : postWidth + 'px' 
        });
    });
}       

function setProjects() { 
    setColumns();
    container.isotope('reLayout');
}       

container.imagesLoaded(function () { 
    setColumns();
});


$(window).bind('resize', function () { 
    setProjects();          
});

});
$( window ).load(function() {
    jQuery('#all').click();
    return false;
});  
