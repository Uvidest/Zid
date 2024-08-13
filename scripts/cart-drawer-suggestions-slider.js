document.addEventListener("DOMContentLoaded", () => {
	const suggestionsSlider = new Swiper(
		".cart-body__suggested-products-slider",
		{
			slidesPerView: "auto",
			spaceBetween: 20,
			initialSlide: document.querySelectorAll(
				".cart-body__suggested-products-slider .swiper-slide",
			).length,
			pagination: {
				el: ".cart-body__suggested-products-slider-wrapper .swiper-pagination",
			},
		},
	);
});
