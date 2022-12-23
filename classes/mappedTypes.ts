type Dog = {
	name: string;
	[K: string]: string | number;
};

const doggo: Dog = {
	name: "Tanuki",
	age: 2,
};

interface IDogInfo {
	name: string;
	age: number;
}
// T = IDogInfo, keyof T are its keys, P in = forEach
type DogOptionasFlags<T> = {
	[P in keyof T]: string;
};

type BoolDog = DogOptionasFlags<IDogInfo>;
