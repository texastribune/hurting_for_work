$(function () {
	var $window = $(window),
		$stickyEl = $('#nav-bar'),
		$wrapperEl = $('.story-wrapper'),
		$headerEl = $('.header'),
		$inactiveEl = $('.inactive'),
		elTop = $wrapperEl.offset().top;
	$window.scroll(function () {
		$stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
		$inactiveEl.toggleClass('inactive', $window.scrollTop() < elTop).addClass('sticky_inactive', $window.scrollTop() < elTop);
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
    $('.read-more').addClass('hide');

	// Set up the toggle.
	$('.read-more-toggle').on('click', function() {
	  $('.read-more').toggleClass('hide');
	  $('.read-more-toggle').toggleClass('hide');
	});
});
