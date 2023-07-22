import Elysia from "elysia";
import { IRoute, handler } from "./IRoute";
import service from "../Service/ServiceDefault";


class RouteDefault implements IRoute {
  path: string = "/default";
  route(app: Elysia) {

    function set(method: string, url: string, h: unknown) {
      switch (method) {
        case "get":
          app.get(url, h as handler);
          break;
        case "post":
          app.post(url, h as handler);
          break;
        case "put":
          app.put(url, h as handler);
          break;
        case "delete":
          app.delete(url, h as handler);
          break;
      }
    }

    for (const ep in [
      ["get", "/", service.view],
      ["get", "/details/:id", service.details],
      ["get", "/del/:id", service.delete],
    ])
      set(ep[0], ep[1], ep[2])

    return app;
  }
}
export default new RouteDefault();
