import vheader from "./partials/vnavbar"
import vfooter from "./partials/vfooter"

export default (title?: string, child?: Object) => ({
    html: {
        head: {
            title: {
                text: title,
            },
            meta: [
                { charset: "UTF-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1.0" }
            ],
            link: [
                {
                    rel: "icon",
                    type: "image/svg",
                    href: "/assets/bootstrap-icons/hdd-rack.svg"
                },
                {
                    rel: "stylesheet",
                    href: "/assets/bootstrap/css/bootstrap.min.css"
                },
                {
                    rel: "stylesheet",
                    href: "/assets/bootstrap-icons/font/bootstrap-icons.css"
                },
            ],
            script: {
                src: "/assets/bootstrap/js/bootstrap.bundle.min.js"
            }
        },
        body: {
            style: "min-height:100vh",
            class: "d-flex flex-column",
            div: [vheader, child],
            footer: vfooter
        }
    }
})