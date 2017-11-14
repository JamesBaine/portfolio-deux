"use strict";

$("#nav-projects").on("click", () => {
	$("html, body").animate({
		scrollTop: $("#projects").offset().top
	}, 1000);
});
