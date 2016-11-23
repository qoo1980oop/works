// JavaScript Document
function responsiveMenu() {	
	$('.menuTitle').click(function () {
		$('.menu').slideToggle("slow");
		$('.menu').css({"max-height":"800px"});
	});
};
$(function() {
	$(".menu").css({"display":"none","transition":"none","max-height":"inherit"});
	$("#toggleMenu").remove();
	responsiveMenu();
});
$(window).scroll(function() {
	if ($(window).scrollTop() >= 200) {
		$(".gotop").fadeIn();
	} else {
		$(".gotop").fadeOut();
	}
});
$(function() {
	$(".gotop").click(function() {
		$('html,body').animate({
			scrollTop: "0px"
		}, 500);
	});
});


