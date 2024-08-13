document.addEventListener("DOMContentLoaded", () => {
	const modalWrapper = document.querySelector(".quick-view-modal");
	const modalCross = modalWrapper.querySelector(".quick-view-modal__cross");
	const modalBackground = modalWrapper.querySelector(
		".quick-view-modal__background",
	);
	const openModalButtons = document.querySelectorAll(".open-modal");

	function closeModal() {
		modalWrapper?.classList.remove("modal--opened");
	}

	function openModal() {
		modalWrapper?.classList.add("modal--opened");
	}

	openModalButtons?.forEach((button) => {
		button?.addEventListener("click", () => {
			openModal();
		});
	});

	modalCross?.addEventListener("click", () => {
		closeModal();
	});
	modalBackground?.addEventListener("click", () => {
		closeModal();
	});
});
