type Dog = {
	name: string;
	[K: string]: string | number;
};

const doggo: Dog = {
	name: "Tanuki",
	age: 2,
};
