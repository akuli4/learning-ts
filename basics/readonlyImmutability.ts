/*
		Make cat readonly!!
	I dont want random people to rename my cat :(
*/
// 	Read only can be placed on a separate
// fields or we can make whole type be readonly.
interface Cat {
	name: string;
	breed: string;
}

const makeCat = (name: string, breed: string): Readonly<Cat> => {
	return {
		name,
		breed,
	};
};

const archi = makeCat("Archi", "Forgot");
archi.name = "This should not be possible";
