import Treasure from "../Treasure";
import Item from "../../Item";
import Enchantment from "../../Enchantment";
import Consumable from "../../Consumable";

export default class GoodTreasure extends Treasure {
  constructor() {
    super([
      new Item({
        color: "#8c8c8c",
        modifiers: {
          str: Math.floor(Math.random() * 5 - 2.5) + 15
        },
        name: "Strong Sword"
      }),
      new Enchantment({
        color: "#8c8c8c",
        modifiers: {
          str: Math.floor(Math.random() * 5 - 2.5) + 15
        },
        name: "Strong Enchantment"
      }),
      new Consumable({
        color: "#8c8c8c",
        modifiers: {
          hp: Math.floor(Math.random() * 5 - 2.5) + 15
        },
        name: "Greater Health Potion"
      }),
      new Consumable({
        color: "#8c8c8c",
        modifiers: {
          mp: Math.floor(Math.random() * 5 - 2.5) + 15
        },
        name: "Greater Mana Potion"
      }),
      new Consumable({
        color: "#8c8c8c",
        modifiers: {
          mp: -(Math.floor(Math.random() * 5 - 2.5) + 5),
          maxmp: Math.floor(Math.random() * 5 - 2.5) + 15
        },
        name: "Greater Mana Limit Potion"
      }),
      new Consumable({
        color: "#8c8c8c",
        modifiers: {
          hp: -(Math.floor(Math.random() * 5 - 2.5) + 5),
          maxhp: Math.floor(Math.random() * 5 - 2.5) + 15
        },
        name: "Greater Health Limit Potion"
      })
    ]);
  }
}
