interface User {
  id: number;
  firstName: string;
  lastName: string;
  //   I need a selection of roles that i can choose from.
  role: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
