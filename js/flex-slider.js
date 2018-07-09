
jQuery(document).ready(function($) {



// Flex Slider
  $(window).ready(function() {
						   
  $('.flexslider').flexslider({
	animation: 'fade',
	animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
	slideshow: true,                //Boolean: Animate slider automatically
	slideshowSpeed: 5000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
	animationSpeed: 800,             //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
	pauseOnHover: true, 
	pauseOnAction:false,
	controlNav: false,
	directionNav: true,
	controlsContainer: '.flex-container',
	start: function(slider) {
		 var toptitle = $('.slider-1 .flex-active-slide h2').data('toptitle');
		 var topimage = $('.slider-1 .flex-active-slide .item').data('topimage');
		 var bottomtext = $('.slider-1 .flex-active-slide p').data('bottomtext');
		 var bottomlinks = $('.slider-1 .flex-active-slide .links').data('bottomlinks');
		 
		 $('.slider-1 .flex-active-slide').find('.item').css({ top: topimage});
         $('.slider-1 .flex-active-slide').find('.item').animate({ right: '0', opacity: '1'}, 1000);
		 $('.slider-1 .flex-active-slide').find('h2').animate({ left: '0', top: toptitle, opacity: '1'}, 1500);
		 $('.slider-1 .flex-active-slide').find('p').animate({ left: '0', bottom: bottomtext, opacity: '1'}, 1500);
		 $('.slider-1 .flex-active-slide').find('.links').css({ bottom: bottomlinks});
		 $('.slider-1 .flex-active-slide').find('.links').animate({ left: '0', opacity: '1'}, 1800);
		 
		 // remove class loading after start
		 slider.removeClass('loading');
      },
	before: function(slider) {
         $('.slider-1 .flex-active-slide').find('.item').animate({ right: '-100%', opacity: '0'}, 1000);
		 $('.slider-1 .flex-active-slide').find('h2').animate({ left: '0', top: '-100%', opacity: '0'}, 1500);
		 $('.slider-1 .flex-active-slide').find('p').animate({ left: '0', bottom: '-50%', opacity: '0'}, 1500);
		 $('.slider-1 .flex-active-slide').find('.links').animate({ left: '-100%', opacity: '0'}, 1800);
      },
	after: function(slider) {
		 var toptitle = $('.slider-1 .flex-active-slide h2').data('toptitle');
		 var topimage = $('.slider-1 .flex-active-slide .item').data('topimage');
		 var bottomtext = $('.slider-1 .flex-active-slide p').data('bottomtext');
		 var bottomlinks = $('.slider-1 .flex-active-slide .links').data('bottomlinks');
		 
		 $('.slider-1 .flex-active-slide').find('.item').css({ top: topimage});
         $('.slider-1 .flex-active-slide').find('.item').animate({ right: '0', opacity: '1'}, 1000);
		 $('.slider-1 .flex-active-slide').find('h2').animate({ left: '0', top: toptitle, opacity: '1'}, 1500);
		 $('.slider-1 .flex-active-slide').find('p').animate({ left: '0', bottom: bottomtext, opacity: '1'}, 1500);
		 $('.slider-1 .flex-active-slide').find('.links').css({ bottom: bottomlinks});
		 $('.slider-1 .flex-active-slide').find('.links').animate({ left: '0', opacity: '1'}, 1800);
      }
		});
  
  $('.flexslider4').flexslider({
	animation: 'fade',
	animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
	slideshow: true,                //Boolean: Animate slider automatically
	slideshowSpeed: 6000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
	animationSpeed: 800,             //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
	pauseOnHover: true, 
	pauseOnAction:true,
	controlNav: false,
	directionNav: true,
	controlsContainer: '.flex-container',
	start: function(slider) {
		 var bottomtitle = $('.slider-2 .flex-active-slide h2').data('bottomtitle');
		 var bottomtext = $('.slider-2 .flex-active-slide p').data('bottomtext');
		 var bottomlinks = $('.slider-2 .flex-active-slide .links').data('bottomlinks');
		 
		 $('.slider-2 .flex-active-slide').find('h2').animate({ bottom: bottomtitle, opacity: '1'}, 1500);
		 $('.slider-2 .flex-active-slide').find('p').animate({ bottom: bottomtext, opacity: '1'}, 2000);
		 $('.slider-2 .flex-active-slide').find('.links').animate({ bottom: bottomlinks, opacity: '1'}, 2200);
		 
		 // remove class loading after start
		 slider.removeClass('loading');
      },
	before: function(slider) {
		 $('.slider-2 .flex-active-slide').find('h2').animate({ bottom: '-20%', opacity: '0'}, 1500);
		 $('.slider-2 .flex-active-slide').find('p').animate({ bottom: '-50%', opacity: '0'}, 2000);
		 $('.slider-2 .flex-active-slide').find('.links').animate({ bottom: '-60%', opacity: '0'}, 2200);
      },
	after: function(slider) {
		  var bottomtitle = $('.slider-2 .flex-active-slide h2').data('bottomtitle');
		 var bottomtext = $('.slider-2 .flex-active-slide p').data('bottomtext');
		 var bottomlinks = $('.slider-2 .flex-active-slide .links').data('bottomlinks');
		 
		 $('.slider-2 .flex-active-slide').find('h2').animate({ bottom: bottomtitle, opacity: '1'}, 1500);
		 $('.slider-2 .flex-active-slide').find('p').animate({  bottom: bottomtext, opacity: '1'}, 2000);
		 $('.slider-2 .flex-active-slide').find('.links').animate({  bottom: bottomlinks, opacity: '1'}, 2200);
      }
		});
  
  $('.flexslider2').flexslider({
	animation: 'slide',
	animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
	slideshow: true,                //Boolean: Animate slider automatically
	slideshowSpeed: 4500,           //Integer: Set the speed of the slideshow cycling, in milliseconds
	animationSpeed: 700,             //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
	pauseOnHover: true, 
	pauseOnAction:false,
	controlNav: false,
	directionNav: true,
	controlsContainer: '.flex-container'
		});
  
  $('.flexslider3').flexslider({
	animation: 'slide',
	animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
	slideshow: false,                //Boolean: Animate slider automatically
	slideshowSpeed: 4500,           //Integer: Set the speed of the slideshow cycling, in milliseconds
	animationSpeed: 700,             //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
	pauseOnHover: true, 
	pauseOnAction:false,
	controlNav: false,
	directionNav: true,
	controlsContainer: '.flex-container'
		});
  
  
	});


								
});