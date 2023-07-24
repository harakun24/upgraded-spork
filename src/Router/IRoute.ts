import Elysia, { ElysiaInstance, LocalHandler, TypedSchema } from "elysia";

export interface IRoute {
  path: string;
  route: Function
}

export function set(app: Elysia, method: unknown, url: unknown, h: unknown) {
  switch (method) {
    case "get":
      app.get(url as string, h as handler);
      break;
    case "post":
      app.post(url as string, h as handler);
      break;
    case "put":
      app.put(url as string, h as handler);
      break;
    case "delete":
      app.delete(url as string, h as handler);
      break;
  }
}
export type handler = LocalHandler<TypedSchema<never>, ElysiaInstance, "/">
