// Make sure to include Tiny Rick as soon as your page is loaded.
var includeTinyRick = function() {
	$("body").append("<img src='tiny_rick.gif' width='350px' height='330px' style='position: fixed; bottom: -350px; right: 20%;' id='tinyrick'>");
};

var playTinyRickAudio = function() {
	$(".tinyrick-audio").remove();
	setTimeout(function() {
		$("body").append("<embed src='tiny_rick_audio.m4a' autoplay='true' height='0' width='0' class='tinyrick-audio'>");
	}, 500);
};

var hideTinyRick = function() {
	$("#tinyrick").animate({bottom: '-350'}, 1000);
};

var showTinyRick = function() {
	$("#tinyrick").animate({bottom: '0'}, 1000);
};

// Implement the tinyRickPopup function in your event listener.
var tinyRickPopup = function() {
	showTinyRick();
	playTinyRickAudio();
	setTimeout(function() {
		hideTinyRick();
	}, 2000);
};

// Optional event-listener for button.
var tinyRickButton = function() {
	// Create a button with a 'tinyrick-button' id.
	$("#tinyrick-button").on("click", function() {
		tinyRickPopup();
	});
};