export default class Tile {
    constructor() {
        this.type = "🌊|Ocean";
        this.special = "🔲|Nothing";
        this.color = "#3355E4";
        this.scolor = "#00000000";
        this.up = null;
        this.down = null;
        this.left = null;
        this.right = null;
    }

    toString() {
        return "\n" + "🚫" + this.up.type.split("|")[0] + "🚫" +
            "\n" + this.left.type.split("|")[0] + this.type.split("|")[0] + this.right.type.split("|")[0] +
            "\n" + "🚫" + this.down.type.split("|")[0] + "🚫" + "\n";
    }

    toStringSpe() {
        return "\n" + "🚫" + this.up.special.split("|")[0] + "🚫" +
            "\n" + this.left.special.split("|")[0] + this.special.split("|")[0] + this.right.special.split("|")[0] +
            "\n" + "🚫" + this.down.special.split("|")[0] + "🚫" + "\n";
    }

    toString2() {
        return "\n" + this.up.left.type.split("|")[0] + this.up.type.split("|")[0] + this.up.right.type
            .split("|")[0] +
            "\n" + this.left.type.split("|")[0] + this.type.split("|")[0] + this.right.type.split("|")[0] +
            "\n" + this
            .down.left.type.split("|")[0] + this.down.type.split("|")[0] + this.down.right.type.split("|")[
                0] + "\n";
    }

    toStringSpe2() {
        return "\n" + this.up.left.special.split("|")[0] + this.up.special.split("|")[0] + this.up.right
            .special
            .split("|")[0] +
            "\n" + this.left.special.split("|")[0] + this.special.split("|")[0] + this.right.special.split(
                "|")[0] +
            "\n" + this
            .down.left.special.split("|")[0] + this.down.special.split("|")[0] + this.down.right.special
            .split("|")[
                0] + "\n";
    }
}