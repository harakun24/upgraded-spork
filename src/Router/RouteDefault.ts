import Elysia from "elysia";
import { IRoute, set } from "./IRoute";
import service from "../Service/ServiceDefault";


class RouteDefault implements IRoute {
  path: string = "/default";
  route(app: Elysia) {

    for (const ep of [
      ["get", "/", service.view],
      ["get", "/details/:id", service.details],
      ["get", "/del/:id", service.delete],
      ["post", "/add", service.create]
    ])
      set(app, ep[0], ep[1], ep[2])

    return app;
  }
}
export default new RouteDefault();
