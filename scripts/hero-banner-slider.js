document.addEventListener("DOMContentLoaded", () => {
	const heroBannerSlider = new Swiper(".hero-banner__slider", {
		slidesPerView: 1,
		spaceBetween: 20,
		initialSlide: document.querySelectorAll(
			".hero-banner__slider .swiper-slide",
		).length,
		pagination: {
			el: ".hero-banner__slider .swiper-pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".hero-banner__navigation-wrapper .swiper-button-next",
			prevEl: ".hero-banner__navigation-wrapper .swiper-button-prev",
		},
		breakpoints: {
			1: {
				spaceBetween: 15,
			},
			768: {
				spaceBetween: 20,
			},
		},
	});
});
