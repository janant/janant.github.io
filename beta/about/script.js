$(document).ready(function() {
  $('div.aboutMeCaption').each(function(index) {
    if ($(this).css("-webkit-backdrop-filter") == null) {
  		$(this).css({"background-color": "rgba(240, 240, 240, 0.95)"});
  	}
  })
})
