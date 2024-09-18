document.addEventListener("DOMContentLoaded", () => {
	const presentationSlider = new Swiper(".presentation-body__slider", {
		slidesPerView: "auto",
		spaceBetween: 20,
		initialSlide: document.querySelectorAll(
			".presentation-body__slider .swiper-slide",
		).length,
		pagination: {
			el: ".presentation-body__slider .swiper-pagination",
			clickable: true
		},
	});

	const dots = document.querySelectorAll(
		".products-presentation__presentation-body .layout__dot",
	);
	let dotLastIndex = -1;
	dots.forEach((dot) => {
		const index = dot.getAttribute("data-dot-index");
		if (presentationSlider.activeIndex == index) {
			dot.classList.add("checked");
			dotLastIndex = index;
		}
		dot.addEventListener("mouseover", () => {
			presentationSlider.slideTo(index, 700);
			dots[dotLastIndex]?.classList.remove("checked");
			dotLastIndex = index;
			dot.classList.add("checked");
		});
	});
	presentationSlider.on("slideChange", () => {
		dots.forEach((dot) => {
			const index = dot.getAttribute("data-dot-index");
			if (index == presentationSlider.activeIndex) {
				dot?.classList.add("checked");
				dots[dotLastIndex]?.classList.remove("checked");
				dotLastIndex = index;
			}
		});
	});
});
