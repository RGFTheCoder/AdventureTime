export default class Item {
    constructor(addProps) {
        addProps = addProps || {};
        this.onUse = () => { };
        this.onStep = () => { };
        this.empty = false;
        this.color = "#cccccc";
        this.useCooldown = 0;
        this.maxCooldown = 10;
        this.name = "???";
        this.modifiers = {};
        this.enchantments = [];
        this.props = ["str", "hp", "mp", "maxhp", "maxmp"];
        this.step = setInterval(() => {
            if (this.useCooldown > 0) {
                this.useCooldown--;
            }
            this.onStep();
        }, 1000 / 10);
        for (let i in addProps) {
            this[i] = addProps[i];
        }
    }
    use(utils) {
        if (this.useCooldown <= 0) {
            this.useCooldown = this.maxCooldown;
            this.onUse(utils);
        }
    }
    delete() {
        this.onUse = utils => { };
        this.onStep = () => { };
        this.empty = false;
        this.color = "#cccccc";
        this.useCooldown = 0;
        this.maxCooldown = 10;
        clearInterval(this.step);
        this.step = setInterval(() => {
            if (this.useCooldown > 0) {
                this.useCooldown--;
            }
            this.onStep();
        }, 1000 / 10);
    }
    getProp(name) {
        let out = this.modifiers[name] || this[name] || 0;
        for (let i in this.enchantments) {
            out += this.enchantments[i].getProp(name) || 0;
        }
        return out;
    }
}
//# sourceMappingURL=Item.js.map