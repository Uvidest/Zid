document.addEventListener("DOMContentLoaded", () => {
	const facetsForm = document.querySelector(".body__facets-form");
	const facetsButton = document.querySelector(".body__facets-button");
	const facetsCross = document.querySelector(".facets-form__cross");

	if (facetsForm) {
		facetsButton?.addEventListener("click", () => {
			facetsForm.classList.add("facets--opened");
		});
		facetsCross?.addEventListener("click", () => {
			facetsForm.classList.remove("facets--opened");
		});
	}
});
