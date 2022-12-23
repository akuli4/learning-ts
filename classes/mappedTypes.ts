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
	breed: string;
}
// T = IDogInfo, keyof T are its keys, P in = forEach
type DogOptionasFlags<T> = {
	[P in keyof T]: string;
};

type BoolDog = DogOptionasFlags<IDogInfo>;

// example usage

const listenToObj = <T>(obj: T, listeners: Listeners<T>): void => {
	throw "Needs to be implemented.";
};

const myDog: IDogInfo = {
	name: "Tanuki",
	age: 13,
	breed: "asd",
};

// How to type those listeners?
type Listeners<T> = {
	[K in keyof T as `on${Capitalize<K & string>}Change`]?: (
		newValue: T[K]
	) => void;
} & {
	[K in keyof T as `on${Capitalize<K & string>}Delete`]?: () => void;
};

listenToObj(myDog, {
	onAgeChange: (v: number) => {},
});
