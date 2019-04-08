import Treasure from "../Treasure";
import Item from "../../Item";
import Enchantment from "../../Enchantment";
import Consumable from "../../Consumable";
export default class TerribleTreasure extends Treasure {
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
                color: "#a28e50",
                modifiers: {
                    str: Math.floor(Math.random() * 5 - 2.5) + 10
                },
                name: "Weak Enchantment"
            }),
            new Consumable({
                color: "#a28e50",
                modifiers: {
                    hp: Math.floor(Math.random() * 5 - 2.5) + 10
                },
                name: "Worse Health Potion"
            }),
            new Consumable({
                color: "#a28e50",
                modifiers: {
                    mp: Math.floor(Math.random() * 5 - 2.5) + 10
                },
                name: "Worse Mana Potion"
            }),
            new Consumable({
                color: "#a28e50",
                modifiers: {
                    mp: -(Math.floor(Math.random() * 5 - 2.5) + 15),
                    maxmp: Math.floor(Math.random() * 5 - 2.5) + 10
                },
                name: "Worse Mana Limit Potion"
            }),
            new Consumable({
                color: "#a28e50",
                modifiers: {
                    hp: -(Math.floor(Math.random() * 5 - 2.5) + 15),
                    maxhp: Math.floor(Math.random() * 5 - 2.5) + 10
                },
                name: "Worse Health Limit Potion"
            })
        ]);
    }
}
//# sourceMappingURL=terrible.js.map