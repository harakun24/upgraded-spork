export default {
    class: "col-12",
    nav: {
        class: "navbar navbar-expand-lg navbar-dark bg-dark",
        div: [
            {
                class: "container-fluid",
                a: { class: "navbar-brand", href: "/", text: "Dim24" },
                button: {
                    class: "navbar-toggler", type: "button", "data-bs-toggle": "collapse",
                    "data-bs-target": "#navtitle",
                    "aria-controls": "#navtitle",
                    "aria-expanded": false,
                    "aria-label": "Toggle nav",
                    span: {
                        class: "navbar-toggler-icon"
                    }
                },
                div: {
                    class: "collapse navbar-collapse", id: "navtitle",
                    ul: {
                        class: "navbar-nav me-auto mb-2 mb-lg-0",
                        li: [
                            { class: "nav-item", a: { class: "nav-link", href: "#", text: "link" } },
                            { class: "nav-item", a: { class: "nav-link", href: "#", text: "link" } },
                            {
                                class: "nav-item dropdown",
                                a: {
                                    class: "nav-link dropdown-toggle",
                                    href: "#",
                                    role: "button",
                                    "data-bs-toggle": "dropdown",
                                    "aria-expanded": false,
                                    text: "link 3"
                                },
                                ul: {
                                    class: "dropdown-menu", style: "width:40%;position:absolute",
                                    li: [
                                        { a: { class: "dropdown-item", href: "#", text: "drop" } },
                                        { a: { class: "dropdown-item", href: "#", text: "drop" } },
                                        { hr: { class: "dropdown-divider" } },
                                        { a: { class: "dropdown-item", href: "#", text: "drop" } },
                                    ]
                                }
                            },
                        ]
                    },
                    form: {
                        class: "d-flex", role: "search",
                        input: { class: "form-control me-2", type: "search", placeholder: "search" },
                        button: { class: "btn btn-outline-light", type: "submit", text: "Cari" }
                    }
                },
            },

        ]
    }
}