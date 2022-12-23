/*
		Implement generics on Persistable class.
*/

interface IDatabase<T> {
	set(key: string, value: T): void;
	get(key: string): T;
}
interface IPersistable {
	saveToString(): string;
	restoreFromString(storedState: string): void;
}

abstract class Database<T> implements IDatabase<T> {
	protected db: Record<string, T> = {};
	set(key: string, value: T): void {
		this.db[key] = value;
	}
	get(key: string): T {
		return this.db[key];
	}
}

class PersistableDB<T> extends Database<T> implements IPersistable {
	saveToString(): string {
		return JSON.stringify(this.db);
	}
	restoreFromString(storedState: string): void {
		this.db = JSON.parse(storedState);
	}
}

const db = new PersistableDB<number>();
db.set("foo", 10);
console.log(db.get("foo"));
