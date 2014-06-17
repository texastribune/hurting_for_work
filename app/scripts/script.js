$(function () {
	var $window = $(window),
		$stickyEl = $('#nav-bar'),
		$wrapperEl = $('.story-wrapper'),
		$headerEl = $('.header'),
		elTop = $wrapperEl.offset().top;
	$window.scroll(function () {
		$stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
		$headerEl.toggleClass('margin-top', $window.scrollTop() > elTop);
	});

});

$(document).ready(function() {
	$(".story-wrapper").fitVids();
	$('.flexslider').flexslider({
		slideshow: false,
		prevText: " ",
		nextText: " "
	});
    $('.flexslider').fitVids();
    
});