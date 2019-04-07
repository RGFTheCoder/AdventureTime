import {
    o,
    html,
    drawTileEuclidean,
    getTilesEuclidean
} from "./utils";
import Tile from "./Tile";
import {
    makeEarthMap,
    makeHellMap,
    makeGenMap
} from "./worldGen";

new p5(function (sketch) {

    let currentTile,
        currentSpecial,
        currentBiome,
        // radar,
        // mapWorld,
        upButton,
        downButton,
        leftButton,
        rightButton;

    let genSize = 64,
        showSize = 11,
        cubeSize = 32;

    sketch.setup = function () {
        currentTile = makeGenMap(genSize, "earth");
        let hellPortal = makeGenMap(genSize, "hell");

        currentTile.up.down = hellPortal.down;
        hellPortal.down.up = currentTile.up;

        currentTile.up = hellPortal;
        hellPortal.down = currentTile;

        currentTile.color = "#442344";
        hellPortal.color = "#442344";


        // currentTile.special = "🛥️|Boat";
        // currentTile.right.right.special = "🦈|Sharknado";
        // currentTile.down.down.down.special = "🦈|Sharknado";
        // currentTile.down.down.down.right.right.right.special = "⚙️|Engine";
        // currentTile.down.right.type = "⛏️|Rocks";
        // currentTile.down.right.right.type = "⛏️|Rocks";
        // currentTile.down.right.right.special = "💎|Treasure";
        // currentTile.down.right.right.right.type = "⛏️|Rocks";
        // currentTile.down.right.right.right.special = "⚫|Stone";
        // currentTile.down.down.right.type = "⛏️|Rocks";
        // currentTile.down.down.right.special = "👹|Enemy";
        // currentTile.down.down.right.right.type = "⛰️|Mountains";
        // currentTile.down.down.right.right.right.type = "⛰️|Mountains";

        sketch.createCanvas(showSize * cubeSize, showSize * cubeSize);

        //dom
        currentSpecial = html `<h1>Nothing</h1>`;
        currentBiome = html `<h1>Ocean</h1>`;
        // radar = html `<pre style="font-size: 5ch;"></pre>`;

        // mapWorld = html `<pre style="font-size: 5ch;"></pre>`;

        upButton = html `<button>Up</button>`;
        downButton = html `<button>Down</button>`;
        leftButton = html `<button>Left</button>`;
        rightButton = html `<button>Right</button>`;
        upButton.onclick = function () {
            currentTile = currentTile.up;
        }
        downButton.onclick = function () {
            currentTile = currentTile.down;
        }
        leftButton.onclick = function () {
            currentTile = currentTile.left;
        }
        rightButton.onclick = function () {
            currentTile = currentTile.right;
        }
    }

    let mvCool = 0;

    sketch.draw = function () {
        currentSpecial.textContent = currentTile.special;
        currentBiome.textContent = currentTile.type;
        // radar.textContent = currentTile.toStringSpe();
        // mapWorld.textContent = drawTileEuclidean(7, currentTile.left.left.left.up.up.up);

        if (currentSpecial.textContent == "enemy" || currentSpecial.textContent == "sharknado") {
            o `You lose!`;
        } else if (currentSpecial.textContent == "engine") {
            o `You win!`;
        }
        if (mvCool < 0) {
            if (sketch.keyIsDown(sketch.LEFT_ARROW)) {
                currentTile = currentTile.left;
                mvCool=1;
            }

            if (sketch.keyIsDown(sketch.RIGHT_ARROW)) {
                currentTile = currentTile.right;
                mvCool=1;
            }

            if (sketch.keyIsDown(sketch.UP_ARROW)) {
                currentTile = currentTile.up;
                mvCool=1;
            }

            if (sketch.keyIsDown(sketch.DOWN_ARROW)) {
                currentTile = currentTile.down;
                mvCool=1;
            }
        } else {
            mvCool -= 0.1
        }

        let temp1 = getTilesEuclidean(11, currentTile.drleft.drleft.drleft.drleft.drleft.drup.drup.drup.drup.drup);
        
        for (let x = 0; x < temp1.length; x++) {
            for (let y = 0; y < temp1[x].length; y++) {
                sketch.noStroke();
                sketch.fill(temp1[x][y].color);
                sketch.rect(x * cubeSize, y * cubeSize, cubeSize, cubeSize);
                if (temp1[x][y].special !== "🔲|Nothing") {
                    sketch.noStroke();
                    sketch.fill(temp1[x][y].scolor);
                    sketch.rect(x * cubeSize + cubeSize / 4, y * cubeSize + cubeSize / 4, cubeSize / 2, cubeSize / 2);
                }
                if(temp1[x][y] == currentTile) {
                    sketch.stroke("#000000");
                    sketch.strokeWeight(2);
                    // sketch.fill("#ffffff");
                    sketch.rect(x * cubeSize + cubeSize / 4, y * cubeSize + cubeSize / 4, cubeSize / 2, cubeSize / 2);

                }
            }
        }
    }
});