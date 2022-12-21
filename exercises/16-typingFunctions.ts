/**
 * How do we type onFocusChange?
 */
// A function type can be decalred this way
// type = () => return type

type FocusListener = (isFocused: boolean) => void;

const addListener = (onFocusChange: FocusListener) => {
	window.addEventListener("focus", () => {
		onFocusChange(true);
	});

	window.addEventListener("blur", () => {
		onFocusChange(false);
	});
};

addListener((isFocused) => {
	console.log({ isFocused });
});
