import Enchantment from "./Enchantment";
import Player from "./Player";

export default class Item {
  onUse: Function;
  onStep: Function;
  empty: boolean;
  color: string;
  useCooldown: number;
  maxCooldown: number;
  name: string;
  modifiers: {};
  enchantments: Enchantment[];
  props: string[];
  step: number;

  constructor(addProps?: object) {
    addProps = addProps || {};
    this.onUse = () => {};
    this.onStep = () => {};
    this.empty = false;
    this.color = "#cccccc";
    this.useCooldown = 0;
    this.maxCooldown = 10;
    this.name = "???";
    this.modifiers = {};
    this.enchantments = [];
    this.props = ["str", "hp", "mp", "maxhp", "maxmp"];

    this.step = setInterval(() => {
      if (this.useCooldown > 0) {
        this.useCooldown--;
      }
      this.onStep();
    }, 1000 / 10);

    Object.assign(this,addProps);
  }

  use(utils: {
    player: Player;
    id: number;
    Tile: Function;
  }) {
    if (this.useCooldown <= 0) {
      this.useCooldown = this.maxCooldown;
      this.onUse(utils);
    }
  }

  delete() {
    this.onUse = (utils: {
      player: Player;
      id: number;
      Tile: Function;
    }) => {};
    this.onStep = (utils: {
      player: Player;
      id: number;
      Tile: Function;
    }) => {};
    this.empty = false;
    this.color = "#cccccc";
    this.useCooldown = 0;
    this.maxCooldown = 10;
    clearInterval(this.step);
    this.step = setInterval(() => {
      if (this.useCooldown > 0) {
        this.useCooldown--;
      }
      this.onStep();
    }, 1000 / 10);
  }

  getProp(name:string) {
    let out = this.modifiers[name] || this[name] || 0;
    for (let i in this.enchantments) {
      out += this.enchantments[i].getProp(name) || 0;
    }
    return out;
  }
}
