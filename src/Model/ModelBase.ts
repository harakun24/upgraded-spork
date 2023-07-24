import { Database } from "bun:sqlite";

export default abstract class ModelBase {
    abstract name: string | undefined;
    db: Database;
    abstract schema: unknown;
    constructor(db: Database) {
        this.db = db;
    }
    init() {
        this.db.query(`create table if not exists ${this.name}(
            ${[...Object.entries(this.schema!).map(e => e[0] + " " + e[1].type + " " + e[1].props.join(" "))]}
        )`).run();
    }
}