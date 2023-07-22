import Elysia, { ElysiaInstance, LocalHandler, TypedSchema } from "elysia";

export interface IRoute {
  path: string;
  route: Function
}

export type handler = LocalHandler<TypedSchema<never>, ElysiaInstance, "/">
