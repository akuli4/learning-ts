export const simpleState = (val) => {
	let state = val;
	return [
		() => val,
		(newVal) => {
			state = newVal;
		},
	];
};

// Make so that this function takes any type and returns are typed accordingly.
