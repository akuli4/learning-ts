type Pokemon = {
	name: string;
	type: string;
	hp: number;
	level: number;
	abilities?: string;
};

type Listeners<T> = {
	[K in keyof T as `on${Capitalize<K & string>}Change`]?: () => void;
};

function pokemonFight<T>(obj: T, listeners?: Listeners<T>): void {}

const pikachu: Pokemon = {
	name: "Pikachu",
	type: "Electricity",
	hp: 20,
	level: 12,
	abilities: "Sleep",
};

pokemonFight(pikachu, {
	onHpChange: () => {},
});

console.log(pikachu);
