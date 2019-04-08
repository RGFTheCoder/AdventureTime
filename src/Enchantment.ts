import Item from "./Item";
import Player from "./Player";
import Special from "./Special";

export default class Enchantment extends Item {
  private mpUsage: number;
  constructor(addProps: object) {
    addProps = addProps || {};
    super({});

    this.mpUsage = 50 + Math.round(Math.random() * 20) - 10;
    this.props.push("mpUsage");
    this.onUse = function(utils: {
      player: Player;
      special: Special[];
      id: number;
    }) {
      if (utils.player.mp > this.mpUsage) {
        utils.player.inventory.getItem(0).enchantments.push(this);
        let blank: Item = new Item();
        blank.empty = true;
        utils.player.inventory.setItem(utils.id, blank);
        utils.player.mp -= this.mpUsage;
      }
    };

    Object.assign(this, addProps);
  }
}
