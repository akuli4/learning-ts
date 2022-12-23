/*
	instead of this.age: number = age
	u can do this cosntructor(public age: number)
*/

class Dog {
	constructor(public readonly name: string, public readonly age: number) {}
}

const Tanuki = new Dog("Tanuki", 20);
console.log(Tanuki); // Dog { name: "Tanuki", age: 20 }
