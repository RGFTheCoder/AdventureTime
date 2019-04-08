import Inventory from "./Inventory";
import Entity from "./Entity";
export default class Player extends Entity {
    constructor() {
        super();
        this.mp = Math.floor(Math.random() * 50) + 50;
        this.maxmp = this.mp;
        this.inventory = new Inventory(Math.pow(11, 2));
        this.regen.push("mp");
        this.props.push("mp");
        this.props.push("maxmp");
    }
    getProp(name) {
        return (this[name] || 0) + this.inventory.getItem(0).getProp(name);
    }
}
//# sourceMappingURL=Player.js.map