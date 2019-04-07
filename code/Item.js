export default class Item {
    constructor() {

        this.onUse = (utils) => {};
        this.onStep = () => {};
        this.empty = false;
        this.color = "#cccccc";
        this.useCooldown = 0;
        this.maxCooldown = 10;
        this.name = "???";

        this.step = setInterval(() => {
            if (this.useCooldown > 0) {
                this.useCooldown--;
            }
            this.onStep();
        }, 1000 / 10);

    }

    use(utils) {
        if (this.useCooldown <= 0) {
            this.useCooldown = this.maxCooldown;
            this.onUse(utils);
        }
    }

    delete() {
        this.onUse = (utils) => {};
        this.onStep = () => {};
        this.empty = false;
        this.color = "#cccccc";
        this.useCooldown = 0;
        this.maxCooldown = 10;
        clearInterval(this.step);
        this.step = setInterval(() => {
            if (this.useCooldown > 0) {
                this.useCooldown--;
            }
            onStep();
        }, 1000 / 10);
    }
}