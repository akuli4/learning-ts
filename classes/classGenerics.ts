/*
		Implement generics on Persistable class.
*/

interface IDatabase {
	set(key: string, value: unknown): void;
	get(key: string): string;
}
interface IPersistable {
	saveToString(): string;
	restoreFromString(storedState: string): void;
}

abstract class Database implements IDatabase {
	protected db: Record<string, string> = {};
	set(key: string, value: unknown): void {}
	get(key: string): string {
		return this.db[key];
	}
}

class PersistableDB extends Database implements IPersistable {
	saveToString(): string {
		return JSON.stringify(this.db);
	}
	restoreFromString(storedState: string): void {
		this.db = JSON.parse(storedState);
	}
}
