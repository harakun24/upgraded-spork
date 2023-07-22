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

    h2: { text: "Halaman default" },
    div: data.map((e: any) => ({
        class: "card m-2",
        // h5: { class: "card-header", text: "A card" },
        div: {
            class: "card-body",
            h5: { class: "card-title", text: `title of card ${e.nama}` },
            p: { class: "card-text", text: "Lorem ipsum dolor sit amet." },
            a: { href: "default/details/" + e.no, class: "btn btn-primary", text: "go to page " + e.nama }
        }
    }))
})