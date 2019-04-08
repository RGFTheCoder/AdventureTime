import Item from "./Item";

export default class Consumable extends Item {
  constructor(addProps) {
    addProps = addProps || {};
    super({});

    this.onUse = function(utils) {
      for (let i in this.props) {
        utils.player[this.props[i]] += this.getProp(this.props[i]);
      }
      let blank: Item = new Item();
      blank.empty = true;
      utils.player.inventory.setItem(utils.id, blank);
    };

    for (let i in addProps) {
      this[i] = addProps[i];
    }
  }
}
