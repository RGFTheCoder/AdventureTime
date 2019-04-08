import Tile from "./Tile";

export function html(code: string): Element {
  let tempElem = document.createElement("div");
  tempElem.innerHTML = code + "";
  let elem: Element;
  if (tempElem.firstElementChild !== null) {
    elem = tempElem.firstElementChild;
  } else {
    elem = document.createElement("div");
  }
  document.body.appendChild(elem);
  return elem;
}

export function o(text: string) {
  return console.log(...text);
}

export function drawTileEuclidean(size: number, tile: Tile) {
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

function drawTileStrip(size: number, tile: Tile) {
  let out = [];
  for (let i = 0; i < size; i++) {
    out.push(tile);
    tile = tile.drright;
  }
  return out;
}

export function getTilesEuclidean(size: number, tile: Tile) {
  let out = [];
  for (let i = 0; i < size; i++) {
    out.push(drawTileStrip2(size, tile));
    tile = tile.drright;
  }

  return out;
}

function drawTileStrip2(size: number, tile: Tile) {
  let out = [];
  for (let i = 0; i < size; i++) {
    out.push(tile);
    tile = tile.drdown;
  }
  return out;
}
