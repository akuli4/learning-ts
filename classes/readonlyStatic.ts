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
