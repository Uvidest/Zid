document.addEventListener("DOMContentLoaded", () => {
	const beforeAfterButton = document.querySelector(".before-after__button");
	const beforeAfterWrapper = document.querySelector(".before-after__wrapper");
	const beforeElement = document.querySelector(".before-after__before");

	if (beforeAfterButton && beforeAfterWrapper && beforeElement) {
		let initialX = 0;
		beforeElement.style.width = "40%";
		const listener = (event) => {
			const distance = beforeAfterWrapper.clientWidth;
			const max = distance - 15;
			const min = 15;
			const mouseX = Math.max(
				min,
				Math.min(
					event.type === "touchmove"
						? event.touches[0].clientX
						: event.clientX - beforeAfterWrapper.offsetLeft - initialX,
					max,
				),
			);
			const mousePersent = (mouseX * 100) / distance;
			beforeElement.style.width = `${mousePersent}%`;
			beforeAfterButton.style.left = `${mousePersent}%`;
		};
		beforeAfterButton.addEventListener("mousedown", (event) => {
			document.addEventListener("mousemove", listener);
			initialX = event.offsetX;
		});
		document.addEventListener("mouseup", () => {
			document.removeEventListener("mousemove", listener);
		});
		beforeAfterButton.addEventListener("touchstart", (event) => {
			document.addEventListener("touchmove", listener);
			initialX = event.touches[0].offsetX;
		});
		document.addEventListener("touchend", () => {
			document.removeEventListener("touchmove", listener);
		});
	}
});
