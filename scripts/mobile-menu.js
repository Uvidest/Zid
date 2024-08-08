document.addEventListener("DOMContentLoaded", () => {
	const mobileMenuButton = document.querySelector(
		".header__menu-button button",
	);
	const mobileMenu = document.querySelector(".header__mobile-menu");
	const mobileMenuCloseButton = document.querySelector(".title__cross");
	const mobileMenuBackground = document.querySelector(
		".mobile-menu__background",
	);

	mobileMenuButton?.addEventListener("click", () => {
		mobileMenu.classList.add("menu--opened");
	});

	mobileMenuCloseButton?.addEventListener("click", () => {
		mobileMenu.classList.remove("menu--opened");
	});

	mobileMenuBackground?.addEventListener("click", () => {
		mobileMenu.classList.remove("menu--opened");
	});
});
