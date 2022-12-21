interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

const defaultUser: User = {
  id: 1,
  firstName: "Luke",
  lastName: "Skywalker",
  isAdmin: false,
};

const getUserId = (user: User) => {
  return user.id;
};

getUserId(defaultUser);
