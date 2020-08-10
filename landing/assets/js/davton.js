//*
//
// Davton JS
// Author: Antonio Okoro
// Author URL: cheezytony.github.io/resume
//
//

function listen (...args) {
	return $('body').on(...args);
}

function live (...args) {
	return $(window).on(...args);
}

$.fn.scrollbar = function (target) {
	this.get(0).scrollTrack = this.scrollTrack = this.find('.scroll-slider-track').get(0);
	this.get(0).scrollThumb = this.scrollThumb = this.find('.scroll-slider-thumb').get(0);
	this.get(0).scrollTarget = this.scrollTarget = $(target).get(0);

	live('resize load', () => {

		var windowWidth = $(this.scrollTarget).outerWidth();
		var scrollWidth = this.scrollTarget.scrollWidth;

		$(this.scrollThumb).css({
			width: (windowWidth / scrollWidth * 100) + '%'
		});

	});

	$(this.scrollTarget).on('scroll resize', (event) => {
		console.log($(this.scrollThumb).width());
		var windowWidth = $(this.scrollTarget).outerWidth();
		var scrollWidth = this.scrollTarget.scrollWidth;

		var scrollX = this.scrollTarget.scrollLeft;
		var clientWidth = this.scrollTarget.clientWidth;

		$(this.scrollThumb).css({
			left: ((scrollX / clientWidth * 100)) + '%',
			width: (windowWidth / scrollWidth * 100) + '%'
		});
	});

}

$(() => {

	$('body').on('focus blur', '.input-group .form-control, .input-group .custom-select', function (event) {
		var group = $(this).closest('.input-group');
		console.log(group);
		if (event.type.match(/in/)) {
			group.addClass('input-group-focus');
		}else if (event.type.match(/out/)) {
			group.removeClass('input-group-focus');
		}
	});

	$('.scroll-slider').each(function (index, element) {
		$(element).scrollbar($(element).data('target'));
	});

	var lastScrollTop = 0,
	scrollTop,
	scrollDif,
	support = $(".support");

	live('scroll load', () => {
		if ($(window).scrollTop() > $('.navbar').outerHeight()) {
			$('.navbar').addClass('sticky');
		}else {
			$('.navbar').removeClass('sticky');
		}

		scrollTop = $(window).scrollTop();

		// if (scrollTop > lastScrollTop) {
		// 	// Going Down
		// 	support.addClass('show');
			
		// }else {
		// 	// Going Up
		// 	support.removeClass('show');
		// }


		lastScrollTop = scrollTop
	});

	listen('mouseenter', '.pricing-table', function () {
		$(this).addClass('pricing-table-special').siblings().removeClass('pricing-table-special');
	});

});