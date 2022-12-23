/*
		This function takes an array of objects and a key.
	It will return a new array filled with values extracted from that passed array.

	Type this function using keyof.
*/

function pluck(items: unknown[], key: string): unknown[] {
	return items.map((item) => item[key]);
}
