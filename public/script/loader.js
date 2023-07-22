let count;

setInterval(() => {
    fetch("/loader").then(res => res.json())
        .then(res => {
            // console.log({ count, res })
            if (!count)
                count = res;
            else {
                if (count > res)
                    document.location.reload();
            }
        })
}, 300)