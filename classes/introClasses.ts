/*
		Build a noSql in-momery style database.
	Implements keyoword tells ts that a class is using specified interface.
	Member Visibility
		Private - accessible only within a given class
		Protected - parent and child classes can access it
		Public - available everywhere

*/

interface IDatabase {
	get(id: string): string;
	set(id: string, value: any): void;
}

interface IPersistable {
	saveToString(): string;
	restoreFromString(storedState: string): void;
}

class Database implements IDatabase {
	protected db: Record<string, string> = {};

	get(id: string): string {
		return this.db[id];
	}
	set<T>(id: string, value: T): void {
		this.db[id] = String(value);
	}
}

class Persistable extends Database implements IPersistable {
	saveToString(): string {
		return JSON.stringify(this.db);
	}
	restoreFromString(storedState: string): void {
		this.db = JSON.parse(storedState);
	}
}

const pers = new Persistable();
pers.set("foo", "bar");
pers.set("age", 2);
console.log(pers.saveToString());
