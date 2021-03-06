import Tile from "./Tile";
import NoiseT from "../libs/simplex-noise";
const simplex = new NoiseT();
import generators from "./worldTypes/main";
import { getTilesEuclidean } from "./utils";

export function makeBlankMap(size: number) {
  size = size || 16;

  let tempBuffer: Tile[][] = [];
  for (let x = 0; x < size; x++) {
    tempBuffer[x] = [];
    for (let y = 0; y < size; y++) {
      tempBuffer[x][y] = new Tile();
    }
  }

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      tempBuffer[x][y].up = tempBuffer[x][(y + size - 1) % size];
      tempBuffer[x][y].down = tempBuffer[x][(y + size + 1) % size];
      tempBuffer[x][y].left = tempBuffer[(x + size + 1) % size][y];
      tempBuffer[x][y].right = tempBuffer[(x + size - 1) % size][y];

      tempBuffer[x][y].drup = tempBuffer[x][(y + size - 1) % size];
      tempBuffer[x][y].drdown = tempBuffer[x][(y + size + 1) % size];
      tempBuffer[x][y].drleft = tempBuffer[(x + size + 1) % size][y];
      tempBuffer[x][y].drright = tempBuffer[(x + size - 1) % size][y];
    }
  }
  return tempBuffer;
}

function wrapX(x: number, size: number) {
  let percent = x / size;

  if (percent > 0.75) {
    return {
      x: 0,
      z: size * 0.25 - (x - size * 0.75)
    };
  } else if (percent > 0.5) {
    return {
      x: size * 0.25 - (x - size * 0.5),
      z: size * 0.25
    };
  } else if (percent > 0.25) {
    return {
      x: size * 0.25,
      z: x - size * 0.25
    };
  } else {
    return {
      x: x,
      z: 0
    };
  }
}

function wrapXSin(x: number, y: number, size: number) {
  let ysin = Math.sin((y / size) * Math.PI);
  let radians = (x / size) * 2 * Math.PI;

  return {
    x: (Math.sin(radians) * size) / 4,
    y: y / 2 - 16,
    z: (Math.cos(radians) * size) / 4
  };
}

let currentNoiseMode: string = "loop";

export function setNoiseMode(mode: string) {
  currentNoiseMode = mode;
}

export function makeGenMap(size: number, generator: string) {
  size = size || 16;
  let gen = generators[generator];
  let tempBuffer = makeBlankMap(size);

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      let test = wrapXSin(x, y, size);
      let ns = 0;
      if (currentNoiseMode == "orig") {
        ns = simplex.noise4D(x / 8, y / 8, 0, gen.z) / 2 + 0.5;
      } else if (currentNoiseMode == "loop") {
        ns = simplex.noise4D(test.x / 8, y / 8, test.z / 8, gen.z) / 2 + 0.5;
        if (y == 0) {
          let oldns = ns;
          let temp1 =
            simplex.noise4D(test.x / 8, (1 / 2 - 16) / 8, test.z / 8, gen.z) /
              2 +
            0.5;
          let temp2 =
            simplex.noise4D(
              test.x / 8,
              (size / 2 - 16) / 8,
              test.z / 8,
              gen.z
            ) /
              2 +
            0.5;
          ns = (oldns + temp1 + temp2) / 3;
        } else if (y == size) {
          let oldns = ns;
          let temp1 =
            simplex.noise4D(test.x / 8, (0 / 2 - 16) / 8, test.z / 8, gen.z) /
              2 +
            0.5;
          let temp2 =
            simplex.noise4D(
              test.x / 8,
              ((size - 1) / 2 - 16) / 8,
              test.z / 8,
              gen.z
            ) /
              2 +
            0.5;
          ns = (oldns + temp1 + temp2) / 3;
        }
      }

      let pieces = Object.keys(gen.type).sort(
        (a, b) => parseFloat(b) - parseFloat(a)
      );
      for (let i of pieces) {
        if (ns > parseFloat(i)) {
          Object.assign(tempBuffer[x][y], gen.type[i]);
          break;
        }
      }

      let rng = Math.random();
      let pieces2 = Object.keys(gen.special).sort(
        (a, b) => parseFloat(b) - parseFloat(a)
      );

      for (let i of pieces2) {
        if (rng > parseFloat(i)) {
          tempBuffer[x][y].special.push(new gen.special[i]());
          break;
        }
      }
    }
  }

  for (let i of gen.structures) {
    let rarity = i.rarity * (1 + (Math.random() - 0.5) / 2) * size;
    for (let t = 0; t < rarity; t++) {
      let newx = Math.floor(Math.random() * size);
      let newy = Math.floor(Math.random() * size);
      i.function({
        Tile,
        makeBlankMap,
        genTile: tempBuffer[newx][newy],
        getTilesEuclidean
      });
    }
  }

  gen.sudo({
    Tile,
    makeBlankMap,
    tempBuffer,
    getTilesEuclidean
  });

  console.log(gen);

  return tempBuffer[0][0];
}
