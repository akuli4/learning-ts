interface IUser {
	id: number;
	firstName: string;
	lastName: string;
}

// Construct a new type containing only first- and last names

// #1
type FirstSolution = Pick<IUser, "firstName" | "lastName">;

// #2
type SecondSolution = Omit<IUser, "id">;

const a: FirstSolution = {
	firstName: "First",
	lastName: "Last",
};
const b: SecondSolution = {
	firstName: "First",
	lastName: "Last",
};
