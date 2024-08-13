document.addEventListener("DOMContentLoaded", () => {
	const cartDrawer = document.querySelector(".cart-drawer");
	const cartDrawerCross = cartDrawer.querySelector(".cart-drawer__cross");
	const cartDrawerBackground = cartDrawer.querySelector(
		".cart-drawer__background",
	);
	const addToCartButtons = document.querySelectorAll(".add-to-cart");

	function closeModal() {
		cartDrawer?.classList.remove("cart--opened");
	}

	function openModal() {
		cartDrawer?.classList.add("cart--opened");
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
});
