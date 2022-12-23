const getCursorCoordinates = (): readonly [number, number, number] => {
	return [
		Number((Math.random() * 10).toFixed()), // X
		Number((Math.random() * 10).toFixed()), // Y
		Number((Math.random() * 10).toFixed()), // Z
	];
};

const cursor = getCursorCoordinates();

cursor[0] = 20; // This should not be possible
