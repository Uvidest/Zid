document.addEventListener("DOMContentLoaded", () => {
	const parameterWrappers = document.querySelectorAll(".list__parameter-wrapper");
	parameterWrappers.forEach((parameterWrapper) => {
		const parameter = parameterWrapper.querySelector(".list__parameter--mobile");
		const parameterDescriptionWrapper = parameterWrapper.querySelector(
			".list__parameter-description-wrapper",
		);
		const parameterDescription = parameterWrapper.querySelector(
			".list__parameter-description-wrapper>p",
		);
		if (parameterDescriptionWrapper && parameterDescription)
			parameter?.addEventListener("click", () => {
				if (parameterWrapper.classList.toggle("parameter--opened")) {
					parameterDescriptionWrapper.style.maxHeight = `${parameterDescription.offsetHeight}px`;
				} else {
					parameterDescriptionWrapper.style.maxHeight = "0px";
				}
			});
	});
});
