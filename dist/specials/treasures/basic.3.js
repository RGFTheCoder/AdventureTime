import Treasure from "../Treasure";
import Item from "../../Item";
import Enchantment from "../../Enchantment";
import Consumable from "../../Consumable";
export default class BasicTreasure extends Treasure {
    constructor() {
        super([
            new Item({
                color: "#a28e50",
                modifiers: {
                    str: Math.floor(Math.random() * 5 - 2.5) + 10
                },
                name: "Weak Sword"
            }),
            new Enchantment({
                color: "#9400d3",
                modifiers: {
                    str: Math.floor(Math.random() * 5 - 2.5) + 10
                },
                name: "Weak Enchantment"
            }),
            new Consumable({
                color: "#940063",
                modifiers: {
                    hp: Math.floor(Math.random() * 5 - 2.5) + 10
                },
                name: "Lesser Health Potion"
            }),
            new Consumable({
                color: "#940063",
                modifiers: {
                    mp: Math.floor(Math.random() * 5 - 2.5) + 10
                },
                name: "Lesser Mana Potion"
            }),
            new Consumable({
                color: "#940063",
                modifiers: {
                    mp: -(Math.floor(Math.random() * 5 - 2.5) + 15),
                    maxmp: Math.floor(Math.random() * 5 - 2.5) + 10
                },
                name: "Lesser Mana Limit Potion"
            }),
            new Consumable({
                color: "#940063",
                modifiers: {
                    hp: -(Math.floor(Math.random() * 5 - 2.5) + 15),
                    maxhp: Math.floor(Math.random() * 5 - 2.5) + 10
                },
                name: "Lesser Health Limit Potion"
            })
        ]);
    }
}
//# sourceMappingURL=basic.3.js.map