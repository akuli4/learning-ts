export function simpleState<T>(val: T): [() => T, (newVal: T) => void] {
	let state: T = val;
	return [
		() => val,
		(newVal: T) => {
			state = newVal;
		},
	];
}

// Make so that this function takes any type and returns are typed accordingly.

const [state, setState] = simpleState<number | undefined>(undefined);
setState(2);
