export default function Inventory(size) {
    let data = [];
    for (let i = 0; i < size; i++) {
        data[i] = {
            onUse() {},
            empty: true,
            color: "#cccccc"
        };
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
            let out = {};
            for (let j in data[id]) {
                out[j] = data[id][j];
            }
            return out;
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