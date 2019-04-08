import Entity from "../Entity";
import Special from "../Special";
import AmazingTreasure from "./treasures/amazing";
import BadTreasure from "./treasures/bad";
import GoodTreasure from "./treasures/good";
import BasicTreasure from "./treasures/ok";
import TerribleTreasure from "./treasures/terrible";
export default class Enemy extends Special {
    constructor() {
        super({
            special: "Enemy",
            color: "#CA4520"
        });
        this.entity = new Entity();
        this.onWalk = function (utils) {
            let player = utils.player;
            while (player.getProp("hp") > 0 && this.entity.getProp("hp") > 0) {
                this.entity.hp -= player.getProp("str");
                player.hp -= this.entity.getProp("str");
                player.step();
                this.entity.step();
            }
            if (player.getProp("hp") < 0) {
                window.location.reload();
            }
            if (this.entity.getProp("hp") < 0) {
                utils.special.splice(utils.id);
                if (Math.random() > 0.5) {
                    utils.special.push(new TerribleTreasure());
                }
                if (Math.random() > 0.6) {
                    utils.special.push(new BadTreasure());
                }
                if (Math.random() > 0.75) {
                    utils.special.push(new BasicTreasure());
                }
                if (Math.random() > 0.9) {
                    utils.special.push(new GoodTreasure());
                }
                if (Math.random() > 0.99) {
                    utils.special.push(new AmazingTreasure());
                }
            }
        };
    }
}
//# sourceMappingURL=Enemy.js.map