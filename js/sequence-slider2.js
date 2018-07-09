var $ = jQuery.noConflict();

//SLIDER
$(document).ready(function(){
    var options = {
        nextButton: true,
        prevButton: true,
        animateStartingFrameIn: true,
		autoPlay: true,
        autoPlayDelay: 4000,
        preloader: true,
        pauseOnHover: false,
        preloadTheseFrames: [1],

    };
    
    var sequence = $("#sequence").sequence(options).data("sequence");


});
