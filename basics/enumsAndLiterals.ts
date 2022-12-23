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
