import Special from "../Special";
import Entity from "../Entity";

export default class Enemy extends Special {
    constructor() {
        super({
            special: "Enemy",
            color: "#CA4520",
            onWalk() {},
            onUse(utils) {

            },
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
            }

        }

    }
}