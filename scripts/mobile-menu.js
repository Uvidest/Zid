document.addEventListener("DOMContentLoaded", () => {
	const mobileMenuButton = document.querySelector(
		".header__menu-button button",
	);
	const mobileMenu = document.querySelector(".header__mobile-menu");
	const mobileMenuCloseButton = document.querySelector(".title__cross");
	const mobileMenuBackground = document.querySelector(
		".mobile-menu__background",
	);

	let scrollTop = 0

	mobileMenuButton?.addEventListener("click", () => {
		mobileMenu.classList.add("modal--opened");
		scrollTop = window.scrollY;
		if (typeof toggleScroll == 'function')
			toggleScroll(scrollTop)
	});

	[mobileMenuCloseButton, mobileMenuBackground].forEach(element => {
		element.addEventListener('click', () => {
			mobileMenu.classList.remove("modal--opened");
			if (typeof toggleScroll == 'function')
				toggleScroll(scrollTop);
		});
	})
});
