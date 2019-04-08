import Treasure from "../Treasure";
import Item from "../../Item";
import Enchantment from "../../Enchantment";
import Consumable from "../../Consumable";

export default class LegendaryTreasure extends Treasure {
  constructor() {
    super([
      new Item({
        color: "#DAA520",
        modifiers: {
          str: Math.floor(Math.random() * 100 - 50) + 100
        },
        name: "Divine Sword"
      }),
      new Enchantment({
        color: "#DAA520",
        modifiers: {
          str: Math.floor(Math.random() * 100 - 50) + 100
        },
        name: "Divine Enchantment"
      }),
      new Consumable({
        color: "#DAA520",
        modifiers: {
          hp: Math.floor(Math.random() * 100 - 50) + 100
        },
        name: "Divine Health Potion"
      }),
      new Consumable({
        color: "#DAA520",
        modifiers: {
          mp: Math.floor(Math.random() * 100 - 50) + 100
        },
        name: "Divine Mana Potion"
      }),
      new Consumable({
        color: "#DAA520",
        modifiers: {
          mp: Math.floor(Math.random() * 20),
          maxmp: Math.floor(Math.random() * 100 - 50) + 100
        },
        name: "Divine Mana Limit Potion"
      }),
      new Consumable({
        color: "#DAA520",
        modifiers: {
          hp: Math.floor(Math.random() * 20),
          maxhp: Math.floor(Math.random() * 100 - 50) + 100
        },
        name: "Divine Health Limit Potion"
      })
    ]);
  }
}
