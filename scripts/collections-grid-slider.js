document.addEventListener("DOMContentLoaded", () => {
	const collectionGridSlider = new Swiper(".collections-grid__slider", {
		slidesPerView: "auto",
		spaceBetween: 20,
		initialSlide: document.querySelectorAll(
			".collections-grid__slider .swiper-slide",
		).length,
		pagination: {
			el: ".collections-grid__slider .swiper-pagination",
		},
		navigation: {
			nextEl: ".collections-grid__navigation-wrapper .swiper-button-next",
			prevEl: ".collections-grid__navigation-wrapper .swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: "auto",
				spaceBetween: 15,
			},
			1: {
				slidesPerView: 1,
			},
		},
	});
});
