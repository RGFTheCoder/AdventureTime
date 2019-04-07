import Item from "./Item";

export default class Enchantment extends Item {
    constructor() {
        super();
        this.onUse = function(utils) {
            utils.player.inventory.getItem(0).enchantments.push(this);
            utils.player.inventory.setItem(utils.id,new Item());
        }
    }
}