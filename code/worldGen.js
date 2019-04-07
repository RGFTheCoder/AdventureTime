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