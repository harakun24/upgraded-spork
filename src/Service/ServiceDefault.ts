import { ServiceBase, param } from "./IService";
import html from "../render"
import vDefault from "../View/vdefault"
import vdetails from "../View/vdetails";
vdetails

import { Model } from "../Model";
class ServiceDefault extends ServiceBase {
  constructor() {
    super("default")
  }
  view({ request }: param) { return html(vDefault("Default page", Model.User.findAll()), request) }

  details({ request, params }: param) { return html(vdetails("Default page", Model.User.findById(params!.id) as { no: number, nama: string }), request) }

  delete({ set, params }: param) {
    try {
      Model.User.delete(params!.id);
      console.log(params!.id)
    } catch (e) {
      console.log(e)
    }
    set!.redirect = "/";
  }

  create({ set, body }: param) {
    try {
      Model.User.create({ nama: body!.uname as string })
    } catch (error) {
      console.log(error)
    }
    set!.redirect = "/";
  }
}

export default new ServiceDefault();