var $ = jQuery.noConflict();



//TOGGLE-------------------------------------------------------
$(document).ready(function () {
	
	$('#toggle-view li').click(function () {

		var text = $(this).children('div.panel');

		if (text.is(':hidden')) {
			text.slideDown('10');
			$(this).children('.ui-accordion-header').addClass('ui-accordion-header-active');		
		} else {
			text.slideUp('10');
			$(this).children('.ui-accordion-header').removeClass('ui-accordion-header-active');		
		}

	});

});

//ACCORDION-----------------------------------------------------
$(document).ready(function() {
    $("#accordion").accordion({
	  autoHeight: false,
	   /*icons: { "header": "plus", "headerSelected": "minus" }*/
	});
});



//DROPDOWN MENU--------------------------------------------------
$(document).ready(function(){
				$('ul.sf-menu').superfish({
				autoArrows:  false,
				dropShadows: false
				});
			});
			
//ADAPTIVE MENU--------------------------------------------------
$(document).ready(function(){
	// add select 
	$('<select />').appendTo('nav#main-nav');

	//add options to select
	$('<option />', {
		'selected': 'selected',
		'value' : '',
		'text': 'Choose Page...'
	}).appendTo('nav select');

	$('nav#main-nav ul li a').each(function(){
		var target = $(this);

		$('<option />', {
			'value' : target.attr('href'),
			'text': target.text()
		}).appendTo('nav#main-nav select');

	});

	//  onclicking 
	$('nav#main-nav select').on('change',function(){
		window.location = $(this).find('option:selected').val();
	});
});

//FANCYBOX-------------------------------------------------------
$(document).ready(function() {

	$(".lightbox").live("mousedown", function()
		{ 
            $(this).fancybox(
			{ 
				'titleShow'		: false,
				'overlayShow'	: false,
				'transitionIn'	: 'elastic',
				'transitionOut'	: 'elastic'
			});	
		});
	$("a.iframe").fancybox(

	  { 
		'titleShow'		: true,
		'autoDimensions'    : true, 
		'width'				: 800,
		'height'			: 450,
        'autoScale'     	: true,
		'type'				: 'iframe'

		});	
	
});

//PORTFOLIO FILTER------------------------------------------------
$(document).ready(function(){
	
	// Clone portfolio items to get a second collection for Quicksand plugin
	var $portfolioClone = $("#portfolio").clone();
	
	// Attempt to call Quicksand on every click event handler
	$("#filter a").click(function(e){
		
		$("#filter li").removeClass("current");	
		
		// Get the class attribute value of the clicked link
		var $filterClass = $(this).parent().attr("class");

		if ( $filterClass == "all" ) {
			var $filteredPortfolio = $portfolioClone.find("li");
		} else {
			var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
		}
		
		// Call quicksand
		$("#portfolio").quicksand( $filteredPortfolio, { 
			duration: 800, 
			easing: 'swing' 
		});


		$(this).parent().addClass("current");

	})
});	

//CONTENT TABS---------------------------------------------------
$(document).ready(function() {

		var $tabsNav    = $('.tabs-nav'),
			$tabsNavLis = $tabsNav.children('li'),
			$tabContent = $('.tab-content');

		$tabsNav.each(function() {
			var $this = $(this);

			$this.next().children('.tab-content').stop(true,true).hide()
												 .first().show();

			$this.children('li').first().addClass('active').stop(true,true).show();
		});

		$tabsNavLis.on('click', function(e) {
			var $this = $(this);

			$this.siblings().removeClass('active').end()
				 .addClass('active');
			
			$this.parent().next().children('.tab-content').stop(true,true).hide()
														  .siblings( $this.find('a').attr('href') ).fadeIn();

			e.preventDefault();
		});

});

//FLICKR FEED---------------------------------------------------- 
$(document).ready(function() {		
	$('#flickrfeed').jflickrfeed({
		limit: 6,
		qstrings: {
			id: '91212552@N07'
		},
		itemTemplate:
		'<li>' +
			'<a class="lightbox" rel="colorbox" href="{{image}}" title="{{title}}">' +
				'<img src="{{image_s}}" alt="{{title}}" />' +
			'</a>' +
		'</li>'
	}, function(data) {
			$(".lightbox").fancybox({
			'overlayShow'	: false,
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic'
		});
	});
});	

//FORM VALIDATION JAVASCRIPT----------------------------------------------------
$(document).ready(function() {
	$('form#contact-form').submit(function() {
		$('form#contact-form .styled-box.iconed-box.error').remove();
		var hasError = false;
		$('.requiredField').each(function() {
			if(jQuery.trim($(this).val()) == '') {
            	var labelText = $(this).prev('label').text();
            	$(this).parent().append('<div class="styled-box iconed-box error">You forgot to enter your '+labelText+'</div>');
            	$(this).addClass('inputError');
            	hasError = true;
            } else if($(this).hasClass('email')) {
            	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            	if(!emailReg.test(jQuery.trim($(this).val()))) {
            		var labelText = $(this).prev('label').text();
            		$(this).parent().append('<div class="styled-box iconed-box error">You entered an invalid '+labelText+'</div>');
            		$(this).addClass('inputError');
            		hasError = true;
            	}
            }
		});
		if(!hasError) {
			$('form#contact-form input.submit').fadeOut('normal', function() {
				$(this).parent().append('');
			});
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				$('form#contact-form').slideUp("fast", function() {
					$(this).before('<p class="styled-box iconed-box success">Your email was successfully sent. We will contact you as soon as possible.</p>');
				});
			});
		}

		return false;

	});
});

//SCROLL TO TOP----------------------------------------------------
$(document).ready(function(){

			// hide #back-top first
			$("#back-top").hide();
			
			// fade in #back-top
			$(function () {
				$(window).scroll(function () {
					if ($(this).scrollTop() > 100) {
						$('#back-top').fadeIn();
					} else {
						$('#back-top').fadeOut();
					}
				});

				// scroll body to 0px on click
				$('#back-top a').click(function () {
					$('body,html').animate({
						scrollTop: 0
					}, 600);
					return false;
				});
			});

		});
	



//BLACK & WHITE HOVER EFFECT--------------------------------------
$(window).load(function(){
    $('.bw-wrapper').BlackAndWhite({
        hoverEffect : true, // default true
        speed: { //this property could also be just speed: value for both fadeIn and fadeOut
            fadeIn: 200, // 200ms for fadeIn animations
            fadeOut: 300 // 800ms for fadeOut animations
        }
    });
});	
/*----------------------------------------------------*/
/*	Skill Bar Animation
/*----------------------------------------------------*/

		setTimeout(function(){

		$('.skill-bar .skill-bar-content').each(function() {
			var me = $(this);
			var perc = me.attr("data-percentage");

			var current_perc = 0;

			var progress = setInterval(function() {
				if (current_perc>=perc) {
					clearInterval(progress);
				} else {
					current_perc +=1;
					me.css('width', (current_perc)+'%');
				}

				me.text((current_perc)+'%');

			}, 8);

		});

	},8);

//CAROUSEL--------------------------------------------------------

(function($){
	$(document).ready(function(){

// Add classes for other carousels
var $carousel = $('.latest-work-jc, .latest-posts-jc, .testimonials-jc');

var scrollCount;

function adjustScrollCount() {
	if( $(window).width() < 768 ) {
		scrollCount = 1;
	} else {
		scrollCount = 1;
	}

}

function adjustCarouselHeight() {

	$carousel.each(function() {
		var $this    = $(this);
		var maxHeight = -1;
		$this.find('li').each(function() {
			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		});
		$this.height(maxHeight);
	});
}
function initCarousel() {
	adjustCarouselHeight();
	adjustScrollCount();
	var i = 0;
	var g = {};
	$carousel.each(function() {
		i++;

		var $this = $(this);
		g[i] = $this.jcarousel({
			animation           : 500,
			scroll              : scrollCount,
			wrap: 'circular'
		});
		$this.jcarousel('scroll', 0);
		 $this.prev().find('.jcarousel-prev').bind('active.jcarouselcontrol', function() {
			$(this).addClass('active');
		}).bind('inactive.jcarouselcontrol', function() {
			$(this).removeClass('active');
		}).jcarouselControl({
			target: '-='+scrollCount,
			carousel: g[i]
		});

		$this.prev().find('.jcarousel-next').bind('active.jcarouselcontrol', function() {
			$(this).addClass('active');
		}).bind('inactive.jcarouselcontrol', function() {
			$(this).removeClass('active');
		}).jcarouselControl({
			target: '+='+scrollCount,
			carousel: g[i]
		});

		$this.touchwipe({
		wipeLeft: function() {
			$this.jcarousel('scroll','+='+scrollCount);
		},
		wipeRight: function() {
			$this.jcarousel('scroll','-='+scrollCount);
		}
	});

	});
}
$(window).load(function(){
	initCarousel();
});

$(window).resize(function () {
	$carousel.each(function() {
		var $this = $(this);
		$this.jcarousel('destroy');
	});
	initCarousel();
});


});

})(this.jQuery);

/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 *
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function($){$.fn.touchwipe=function(settings){var config={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(settings)$.extend(config,settings);this.each(function(){var startX;var startY;var isMoving=false;function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);startX=null;isMoving=false}function onTouchMove(e){if(config.preventDefaultEvents){e.preventDefault()}if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;if(Math.abs(dx)>=config.min_move_x){cancelTouch();if(dx>0){config.wipeLeft()}else{config.wipeRight()}}else if(Math.abs(dy)>=config.min_move_y){cancelTouch();if(dy>0){config.wipeDown()}else{config.wipeUp()}}}}function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=true;this.addEventListener('touchmove',onTouchMove,false)}}if('ontouchstart'in document.documentElement){this.addEventListener('touchstart',onTouchStart,false)}});return this}})(jQuery);