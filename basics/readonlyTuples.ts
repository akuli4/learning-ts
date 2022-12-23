const getCursorCoordinates = (): readonly [number, number, number] => {
	return [
		Number((Math.random() * 10).toFixed()), // X
		Number((Math.random() * 10).toFixed()), // Y
		Number((Math.random() * 10).toFixed()), // Z
	];
};

const cursor = getCursorCoordinates();

cursor[0] = 20; // This should not be possible

// Can also be done this way
const randomData = [{ name: "name", email: "email" }] as const;

randomData[0] = "something"; // TypeScript is crying here
randomData[0].name = "something"; // TypeScript is crying here

// randomData array is now immutable
