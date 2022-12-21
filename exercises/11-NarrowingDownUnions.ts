const coerceAmount = (amount: number | { amount: number }) => {};

// "Should return the amount when passed an object"
// "Should return the amount when passed a number",

const a = coerceAmount(20);
// a === 20 - FAILS
