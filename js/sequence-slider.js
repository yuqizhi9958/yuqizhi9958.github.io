var $ = jQuery.noConflict();

//SLIDER
$(document).ready(function(){
	//$status = $(".status");
    var options = {
        nextButton: true,
        prevButton: true,
        animateStartingFrameIn: true,
		autoPlay: true,
        autoPlayDelay: 4000,
        preloader: true,
        pauseOnHover: false,
        preloadTheseFrames: [1],
		preloadTheseImages: [
            "images/tn-model1-1.jpg",
            "images/tn-model2-1.jpg",
            "images/tn-model3-1.jpg"
        ]

    };
    
    var sequence = $("#sequence").sequence(options).data("sequence");
	
	    sequence.afterLoaded = function() {
        $("#sequence-theme .nav").fadeIn(100);
        $("#sequence-theme .nav li:nth-child("+(sequence.settings.startingFrameID)+") img").addClass("active");
    };

    sequence.beforeNextFrameAnimatesIn = function() {
        $("#sequence-theme .nav li:not(:nth-child("+(sequence.nextFrameID)+")) img").removeClass("active");
        $("#sequence-theme .nav li:nth-child("+(sequence.nextFrameID)+") img").addClass("active");
    };
    
    $("#sequence-theme").on("click", ".nav li", function() {
        $(this).children("img").removeClass("active").children("img").addClass("active");
        sequence.nextFrameID = $(this).index()+1;
        sequence.goTo(sequence.nextFrameID);
    });
	   /* sequence.afterNextFrameAnimatesIn = function() {
        if(sequence.settings.autoPlay && !sequence.hardPaused && !sequence.isPaused) {
            $status.addClass("active").css("opacity", 1);
        }
    };*/
   /* sequence.beforeCurrentFrameAnimatesOut = function() {
        if(sequence.settings.autoPlay && !sequence.hardPaused) {
            $status.css({"opacity": 0}, 500).removeClass("active");
        }
    };*/

});
