import Treasure from "../Treasure";
import Item from "../../Item";
import Enchantment from "../../Enchantment";
import Consumable from "../../Consumable";

export default class BasicTreasure extends Treasure {
  constructor() {
    super([
      new Item({
        color: "#404040",
        modifiers: {
          str: Math.floor(Math.random() * 10 - 2.5) + 10
        },
        name: "Normal Sword"
      }),
      new Enchantment({
        color: "#404040",
        modifiers: {
          str: Math.floor(Math.random() * 10 - 2.5) + 10
        },
        name: "Normal Enchantment"
      }),
      new Consumable({
        color: "#404040",
        modifiers: {
          hp: Math.floor(Math.random() * 10 - 2.5) + 10
        },
        name: "Health Potion"
      }),
      new Consumable({
        color: "#404040",
        modifiers: {
          mp: Math.floor(Math.random() * 10 - 2.5) + 10
        },
        name: "Mana Potion"
      }),
      new Consumable({
        color: "#404040",
        modifiers: {
          mp: -(Math.floor(Math.random() * 10 - 2.5) + 10),
          maxmp: Math.floor(Math.random() * 10 - 2.5) + 10
        },
        name: "Mana Limit Potion"
      }),
      new Consumable({
        color: "#404040",
        modifiers: {
          hp: -(Math.floor(Math.random() * 10 - 2.5) + 10),
          maxhp: Math.floor(Math.random() * 10 - 2.5) + 10
        },
        name: "Health Limit Potion"
      })
    ]);
  }
}
