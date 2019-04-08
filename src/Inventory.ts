import Item from "./Item";

export default class Inventory {
  private data: Item[];
  private size: number;

  constructor(size: number) {
    this.data = [];
    this.size = size;
    for (let i = 0; i < size; i++) {
      this.data[i] = new Item();
      this.data[i].empty = true;
    }
  }

  getItems() {
    let out = [];
    for (let i = 0; i < this.size; i++) {
      out[i] = {};
      for (let j in this.data[i]) {
        out[i][j] = this.data[i][j];
      }
    }
    return out;
  }

  getItem(id: number) {
    return this.data[(id + this.size) % this.size];
  }

  setItem(id: number, newItem: Item) {
    this.data[(id + this.size) % this.size] = newItem;
  }

  swapItem(id: number, newItem: Item) {
    let old = this.data[(id + this.size) % this.size];
    this.data[(id + this.size) % this.size] = newItem;
    return old;
  }

  addItem(item: Item) {
    let i = 0;
    while (i < this.size && !this.data[i].empty) i++;
    if (i == this.size) {
    } else {
      this.data[i] = item;
    }
  }
}
