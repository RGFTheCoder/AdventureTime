import Treasure from "../Treasure";
import Item from "../../Item";
import Enchantment from "../../Enchantment";
import Consumable from "../../Consumable";
export default class BadTreasure extends Treasure {
    constructor() {
        super([
            new Item({
                color: "#ff7f50",
                modifiers: {
                    str: Math.floor(Math.random() * 5 - 2.5) + 15
                },
                name: "Weakened Sword"
            }),
            new Enchantment({
                color: "#ff7f50",
                modifiers: {
                    str: Math.floor(Math.random() * 5 - 2.5) + 15
                },
                name: "Weakened Enchantment"
            }),
            new Consumable({
                color: "#ff7f50",
                modifiers: {
                    hp: Math.floor(Math.random() * 5 - 2.5) + 15
                },
                name: "Lesser Health Potion"
            }),
            new Consumable({
                color: "#ff7f50",
                modifiers: {
                    mp: Math.floor(Math.random() * 5 - 2.5) + 15
                },
                name: "Lesser Mana Potion"
            }),
            new Consumable({
                color: "#ff7f50",
                modifiers: {
                    mp: -(Math.floor(Math.random() * 5 - 2.5) + 10),
                    maxmp: Math.floor(Math.random() * 5 - 2.5) + 15
                },
                name: "Lesser Mana Limit Potion"
            }),
            new Consumable({
                color: "#ff7f50",
                modifiers: {
                    hp: -(Math.floor(Math.random() * 5 - 2.5) + 10),
                    maxhp: Math.floor(Math.random() * 5 - 2.5) + 15
                },
                name: "Lesser Health Limit Potion"
            })
        ]);
    }
}
//# sourceMappingURL=bad.js.map