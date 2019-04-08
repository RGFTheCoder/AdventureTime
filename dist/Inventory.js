import Item from "./Item";
export default class Inventory {
    constructor(size) {
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
    getItem(id) {
        return this.data[(id + this.size) % this.size];
    }
    setItem(id, newItem) {
        this.data[(id + this.size) % this.size] = newItem;
    }
    swapItem(id, newItem) {
        let old = this.data[(id + this.size) % this.size];
        this.data[(id + this.size) % this.size] = newItem;
        return old;
    }
    addItem(item) {
        let i = 0;
        while (i < this.size && !this.data[i].empty)
            i++;
        if (i == this.size) {
        }
        else {
            this.data[i] = item;
        }
    }
}
//# sourceMappingURL=Inventory.js.map