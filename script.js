$(document).ready(function() {
  $('div.caption').each(function(index) {
    if ($(this).css("-webkit-backdrop-filter") == null) {
  		$(this).css({"background-color": "#E6E6E2"});
  	}
  })
})
