$(document).ready(function() {
	$(window).on("resize", function() {
		$(".categoryLeft").each(function( index ) {
			$(this).height($(this).width());
		});
		$(".categoryRight").each(function( index ) {
			$(this).height($(this).width());
		});
	}).trigger("resize");
});