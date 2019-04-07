import Inventory from "./Inventory";

export default class Player{
    constructor() {
        this.hp = 100;
        this.maxhp = 100;
        this.mp = 100;
        this.maxmp = 100;
        this.str = 2;
        this.inventory = new Inventory(11**2);
    }
}