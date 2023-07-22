import Elysia from "elysia";
import IRoute from "./IRoute";
import service from "../Service/ServiceDefault";

class RouteDefault implements IRoute {
  path: string = "/default";
  route(app: Elysia) {
    return app.get("/", service.view)
      .get("/details/:id", service.details)
      .get("/del/:id", service.delete)
      ;
  }
}
export default new RouteDefault();
