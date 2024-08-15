document.addEventListener("DOMContentLoaded", () => {
	const countPickerWrappers = document.querySelectorAll(
		".count-picker",
	);

	countPickerWrappers?.forEach((countPickerWrapper) => {
		const countPicker = countPickerWrapper.querySelector('input[type="number"]');
		const minus = countPickerWrapper.querySelector(".count-picker__minus");
		const plus = countPickerWrapper.querySelector(".count-picker__plus");

		minus?.addEventListener("click", () => {
			if (countPicker.value > 1) {
				countPicker.value -= 1;
			}
		});
		plus?.addEventListener("click", () => {
			if (countPicker.value < 999) {
				countPicker.value = +countPicker.value + 1;
			}
		});

		countPicker?.addEventListener("input", () => {
			if (countPicker.value <= 1) {
				countPicker.value = 1;
			}
			if (countPicker.value >= 999) {
				countPicker.value = 999;
			}
		});
	});

});
