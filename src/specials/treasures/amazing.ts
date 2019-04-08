import Treasure from "../Treasure";
import Item from "../../Item";
import Enchantment from "../../Enchantment";
import Consumable from "../../Consumable";

export default class AmazingTreasure extends Treasure {
  constructor() {
    super([
      new Item({
        color: "#9400d3",
        modifiers: {
          str: Math.floor(Math.random() * 10 - 5) + 20
        },
        name: "Holy Sword"
      }),
      new Enchantment({
        color: "#9400d3",
        modifiers: {
          str: Math.floor(Math.random() * 10 - 5) + 20
        },
        name: "Holy Enchantment"
      }),
      new Consumable({
        color: "#9400d3",
        modifiers: {
          hp: Math.floor(Math.random() * 10 - 5) + 20
        },
        name: "Holy Health Potion"
      }),
      new Consumable({
        color: "#9400d3",
        modifiers: {
          mp: Math.floor(Math.random() * 10 - 5) + 20
        },
        name: "Holy Mana Potion"
      }),
      new Consumable({
        color: "#9400d3",
        modifiers: {
          mp: -(Math.floor(Math.random() * 10 - 2.5)),
          maxmp: Math.floor(Math.random() * 10 - 5) + 20
        },
        name: "Holy Mana Limit Potion"
      }),
      new Consumable({
        color: "#9400d3",
        modifiers: {
          hp: -(Math.floor(Math.random() * 10 - 2.5)),
          maxhp: Math.floor(Math.random() * 10 - 5) + 20
        },
        name: "Holy Health Limit Potion"
      })
    ]);
  }
}
