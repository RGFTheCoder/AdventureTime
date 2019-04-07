import Item from "./Item";

export default function Inventory(size) {
    let data = [];
    for (let i = 0; i < size; i++) {
        data[i] = new Item();
        data[i].empty = true;
    }
    this.__proto__ = {
        getItems() {
            let out = [];
            for (let i = 0; i < size; i++) {
                out[i] = {};
                for (let j in data[i]) {
                    out[i][j] = data[i][j];
                }
            }
            return out;
        },
        getItem(id) {
            return data[(id + size) % size];
        },
        setItem(id, newItem) {
            data[(id + size) % size] = newItem;
        },
        swapItem(id, newItem) {
            let old = data[(id + size) % size];
            data[(id + size) % size] = newItem;
            return old;
        },
        addItem(item) {
            let i = 0;
            while (i < size && !data[i].empty) i++;
            if (i == size) {

            } else {
                data[i] = item;
            }
        }
    };
}