/*
		This function takes in a string and compares it to three different types
	of loading state.
*/

// If u wont provide string values each key will be given a number value starting at 0.

enum Loading {
	preparing = "preparing",
	loading = "loading",
	done = "done",
}

const isLoading = (state: Loading): boolean => {
	return state === (Loading.loading || Loading.preparing);
};

console.log(isLoading(Loading.loading));

// Literals
const rollDice = (dice: 1 | 2 | 3): number => {
	let pip = 0;
	for (let i = 0; i < dice; i++) {
		pip += Number((Math.random() * 5 + 1).toFixed());
	}
	return pip;
};

// Not allowed
console.log(rollDice(5));
