document.addEventListener("DOMContentLoaded", () => {
	const parametrWrappers = document.querySelectorAll(".list__parametr-wrapper");
	// biome-ignore lint/complexity/noForEach: <explanation>
	parametrWrappers.forEach((parametrWrapper) => {
		const parametr = parametrWrapper.querySelector(".list__parametr");
		const parametrDescriptionWrapper = parametrWrapper.querySelector(
			".list__parametr-description-wrapper",
		);
		const parametrDescription = parametrWrapper.querySelector(
			".list__parametr-description-wrapper>p",
		);
		parametr.addEventListener("click", () => {
			if (parametrWrapper.classList.toggle("parametr--opened")) {
				parametrDescriptionWrapper.style.maxHeight = `${parametrDescription.offsetHeight}px`;
			} else {
				parametrDescriptionWrapper.style.maxHeight = "0px";
			}
		});
	});
});
