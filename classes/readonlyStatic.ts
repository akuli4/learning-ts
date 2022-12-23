/*
	instead of this.age: number = age
	u can do this cosntructor(public age: number)
*/
class Dog {
	constructor(public readonly name: string, public readonly age: number) {}
}

class Dolmatain extends Dog {
	public readonly breed = "Dolmatain";
	constructor(public readonly name: string, public readonly age: number) {
		super(name, age);
	}
}

const Tanuki = new Dolmatain("Tanuki", 20);
console.log(Tanuki); // Dog { name: "Tanuki", age: 20 }

// Singleton (can be instantiated only once)
class DogList {
	private dogs: Dog[] = [];

	static instance: DogList = new DogList();
	// Class is self instantiated, but one can still access the constructor.
	// Make it private to avoid this behaviour
	private constructor() {}

	public addDog(dog: Dog) {
		this.dogs.push(dog);
	}
}

DogList.instance;

const cantDoThat = new DogList();

const norm = {};
const norm1 = {};
