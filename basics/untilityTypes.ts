interface User {
	name: string;
	id: string;
	email?: string;
}

const override = (user: unknown, overrides: unknown): unknown => {};

/*
		This function should override chosen properties in the user array
*/
