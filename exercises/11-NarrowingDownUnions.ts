const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === "number") {
    return amount;
  }
  return amount.amount;
};

// "Should return the amount when passed an object"
// "Should return the amount when passed a number",

const a = coerceAmount(20);
const b = coerceAmount({ amount: 20 });

/*
	Narrowing down TS is especially useful for interfacing with external APIs.

		We let typescript know that the "else" return statement is always 
	returning an object value, whereas return inside if-statement is explicitly 
	looking for a number.
*/
