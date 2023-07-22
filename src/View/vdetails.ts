import vtemplate from "./vtemplate";

export default (title: string, user: { no: number, nama: string }) => vtemplate(title, {
    class: "container-fluid pt-1 d-flex align-items-center justify-content-center",
    style: "flex:1",
    div: {
        class: "card",
        style: "flex:1",
        div: {
            class: "card-body",
            h2: { class: "card-title", text: "Halaman detail " + user.nama },
            a: [
                { href: "/", class: "btn btn-primary mx-2", i: { class: "bi-arrow-bar-left" }, text: " kembali", },
                { href: "/default/del/" + user.no, class: "btn btn-danger", text: "hapus user | ", i: { class: "bi-trash3-fill" } },
            ]
        }
    }
})