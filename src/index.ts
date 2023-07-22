import { Elysia } from "elysia";
import { Router } from "./Router";
import { staticPlugin } from "@elysiajs/static"
import swagger from "@elysiajs/swagger";
import "colors";

namespace Server {
  const app = new Elysia();
  app
    .derive(({ request }) => {
      const log = { text: `${request.method.cyan} ${request.url.bold}` }
      if (log.text.indexOf("/loader") < 0)
        console.log(log.text.split("/assets").length > 1 ? log.text.split("/assets")[1].italic.dim.yellow : log.text)
      return log
    });
  app
    .use(swagger())
    .use(staticPlugin({ prefix: "/assets" }))
    .group("", Router.bundle)
    .listen({ port: process.env.PORT ?? 4000, hostname: process.env.HOST ?? "localhost" }, function ({ hostname, port }) {
      console.log(`server run in ${hostname}:${port}
      `.green);
    });
}
