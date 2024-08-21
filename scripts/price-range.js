document.addEventListener("DOMContentLoaded", () => {
	const sliderMin = document.querySelector(".range-slider__min");
	const sliderMax = document.querySelector(".range-slider__max");
	const inputMin = document.querySelector("#range_input_min");
	const inputMax = document.querySelector("#range_input_max");
	const minGap = 5.0;
	setSliderValue("min");
	setSliderValue("max");

	sliderMin?.addEventListener("input", () => {
		setSliderValue("min", minGap);
	});
	sliderMax?.addEventListener("input", () => {
		setSliderValue("max", minGap);
	});

	inputMin?.addEventListener("blur", () => {
		setInputValue("min", minGap);
	});
	inputMax?.addEventListener("blur", () => {
		setInputValue("max", minGap);
	});

	function setSliderValue(value, minGap) {
		if (sliderMin && sliderMax && inputMin && inputMax) {
			if (value == "min") {
				if (parseInt(sliderMax.value) - parseInt(sliderMin.value) <= minGap) {
					sliderMin.value = parseInt(sliderMax.value) - minGap;
				}
				inputMin.value = sliderMin.value;
			} else if (value == "max") {
				if (parseInt(sliderMax.value) - parseInt(sliderMin.value) <= minGap) {
					sliderMax.value = parseInt(sliderMin.value) + minGap;
				}
				inputMax.value = sliderMax.value;
			}
			fillColor();
		}
	}

	function setInputValue(value, minGap) {
		if (sliderMin && sliderMax && inputMin && inputMax) {
			if ((value = "min")) {
				if (parseInt(inputMax.value) - parseInt(inputMin.value) <= minGap) {
					inputMin.value = parseInt(inputMax.value) - minGap;
				}
				sliderMin.value = inputMin.value;
			} else if ((value = "max")) {
				if (parseInt(inputMax.value) - parseInt(inputMin.value) <= minGap) {
					inputMax.value = parseInt(inputMin.value) + minGap;
				}
				sliderMax.value = inputMax.value;
			}
			fillColor();
		}
	}

	function fillColor() {
		const activeTrack = document.querySelector(
			".range-slider__slider-track--active",
		);
		const slidersMaxValue = sliderMin.max;
		const percentLeft = (sliderMin.value / slidersMaxValue) * 100;
		const percentRight = 100 - (sliderMax.value / slidersMaxValue) * 100;
		if (activeTrack) {
			activeTrack.style.left = `${percentLeft}%`;
			activeTrack.style.right = `${percentRight}%`;
		}
	}
});
