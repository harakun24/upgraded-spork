import { Database } from "bun:sqlite";

export default interface IModel {
    name: string;
    db: Database;
    init: () => void
}