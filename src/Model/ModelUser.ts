import Database from "bun:sqlite";
import IModel from "./IModel";

export default class ModelUser implements IModel {
    db: Database;
    name = "user";
    constructor(db: Database) {
        this.db = db
    }
    init() {
        this.db.query(`create table if not exists ${this.name}(
            no integer primary key autoincrement,
            nama text not null
        )`).run();
    }
    create(data: { nama: string }) {
        this.db.prepare(`insert into ${this.name}(nama) values ($nama)`).run(data.nama);
        return this.findAll();
    }
    findAll() {
        return this.db.query(`select * from ${this.name}`).all()
    }
    findById(id: number) {
        return this.db.query(`select * from ${this.name} where no=$id`).get({ $id: id })
    }
    delete(id: number) {
        return this.db.query(`delete from ${this.name} where no=$id`).run({ $id: id });
    }


}