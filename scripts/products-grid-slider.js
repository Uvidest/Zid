const productGridSlider = new Swiper(".products-grid__slider", {
	slidesPerView: "auto",
	spaceBetween: 20,
	initialSlide: document.querySelectorAll(
		".products-grid__slider .swiper-slide",
	).length,
	pagination: {
		el: ".products-grid__slider .swiper-pagination",
	},
	navigation: {
		nextEl: ".products-grid__navigation-wrapper .swiper-button-next",
		prevEl: ".products-grid__navigation-wrapper .swiper-button-prev",
	},
});
