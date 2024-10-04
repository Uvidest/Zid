document.addEventListener("DOMContentLoaded", () => {
	const cartDrawer = document.querySelector(".cart-drawer");
	if (cartDrawer) {
		const cartDrawerCross = cartDrawer.querySelector(".cart-drawer__cross");
		const cartDrawerBackground = cartDrawer.querySelector(
			".cart-drawer__background",
		);

		const addToCartButtons = document.querySelectorAll(".add-to-cart");

		let scrollTop = 0;

		function openModal() {
			cartDrawer?.classList.add("modal--opened");
			scrollTop = window.scrollY;
			if (typeof toggleScroll == 'function')
				toggleScroll(scrollTop)
		}

		function closeModal() {
			cartDrawer?.classList.remove("modal--opened");
			if (typeof toggleScroll == 'function')
				toggleScroll(scrollTop);
		}

		addToCartButtons?.forEach((button) => {
			button?.addEventListener("click", () => {
				openModal();
			});
		});

		cartDrawerCross?.addEventListener("click", () => {
			closeModal();
		});
		cartDrawerBackground?.addEventListener("click", () => {
			closeModal();
		});
	}
});
