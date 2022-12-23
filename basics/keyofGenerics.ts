/*
		This function takes an array of objects and a key.
	It will return a new array filled with values extracted from that passed array.

	Type this function using keyof.
*/

function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
	return items.map((item) => item[key]);
}

interface Animal {
	name: string;
	age: number;
}

const animals: Array<Animal> = [
	{
		name: "Zebra",
		age: 12,
	},
	{
		name: "Giraffe",
		age: 10,
	},
	{
		name: "Cat",
		age: 3,
	},
];

console.log(pluck(animals, "name"));
