import { Database } from "bun:sqlite";
import ModelUser from "./ModelUser"

export namespace Model {
    const db = new Database(process.env.DB || "mydb.sqlite", { create: true })

    export const User = new ModelUser(db)
}