var $ = jQuery.noConflict();
//SLIDER

$(window).load(function(){
      $('.flexslider').flexslider({
        animation: "fade",
		pauseOnAction: false,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });

    });