export default {
    type: {
        0.7: {
            type: "❤️|Hellcore",
            color: "#4e0100"
        },
        0.65: {
            type: "❤️|Netherrack",
            color: "#810200"
        },
        0.55: {
            type: "❤️|Sand",
            color: "#5e140d"
        },
        0: {
            type: "❤️|Lava",
            color: "#ff4500"
        }
    },
    special: {
        1: {
            special: "💎|Treasure",
            scolor: "#DAA520"
        }
    },
    z: 1,
    sudo(util) { },
    structures: [
        {
            rarity: 0,
            function(util) {
                console.log(util);
            }
        }
    ]
};
//# sourceMappingURL=hell.js.map