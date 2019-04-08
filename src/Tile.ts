import Special from "./Special";

export default class Tile {
  type: string;
  special: Special[];
  color: string;
  up: Tile;
  down: Tile;
  left: Tile;
  right: Tile;
  drup: Tile;
  drdown: Tile;
  drleft: Tile;
  drright: Tile;
  constructor() {
    this.type = "Ocean";
    this.special = [];
    this.color = "#3355E4";
    this.up = this;
    this.down = this;
    this.left = this;
    this.right = this;
    this.drup = this;
    this.drdown = this;
    this.drleft = this;
    this.drright = this;
  }
}
