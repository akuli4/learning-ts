interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = (): IUser => {
  return {
    id: 0,
    firstName: "Darth",
    lastName: "Vader",
    role: "admin",
    posts: [
      {
        id: 2,
        title: "Where am I?",
      },
    ],
  };
};

const user = makeUser();

console.log({
  id: user.id,
  name: user.firstName,
  surname: user.lastName,
  role: user.role,
  posts: user.posts,
});
