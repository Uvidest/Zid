document.addEventListener("DOMContentLoaded", () => {
	const modalSlider = new Swiper(".quick-view-modal__product-slider", {
		slidesPerView: 1,
		initialSlide: document.querySelectorAll(
			".quick-view-modal__product-slider .swiper-slide",
		).length,
		pagination: {
			el: ".quick-view-modal__slider-wrapper .swiper-pagination",
		},
	});
});
