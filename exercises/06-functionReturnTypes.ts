// Make sure that createUser always reaturns a user object.

interface IUser {
  id: number;
}

const createUser = (id: number): IUser => {
  return {
    id,
  };
};

const user = createUser(1);

console.log(user.id);
