export function html(code) {
    let tempElem = document.createElement("div");
    tempElem.innerHTML = code + "";
    let elem;
    if (tempElem.firstElementChild !== null) {
        elem = tempElem.firstElementChild;
    }
    else {
        elem = document.createElement("div");
    }
    document.body.appendChild(elem);
    return elem;
}
export function o(text) {
    return console.log(...text);
}
export function drawTileEuclidean(size, tile) {
    let out = [];
    for (let i = 0; i < size; i++) {
        out.push(drawTileStrip(size, tile));
        tile = tile.drdown;
    }
    return out
        .map(x => {
        return x.join("");
    })
        .join("\n");
}
function drawTileStrip(size, tile) {
    let out = [];
    for (let i = 0; i < size; i++) {
        out.push(tile);
        tile = tile.drright;
    }
    return out;
}
export function getTilesEuclidean(size, tile) {
    let out = [];
    for (let i = 0; i < size; i++) {
        out.push(drawTileStrip2(size, tile));
        tile = tile.drright;
    }
    return out;
}
function drawTileStrip2(size, tile) {
    let out = [];
    for (let i = 0; i < size; i++) {
        out.push(tile);
        tile = tile.drdown;
    }
    return out;
}
//# sourceMappingURL=utils.js.map