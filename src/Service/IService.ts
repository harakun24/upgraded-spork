import { Model } from "../Model";
import "colors";

export abstract class ServiceBase {
    Model = Model;
    constructor(name: string) {
        console.log(`|-- service `.cyan + name.yellow + ` ---|
        `.cyan)
    }
    abstract view(arg: param | undefined): Response | void
}

export type param = {
    request?: Request, params?: Record<"id", number>, set?: {
        status?: number | undefined,
        redirect?: string | undefined
    }, body?: { uname?: string }
}

