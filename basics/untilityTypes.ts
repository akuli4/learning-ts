interface User {
	name: string;
	id: string;
	email?: string;
}

const override = (user: User, overrides: Partial<User>): User => {
	return {
		...user,
		...overrides,
	};
};

/*
		This function should override chosen properties in the user array
*/

console.log(
	override({ name: "Alan", id: "1" }, { id: "2", email: "asd@aasd.asd" })
);
