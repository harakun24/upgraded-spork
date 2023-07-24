import Default from "./RouteDefault";
import Elysia from "elysia";
import ServiceDefault from "../Service/ServiceDefault";
import { IRoute, handler } from "./IRoute";

export namespace Router {
  let count = 0;
  export const bundle = function (app: Elysia) {

    function routing(router: IRoute) {
      app.get(router.path, ({ set }) => set.redirect = router.path + "/");
      app.group(router.path, router.route as typeof Default.route)
    }

    app //server
      .get("/", ServiceDefault.view as unknown as handler)
      .get("/loader", () => count++)

    routing(Default)

    return app;
  };
}
