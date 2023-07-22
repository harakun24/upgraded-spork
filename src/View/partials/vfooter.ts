export default {
    class: "pb-2 pt-4 mt-2 footer pb-1 bg-dark text-white",
    div: {
        class: "col-12 d-flex flex-wrap",
        style: "opacity:0.85;font-size:80%;justify-content:start !important",
        div: [{
            class: "container-fluid col-lg-4 col-md-8 m-0 mt-lg-3 mx-lg-4 mb-sm-4 mb-lg-0",
            h3: {
                // class: " my-1 mx-0",
                text: "BS 5.3"
            },
            p: {
                text: "lorem ipsum dolor sit amet. Using Bootstrap 5 flexbox utilities, create a footer that always sticks to the bottom of your viewport."
            }
        },
        {
            class: "d-flex container-fluid col-lg-4 col-md-8 m-0",
            div: [
                {
                    class: "col-6",
                    h5: { text: "Quick guide" },
                    ul: {
                        class: "list-unstyled",
                        li:
                            ["satu", "dua", "tige", "empat"].map(e => ({ class: "list-group-item", text: e }))
                    }
                },
                {
                    class: "col-6",
                    h5: { text: "Quick features" },
                    ul: {
                        class: "list-unstyled",
                        li:
                            ["satu", "dua", "tige", "empat"].map(e => ({ class: "list-group-item", text: e }))
                    }
                }
            ]
        }
        ]
    }
    ,
    script: {
        src: "/assets/script/loader.js"
    }
}