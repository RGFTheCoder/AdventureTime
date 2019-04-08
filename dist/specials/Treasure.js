import Special from "../Special";
import Item from "../Item";
import Enchantment from "../Enchantment";
import Consumable from "../Consumable";
export default class Treasure extends Special {
    constructor(itemList) {
        super({
            special: "Treasure",
            color: "#DAA520"
        });
        itemList = itemList || [
            new Item({
                color: "#a28e50",
                modifiers: {
                    str: Math.floor(Math.random() * 5 - 2.5) + 10
                },
                name: "Weak Sword"
            }),
            new Item({
                color: "#ff7f50",
                modifiers: {
                    str: Math.floor(Math.random() * 20 - 10) + 10
                },
                name: "Wacky Sword"
            }),
            new Item({
                color: "#808080",
                modifiers: {
                    str: Math.floor(Math.random() * 10 - 2.5) + 10
                },
                name: "Better Sword"
            }),
            new Item({
                color: "#dcdcdc",
                modifiers: {
                    str: Math.floor(Math.random() * 5 - 2.5) + 15
                },
                name: "Strong Sword"
            }),
            new Item({
                color: "#9400d3",
                modifiers: {
                    str: Math.floor(Math.random() * 10 - 5) + 20
                },
                name: "Powerful Sword"
            }),
            new Enchantment({
                color: "#9400d3",
                modifiers: {
                    str: Math.floor(Math.random() * 10 - 5) + 20
                },
                name: "Powerful Enchantment"
            }),
            new Consumable({
                color: "#940063",
                modifiers: {
                    hp: Math.floor(Math.random() * 10 - 5) + 20
                },
                name: "Greater Health Potion"
            }),
            new Consumable({
                color: "#940063",
                modifiers: {
                    mp: Math.floor(Math.random() * 10 - 5) + 20
                },
                name: "Greater Mana Potion"
            }),
            new Consumable({
                color: "#940063",
                modifiers: {
                    mp: -Math.floor(Math.random() * 10 - 5) - 20,
                    maxmp: Math.floor(Math.random() * 10 - 5) + 20
                },
                name: "Greater Mana Limit Potion"
            }),
            new Consumable({
                color: "#940063",
                modifiers: {
                    hp: -Math.floor(Math.random() * 10 - 5) - 20,
                    maxhp: Math.floor(Math.random() * 10 - 5) + 20
                },
                name: "Greater Health Limit Potion"
            })
        ];
        this.onUse = function (utils) {
            let item = itemList[Math.floor(Math.random() * itemList.length)];
            utils.player.inventory.addItem(item);
        };
    }
}
//# sourceMappingURL=Treasure.js.map