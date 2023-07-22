function render2(data: object): string {
    let result = "";

    Object.entries(data).forEach(val => {
        let head = val[0];
        let arrin: any[] = [];
        let temphead = head;
        const isTagged = val[1].tag || null
        if (isTagged) {
            head = val[1].tag;
            delete val[1].tag;
        }
        result += "<" + head;
        Object.entries(val[1]).forEach(inn => {
            if (inn[0] == "text")
                arrin.push(inn[1])
            else if (Array.isArray(inn[1]))
                inn[1].forEach(e => { arrin.push({ [inn[0]]: e }) })
            else if (typeof inn[1] == "object")
                arrin.push({ [inn[0]]: inn[1] })
            else {
                if (typeof inn[1] == "string")
                    result += ` ${inn[0]}="${inn[1]}"`;
                else
                    result += ` ${inn[0]}="${inn[1]!.toString()}"`;
            }
        })
        if (![
            "input",
            "link",
            "br",
            "hr",
            "area",
            "base",
            "br",
            "col",
            "use",
            "embed",
            "img",
            "meta",
            "param",
            "source",
            "track",
            "wbr",
        ].includes(head)) {

            result += ">";
            for (const item of arrin) {
                if (typeof item != "object")
                    result += item.toString()
                else {
                    result += render2(item)
                }
            }
            result += `</${head}>`
        }
        else
            result += ` />`;
        // console.log(val)
    })

    return result;
}

export default function render(data: object, request: any) {
    return new Response("<!DOCTYPE html>" + render2(data), {
        headers: {
            ...request.header,
            "content-type": "text/html"
        }
    })
}
