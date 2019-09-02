$(document).ready(function() {
  $('div.caption').each(function(index) {
    if ($(this).css("-webkit-backdrop-filter") == null) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        $(this).css({"background-color": "#3E3E3E"});
      } else {
        $(this).css({"background-color": "#E6E6E2"});
      }
  	}
  })
})
