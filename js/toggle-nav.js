/*nav-togglejs*/

$(function() {
	$("#nav-toggle").click(function() {
		if($("#nav-list").is(":visible")) {
			$("#nav-list").slideUp();
		} else {
			$("#nav-list").slideDown();
		}
	});
});