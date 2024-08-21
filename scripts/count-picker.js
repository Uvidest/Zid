document.addEventListener("DOMContentLoaded", () => {
	const countPickerWrappers = document.querySelectorAll(
		"[data-count-picker]",
	);

	countPickerWrappers.forEach((countPickerWrapper) => {
		const countPicker = countPickerWrapper.querySelector('input[type="number"]');
		const minus = countPickerWrapper.querySelector(".count-picker__minus");
		const plus = countPickerWrapper.querySelector(".count-picker__plus");

		function changeCount(button = null) {
			if (button) {
				if (button.className === 'count-picker__plus') {
					countPicker.value = +countPicker.value + 1;
				}
				else if (button.className === 'count-picker__minus') {
					countPicker.value -= 1;
				}
			}
			if (countPicker.value < 1) {
				countPicker.value = 1;
			}
			if (countPicker.value > 999) {
				countPicker.value = 999;
			}
		}

		[minus, plus].forEach(button => button.addEventListener('click', () => { changeCount(button) }));

		countPicker?.addEventListener("input", () => { changeCount() });
	});

});
