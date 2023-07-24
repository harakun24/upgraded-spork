import Database from "bun:sqlite";
import base from "./ModelBase";

export default class ModelUser extends base {
    name = "user";
    constructor(db: Database) {
        super(db);
        this.init();
    }
    schema = {
        no: {
            type: "integer",
            props: ["primary key", "autoincrement"]
        },
        nama: {
            type: "text",
            props: ["not null"]
        }
    }
    create(data: { nama: string }) {
        this.db.prepare(`insert into ${this.name}(nama) values ($nama)`).run(data.nama);
        return this.findAll();
    }
    findAll(condition: string = "true") {
        return this.db.query(`select * from ${this.name} where ${condition}`).all()
    }
    findById(id: number) {
        return this.db.query(`select * from ${this.name} where no=$id`).get({ $id: id })
    }
    delete(id: number) {
        return this.db.query(`delete from ${this.name} where no=$id`).run({ $id: id });
    }


}