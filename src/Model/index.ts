import { Database } from "bun:sqlite";
import ModelUser from "./ModelUser"

export namespace Model {
    const db = new Database(process.env.DB || "mydb.sqlite", { create: true })

    const U = new ModelUser(db);
    U.init();
    export const User = U
}