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
        //house
        rarity: 1 / 16,
        function (util) {
            let working = util.getTilesEuclidean(7, util.genTile.drleft.drleft.drleft.drup.drup.drup);
            for (let x = 0; x < working.length; x++) {
                for (let y = 0; y < working[x].length; y++) {
                    let workingTile = working[x][y];

                    if ((x > 0 && x < 6 && (y == 1 || y == 5))) { //top and bottom walls
                        workingTile.color = "#b2854b";
                        workingTile.type = "Wood Wall";
                    }

                    if ((y > 1 && y < 5) && (x == 1 || x == 5)) { //left and right walls
                        workingTile.color = "#b2854b";
                        workingTile.type = "Wood Wall";
                    }

                    if ((y > 1 && y < 5) && (x > 1 && x < 5)) {
                        workingTile.color = "#4f3d21";
                        workingTile.type = "Wood Floor";
                    }
                }
            }

            // console.log(working);
        }
    }]
};