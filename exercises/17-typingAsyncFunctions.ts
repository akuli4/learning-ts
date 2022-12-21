interface User {
	id: string;
	firstName: string;
	lastName: string;
}
/*
	First function passed should generate a string userId
	Second function will take that userId and return an object for User
*/
const createThenGetUser = async (
	createUser: () => Promise<string>,
	getUser: (id: string) => Promise<User>
): Promise<User> => {
	const userId: string = await createUser();

	const user = await getUser(userId);

	return user;
};

const user = createThenGetUser(
	async () => "a1kfsa2092a20k2mk",
	async (id) => ({
		id,
		firstName: "Luke",
		lastName: "Skywalker",
	})
).then((user) => console.log(user));
