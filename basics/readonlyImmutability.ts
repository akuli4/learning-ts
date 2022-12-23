/*
		Make cat readonly!!
	I dont want random people to rename my cat :(
*/

interface Cat {
	name: string;
	breed: string;
}

const makeCat = (name: string, breed: string): Cat => {
	return {
		name,
		breed,
	};
};

const archi = makeCat("Archi", "Forgot");
archi.name = "This should not be possible";
