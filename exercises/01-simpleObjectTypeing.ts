export const addTwoNumbers = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

// OR
interface IParams {
  first: number;
  second: number;
}

export const addTwoNumbers1 = (params: IParams) => {
  return params.first + params.second;
};

// OR use Types, but Interfaces are better suited for objects.
type TParams = {
  first: number;
  second: number;
};
