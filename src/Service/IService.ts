export interface IService {

}

export type param = {
    request?: Request, params?: Record<"id", number>, set?: {
        status?: number | undefined,
        redirect?: string | undefined
    }, body?: { uname?: string }
}

