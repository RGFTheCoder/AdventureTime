export default {
    type: {
        0.7: {
            type: "❤️|Desert",
            color: "#edc9af"
        },
        0.65: {
            type: "🌲|Forest",
            color: "#0e4d26",
        },
        0.55: {
            type: "🏖️|Beach",
            color: "#f9cda8",
        }
    },
    special: {
        0.95: {
            special: "💎|Treasure",
            scolor: "#DAA520",
        }
    },
    z: 0,
    sudo(util) {},
    structures: [{
        rarity: 1 / 16,
        function (util) {
            let working = util.getTilesEuclidean(7, util.genTile.drleft.drleft.drleft.drup.drup.drup);
            for (let x = 0; x < working.length; x++) {
                for (let y = 0; y < working[x].length; y++) {
                    let workingTile = working[x][y];
                    
                    workingTile.color = "#000000";
                    workingTile.type = "Wood Wall";
                }
            }

            // console.log(working);
        }
    }]
};