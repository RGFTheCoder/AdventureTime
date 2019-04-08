import Item from "./Item";
export default class Enchantment extends Item {
    constructor(addProps) {
        addProps = addProps || {};
        super({});
        this.mpUsage = 50 + Math.round(Math.random() * 20) - 10;
        this.props.push("mpUsage");
        this.onUse = function (utils) {
            if (utils.player.mp > this.mpUsage) {
                utils.player.inventory.getItem(0).enchantments.push(this);
                let blank = new Item();
                blank.empty = true;
                utils.player.inventory.setItem(utils.id, blank);
                utils.player.mp -= this.mpUsage;
            }
        };
        for (let i in addProps) {
            this[i] = addProps[i];
        }
    }
}
//# sourceMappingURL=Enchantment.js.map