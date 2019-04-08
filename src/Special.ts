export default class Special {
  special: string;
  color: string;
  onUse: Function;
  onWalk: Function;
  constructor(object) {
    this.special = object.special;
    this.color = object.color;
    this.onUse = () => {};
    this.onWalk = () => {};
  }
}
