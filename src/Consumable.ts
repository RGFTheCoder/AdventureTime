import Item from "./Item";
import Player from "./Player";

export default class Consumable extends Item {
  constructor(addProps: any) {
    addProps = addProps || {};
    super({});

    this.onUse = function(utils: {
      player: Player;
      id: number;
      Tile: Function;
    }) {
      for (let i in this.props) {
        utils.player[this.props[i]] += this.getProp(this.props[i]);
      }
      let blank: Item = new Item();
      blank.empty = true;
      utils.player.inventory.setItem(utils.id, blank);
    };

    Object.assign(this, addProps);
  }
}
