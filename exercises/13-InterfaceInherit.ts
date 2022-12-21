// Extend every interface to use recurring fields
interface IBase {
	id: string;
}
interface IUser extends IBase {
	firstName: string;
	lastName: string;
}

interface IPost extends IBase {
	title: string;
	body: string;
}

interface IComment extends IBase {
	comment: string;
}

const comment: IComment = {
	id: "2",
	comment: "Some comment",
};
