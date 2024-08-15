document.addEventListener("DOMContentLoaded", () => {
	const categoriesSlider = new Swiper(".categories__slider", {
		slidesPerView: "auto",
		spaceBetween: 20,
		initialSlide: document.querySelectorAll(".categories__slider .swiper-slide")
			.length,
		navigation: {
			nextEl: ".categories__navigation-wrapper .swiper-button-next",
			prevEl: ".categories__navigation-wrapper .swiper-button-prev",
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
