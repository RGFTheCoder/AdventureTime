import _ from "./typedarray";
import Item from "./Item";
import Player from "./Player";
import { getTilesEuclidean, html, o } from "./utils";
import { makeGenMap, setNoiseMode } from "./worldGen";
import Tile from "./Tile";

import "../libs/p5.min.js";
/* tslint:disable */
import p5 = require("p5");
/* tslint:enable */
setNoiseMode("loop");
declare global {
  interface Window {
    debugMode: boolean;
  }
}

window.debugMode = false;

new p5(function(sketch: p5) {
  let currentTile: Tile,
    currentSpecial: Element,
    playerInfo: Element,
    currentItemData: Element,
    player: Player,
    invx: number = 0,
    invy: number = 0;

  let genSize = 256,
    showSize = 11,
    cubeSize = 32;

  sketch.setup = function() {
    currentTile = makeGenMap(genSize, "earth");
    // let hellPortal = makeGenMap(genSize, "hell");

    // currentTile.up.down = hellPortal.down;
    // hellPortal.down.up = currentTile.up;

    // currentTile.up = hellPortal;
    // hellPortal.down = currentTile;

    // currentTile.color = "#442344";
    // hellPortal.color = "#442344";

    player = new Player();

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

    sketch.createCanvas(
      showSize * cubeSize + 11 * cubeSize + 2 * cubeSize,
      Math.max(showSize * cubeSize, 11 * cubeSize)
    );

    //dom
    currentSpecial = html`
      <h1>Nothing</h1>
    `;
    playerInfo = html`
      <pre></pre>
    `;
    currentItemData = html`
      <pre></pre>
    `;
  };

  let mvCool = 0;
  let invMvCool = 0,
    invSel = new Item({ color: "#cccccc" });
  invSel.empty = true;

  sketch.draw = function() {
    sketch.background("#000000");

    player.step();

    currentSpecial.textContent =
      currentTile.special.length > 0
        ? currentTile.special.map(x => x.special).toString()
        : "Nothing";

    let playerText: string = "Player:\n\n";
    for (let i in player.props) {
      playerText += `${player.props[i]}: ${Math.floor(
        player.getProp(player.props[i])
      )}\n`;
    }
    playerInfo.textContent = playerText;

    let itemText: string = "";
    let currentItem = player.inventory.getItem(invx + invy * 11);
    itemText += `Item: ${currentItem.name}\n\n`;
    for (let i in currentItem.props) {
      itemText += `${currentItem.props[i]}: ${Math.floor(
        currentItem.getProp(currentItem.props[i])
      )}\n`;
    }
    currentItemData.textContent = itemText;

    if (mvCool < 0) {
      if (sketch.keyIsDown(65)) {
        currentTile = currentTile.left;
        mvCool = 1;
        for (let i = 0; i < currentTile.special.length; i++) {
          currentTile.special[i].onWalk({
            player,
            special: currentTile.special,
            id: i
          });
        }
      }

      if (sketch.keyIsDown(68)) {
        currentTile = currentTile.right;
        mvCool = 1;
        for (let i = 0; i < currentTile.special.length; i++) {
          currentTile.special[i].onWalk({
            player,
            special: currentTile.special,
            id: i
          });
        }
      }

      if (sketch.keyIsDown(87)) {
        currentTile = currentTile.up;
        mvCool = 1;
        for (let i = 0; i < currentTile.special.length; i++) {
          currentTile.special[i].onWalk({
            player,
            special: currentTile.special,
            id: i
          });
        }
      }

      if (sketch.keyIsDown(83)) {
        currentTile = currentTile.down;
        mvCool = 1;
        for (let i = 0; i < currentTile.special.length; i++) {
          currentTile.special[i].onWalk({
            player,
            special: currentTile.special,
            id: i
          });
        }
      }
    } else {
      mvCool -= 0.1;
    }

    if (invMvCool < 0) {
      if (sketch.keyIsDown(37)) {
        invx--;
        invMvCool = 1;
      }

      if (sketch.keyIsDown(39)) {
        invx++;
        invMvCool = 1;
      }

      if (sketch.keyIsDown(38)) {
        invy--;
        invMvCool = 1;
      }

      if (sketch.keyIsDown(40)) {
        invy++;
        invMvCool = 1;
      }
      invx = (invx + 11) % 11;
      invy = (invy + 11) % 11;
    } else {
      invMvCool -= 0.1;
    }
    if (sketch.keyIsDown(32)) {
      while (currentTile.special.length > 0) {
        let currentFiend = currentTile.special.pop();
        currentFiend.onUse({
          player,
          special: currentTile.special,
          id: -1
        });
      }
    }
    if (sketch.keyIsDown(13)) {
      player.inventory.getItem(invx + invy * 11).use({
        player,
        id: invx + invy * 11,
        Tile
      });
    }
    if (invMvCool < 0) {
      if (sketch.keyIsDown(80)) {
        invSel = player.inventory.swapItem(invx + invy * 11, invSel);
        invMvCool = 1;
      }
    }

    for (let i = 0; i < 10; i++) {
      let keyCode = i + 48;

      if (sketch.keyIsDown(keyCode)) {
        player.inventory.getItem(i).use({
          player,
          id: i,
          Tile
        });
      }
    }

    let temp1 = getTilesEuclidean(
      11,
      currentTile.drleft.drleft.drleft.drleft.drleft.drup.drup.drup.drup.drup
    );

    for (let x = 0; x < temp1.length; x++) {
      for (let y = 0; y < temp1[x].length; y++) {
        sketch.noStroke();
        sketch.fill(temp1[x][y].color);
        sketch.rect(x * cubeSize, y * cubeSize, cubeSize, cubeSize);
        for (let item of temp1[x][y].special) {
          sketch.noStroke();
          sketch.fill(item.color);
          sketch.rect(
            x * cubeSize + cubeSize / 4,
            y * cubeSize + cubeSize / 4,
            cubeSize / 2,
            cubeSize / 2
          );
        }
        if (temp1[x][y] == currentTile) {
          sketch.stroke("#000000");
          sketch.strokeWeight(2);
          // sketch.fill("#ffffff");
          sketch.rect(
            x * cubeSize + cubeSize / 4,
            y * cubeSize + cubeSize / 4,
            cubeSize / 2,
            cubeSize / 2
          );
        }
      }
    }

    let playerinv = player.inventory;

    for (let x = 0; x < 11; x++) {
      for (let y = 0; y < 11; y++) {
        let currItem = playerinv.getItem(x + y * 11);
        sketch.stroke("#000000");
        sketch.strokeWeight(1);
        sketch.fill(currItem.color);
        sketch.rect(
          x * cubeSize + 11 * cubeSize,
          y * cubeSize,
          cubeSize,
          cubeSize
        );
      }
    }

    sketch.noStroke();
    sketch.fill("#000000");
    sketch.rect(
      invx * cubeSize + cubeSize / 4 + 11 * cubeSize,
      invy * cubeSize + cubeSize / 4,
      cubeSize / 2,
      cubeSize / 2
    );

    sketch.noStroke();
    sketch.fill("#ee6666");
    sketch.rect(
      22 * cubeSize,
      0,
      cubeSize / 2,
      11 * cubeSize * (player.getProp("hp") / player.maxhp)
    );

    sketch.noStroke();
    sketch.fill("#6666ee");
    sketch.rect(
      22.5 * cubeSize,
      0,
      cubeSize / 2,
      11 * cubeSize * (player.getProp("mp") / player.maxmp)
    );
  };
});
