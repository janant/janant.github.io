$(document).ready(function() {
	$(window).on("resize", function() {
		$(".category").each(function( index ) {
			$(this).height($(this).width());
		});
	}).trigger("resize");
});