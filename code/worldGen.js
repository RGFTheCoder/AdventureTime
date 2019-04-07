import Tile from "./Tile";
import Noise from "./noise";
const noise = new Noise(Math);
console.log(noise);
import generators from "./worldTypes/main";
import { getTilesEuclidean } from "./utils";


export function makeBlankMap(size) {
    size = size || 16;

    let tempBuffer = [];
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

export function makeEarthMap(size) {
    size = size || 16;

    let tempBuffer = makeBlankMap(size);

    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            let ns = noise.noise3d(x / 8, y / 8, 0) / 2 + 0.5;
            if (ns > 0.9) {
                tempBuffer[x][y].type = "❤️|Desert";
                tempBuffer[x][y].color = "#edc9af";
            } else if (ns > 0.8) {
                tempBuffer[x][y].type = "🌲|Forest";
                tempBuffer[x][y].color = "#0e4d26";
            } else if (ns > 0.6) {
                tempBuffer[x][y].type = "🏖️|Beach";
                tempBuffer[x][y].color = "#f9cda8";
            }
            let temprand = Math.random();
            if (temprand > 0.9) {
                tempBuffer[x][y].special = "💎|Treasure";
                tempBuffer[x][y].scolor = "#DAA520";
            }
        }
    }

    return tempBuffer[0][0];
}

export function makeHellMap(size) {
    size = size || 16;

    let tempBuffer = makeBlankMap(size);

    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            let ns = noise.noise3d(x / 8, y / 8, 1) + 0.5;
            if (ns > 0.9) {
                tempBuffer[x][y].type = "❤️|Hellcore";
                tempBuffer[x][y].color = "#4e0100";
            } else if (ns > 0.8) {
                tempBuffer[x][y].type = "❤️|Netherrack";
                tempBuffer[x][y].color = "#810200";
            } else if (ns > 0.6) {
                tempBuffer[x][y].type = "❤️|Sand";
                tempBuffer[x][y].color = "#5e140d";
            } else {
                tempBuffer[x][y].type = "❤️|Lava";
                tempBuffer[x][y].color = "#ff4500";
            }
        }
    }

    return tempBuffer[0][0];
}

export function makeGenMap(size, generator) {
    size = size || 16;
    let gen = generators[generator];
    let tempBuffer = makeBlankMap(size);

    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            let ns = noise.noise3d(x / 8, y / 8, gen.z)/2 + 0.5;
            let pieces = Object.keys(gen.type).sort((a, b) => b - a);
            for (let i of pieces) {
                if (ns > i) {
                    for (let j in gen.type[i]) {
                        tempBuffer[x][y][j] = gen.type[i][j];
                    }
                    break;
                }
            }

            let rng = Math.random();
            for (let i in gen.special) {
                if (rng > i) {
                    for (let j in gen.special[i]) {
                        tempBuffer[x][y][j] = gen.special[i][j];
                    }
                    break;
                }
            }
        }
    }
    gen.sudo({Tile,makeBlankMap,tempBuffer,getTilesEuclidean});

    console.log(gen);

    return tempBuffer[0][0];
}