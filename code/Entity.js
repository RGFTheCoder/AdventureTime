export default class Entity {
    constructor() {
        this.hp = Math.floor(Math.random() * 50) + 50;
        this.maxhp = this.hp;
        this.str = Math.floor(Math.random() * 10) + 10;
        this.regen = [];
        this.regen.push("hp");
    }

    step() {
        for (let i in this.regen) {
            this[this.regen[i]] += 0.25;
            if (this[this.regen[i]] > this["max" + this.regen[i]]) {
                this[this.regen[i]] = this["max" + this.regen[i]];
            }
        }
    }

    getProp(name) {
        return this[name];
    }
}