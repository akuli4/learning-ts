/*
		Ranker takes in a value and a rank function.
	Make so that this function uses generic typing.
*/

const ranker = (items, rank) => {
	const ranks = items.map((item) => ({
		item,
		rank: rank(item),
	}));
	ranks.sort((a, b) => b.rank - a.rank);

	return ranks.map((ranked) => ranked.item);
};
