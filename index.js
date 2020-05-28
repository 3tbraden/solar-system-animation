function showToolTip(dom) {
    for (c of dom.children) {
        if (c.className === "tooltip") {
            c.style.display = "block";
        }
    }
}

function hideToolTip(dom) {
    for (c of dom.children) {
        if (c.className === "tooltip") {
            c.style.display = "none";
        }
    }
}
