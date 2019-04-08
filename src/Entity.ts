export default class Entity {
  hp: number;
  maxhp: number;
  str: number;
  regen: string[];
  props: string[];
  constructor() {
    this.hp = Math.floor(Math.random() * 50) + 50;
    this.maxhp = this.hp;
    this.str = Math.floor(Math.random() * 10) + 10;
    this.regen = [];
    this.regen.push("hp");
    this.props = [];
    this.props.push("hp");
    this.props.push("maxhp");
    this.props.push("str");
  }

  step() {
    for (let i in this.regen) {
      this[this.regen[i]] += 0.02;
      if (this.getProp(this.regen[i]) > this.getProp("max" + this.regen[i])) {
        this[this.regen[i]] = this.getProp("max" + this.regen[i]);
      }
    }
  }

  getProp(name: string) {
    return this[name];
  }
}
