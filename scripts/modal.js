document.addEventListener("DOMContentLoaded", () => {
	const modalWrapper = document.querySelector(".quick-view-modal");
	const modalCross = modalWrapper.querySelector(".quick-view-modal__cross");
	const modalBackground = modalWrapper.querySelector(
		".quick-view-modal__background",
	);

	let scrollTop = 0;

	const openModalButtons = document.querySelectorAll(".open-modal");

	function closeModal() {
		modalWrapper?.classList.remove("modal--opened");
		toggleScroll(scrollTop);
	}

	function openModal() {
		modalWrapper?.classList.add("modal--opened");
		scrollTop = window.scrollY;
		toggleScroll(scrollTop);
	}

	openModalButtons?.forEach((button) => {
		button?.addEventListener("click", () => {
			openModal();
		});
	});

	[modalCross, modalBackground].forEach((element) => {
		element.addEventListener('click', () => {
			closeModal();
		});
	});
});
