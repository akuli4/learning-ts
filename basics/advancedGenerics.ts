/*
		Ranker takes in a value and a rank function.
	Make so that this function uses generic typing.
*/
interface RankedItems<TItem> {
	item: TItem;
	rank: number;
}

const ranker = <TItem>(
	items: Array<TItem>,
	rank: (v: TItem) => number
): Array<TItem> => {
	const ranks: RankedItems<TItem>[] = items.map((item) => ({
		item,
		rank: rank(item),
	}));
	ranks.sort((a, b) => b.rank - a.rank);

	return ranks.map((ranked) => ranked.item);
};

interface Pokemon {
	name: string;
	hp: number;
}

const pokemons: Array<Pokemon> = [
	{
		name: "Pikachu",
		hp: 100,
	},
	{
		name: "Bulbasaur",
		hp: 90,
	},
	{
		name: "Charizard",
		hp: 102,
	},
];

const ranked_pokemons = ranker(pokemons, (v) => v.hp);

console.log(ranked_pokemons);
