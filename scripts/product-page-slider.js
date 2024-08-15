const thubmsSlider = new Swiper(".product-slider__thumbs-slider", {
	spaceBetween: 20,
	slidesPerView: "auto",
	direction: "vertical",
	navigation: {
		prevEl: ".thumbs-slider__swiper-button--prev",
		nextEl: ".thumbs-slider__swiper-button--next",
	},
});
const mainSlider = new Swiper(".hero-product__product-slider", {
	spaceBetween: 15,
	slidesPerView: 1.1,
	initialSlide: document.querySelectorAll(
		".hero-product__product-slider .swiper-slide",
	).length,
	thumbs: {
		swiper: thubmsSlider,
	},
	pagination: {
		el: ".hero-product__slider-wrapper .swiper-pagination",
	},
	breakpoints: {
		1: {

		},
		768: {
			spaceBetween: 20,
			slidesPerView: 1,
		},
	},
});
