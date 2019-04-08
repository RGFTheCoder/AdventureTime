import Player from "./Player";

export default class Special {
  special: string;
  color: string;
  onUse: Function;
  onWalk: Function;
  constructor(object:{special:string,color:string}) {
    this.special = object.special;
    this.color = object.color;
    this.onUse = (utils: {
      player: Player;
      special: Special[];
      id: number;
    }) => {};
    this.onWalk = (utils: {
      player: Player;
      special: Special[];
      id: number;
    }) => {};
  }
}
