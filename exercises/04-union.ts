interface User {
  id: number;
  firstName: string;
  lastName: string;
  //   I need a selection of roles that i can choose from.
  role: "user" | "editor" | "admin";
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
};
