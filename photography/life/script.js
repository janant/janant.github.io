function highlightButton(button) {
	var facebook = document.getElementById("facebook");
	var twitter = document.getElementById("twitter");
	var github = document.getElementById("github");
	var linkedin = document.getElementById("linkedin");
	var instagram = document.getElementById("instagram");
	
	var allButtons = [facebook, twitter, github, linkedin, instagram];
					
	for (var i = 0; i < allButtons.length; i++) {
		if (button.id != allButtons[i].id) {
			allButtons[i].style["opacity"] = "0.5";
			allButtons[i].style["-webkit-transition"] = "opacity 0.3s";
		}
	}
	
	button.style["opacity"] = "1.0";
	button.style["-webkit-transition"] = "opacity 0.3s";
}

function unhighlightAllButtons() {
	var facebook = document.getElementById("facebook");
	var twitter = document.getElementById("twitter");
	var github = document.getElementById("github");
	var linkedin = document.getElementById("linkedin");
	var instagram = document.getElementById("instagram");
	
	var allButtons = [facebook, twitter, github, linkedin, instagram];
					
	for (var i = 0; i < allButtons.length; i++) {
		allButtons[i].style["opacity"] = "0.5";
		allButtons[i].style["-webkit-transition"] = "opacity 0.3s";
	}
}

function highlightAllButtons() {
	var facebook = document.getElementById("facebook");
	var twitter = document.getElementById("twitter");
	var github = document.getElementById("github");
	var linkedin = document.getElementById("linkedin");
	var instagram = document.getElementById("instagram");
	
	var allButtons = [facebook, twitter, github, linkedin, instagram];
	
	for (var i = 0; i < allButtons.length; i++) {
		allButtons[i].style["opacity"] = "1.0";
		allButtons[i].style["-webkit-transition"] = "opacity 0.3s";
	}
}

$(document).ready(function() {
	if ($("div#header").css("-webkit-backdrop-filter") == null) {
		$("div#header").css({"background-color": "rgba(255, 255, 255, 0.99)"});
	}
	
	$(window).on("scroll", function() {
		if ($(window).scrollTop() > 3) {
			$("div#header").css({"box-shadow": "0px 1px 1px #EEEEEE"});
		}
		else {
			$("div#header").css({"box-shadow": "initial"});
		}
	});
	
	$(window).on("resize", function() {
		$(".category").each(function( index ) {
			$(this).height($(this).width());
		});
	}).trigger("resize");
});