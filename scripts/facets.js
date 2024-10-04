document.addEventListener("DOMContentLoaded", () => {
	const facetsForm = document.querySelector(".body__facets-form");
	const facetsButton = document.querySelector(".body__facets-button");
	const facetsCross = document.querySelector(".facets-form__cross");

	let scrollTop = 0;

	if (facetsForm) {
		facetsButton?.addEventListener("click", () => {
			facetsForm.classList.add("modal--opened");
			scrollTop = window.scrollY;
			toggleScroll(true, scrollTop);
		});
		facetsCross?.addEventListener("click", () => {
			facetsForm.classList.remove("modal--opened");
			toggleScroll(false, scrollTop);
		});
	}
});
