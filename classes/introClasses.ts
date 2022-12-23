/*
		Build a noSql in-momery style database.
*/

interface IDatabase {
	get(id: string): string;
	set(id: string, value: any): void;
}

/*
	IMplements keyoword tells ts that this class is using IDatabase interface.
*/

class Database implements IDatabase {
	private db: Record<string, string> = {};

	get(id: string): string {
		return this.db[id];
	}
	set<T>(id: string, value: T): void {
		this.db[id] = String(value);
	}
}

const test = new Database();
test.set("foo", "bar");

// There is an issue now, i can control db directly, private variables fix that behaviour.

test.db["foo"] = "asd";
console.log(test.get("foo"));

/*
			There are 3 different member visibility settings
				Private - accessible only within a given class
				Protected - parent and child classes can access it
				Public - available everywhere
*/
