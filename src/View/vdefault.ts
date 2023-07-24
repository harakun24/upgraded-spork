import vtemplate from "./vtemplate";

function range(length: number, start: number): number[] {
    const arr = new Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = start++;
    }
    return arr;
}

export default (title?: string, data?: any) => vtemplate(title, {
    class: "container-fluid pt-1",
    // style: "min-height:68.25vh",
    // style: "height:auto",
    style: "flex:1",

    h2: { text: "Daftar Users" },
    div: [{
        button: {
            class: "btn btn-primary",
            text: "add ",
            "data-bs-toggle": "modal",
            "data-bs-target": "#adduser",
            i: { class: "bi-plus" },
        }
    }, {
        class: "modal fade",
        id: "adduser",
        tabindex: "-1",
        div: {
            class: "modal-dialog",
            div: {
                class: "modal-content",
                div: [{
                    class: "modal-header",
                    h1: { text: "Tambah user", class: "modal-title fs-5" },
                    button: {
                        class: "btn-close",
                        "data-bs-dismiss": "modal", "aria-label": "Close"
                    }
                },
                {
                    class: "modal-body",
                    form: {
                        class: "form",
                        method: "post",
                        action: "/default/add",
                        div: [{
                            class: "input-group flex-nowrap",
                            span: {
                                class: "input-group-text",
                                i: { class: "bi-person-plus-fill" }
                            },
                            input: {
                                class: "form-control",
                                placeholder: "username",
                                name: "uname",
                            }
                        }, {
                            class: "input-group my-2",
                            input: { type: "submit", class: "btn btn-success" }
                        }
                        ]
                    }
                }
                ]
            }
        }
    }, ...data.map((e: any) => ({
        class: "card m-2",
        // h5: { class: "card-header", text: "A card" },
        div: {
            class: "card-body",
            h5: { class: "card-title", text: `title of card ${e.nama}` },
            p: { class: "card-text", text: "Lorem ipsum dolor sit amet." },
            a: { href: "default/details/" + e.no, class: "btn btn-primary", text: "go to page " + e.nama }
        }
    })), data.length < 1 ? {
        class: "card my-2",
        div: {
            class: "card-body",
            h3: { class: "card-title", text: "Data kosong" }
        }
    } : ""]
})