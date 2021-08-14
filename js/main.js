$(function () {

	$('.header-slider').slick({
		infinite: true,
		slideToShow: 1,
		slideToScroll: 1,
		arrows: false,
		vertical: true,
		dots: true,
		dotsClass: 'header-dots',
		// autoplay: 9000,
		// responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 			slidesToShow: 3,
		// 			slidesToScroll: 3,
		// 			infinite: true,
		// 			dots: true
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 600,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 2
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1
		// 		}
		// 	}
	});

	$('.menu__btn').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.menu__list').slideToggle();
	});

});