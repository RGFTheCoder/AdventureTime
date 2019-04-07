import Enemy from "../specials/Enemy";
import Treasure from "../specials/Treasure";

export default {
    type: {
        0.7: {
            type: "Desert",
            color: "#edc9af"
        },
        0.65: {
            type: "Forest",
            color: "#0e4d26",
        },
        0.55: {
            type: "Beach",
            color: "#f9cda8",
        }
    },
    special: {
        0.95: Treasure,
        0.90: Enemy,
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
                        workingTile.drup.down = workingTile.drup;
                        workingTile.drdown.up = workingTile.drdown;
                        workingTile.drleft.right = workingTile.drleft;
                        workingTile.drright.left = workingTile.drright;
                        workingTile.special = [];

                    }

                    if ((y > 1 && y < 5) && (x == 1 || x == 5)) { //left and right walls
                        workingTile.color = "#b2854b";
                        workingTile.type = "Wood Wall";
                        workingTile.drup.down = workingTile.drup;
                        workingTile.drdown.up = workingTile.drdown;
                        workingTile.drleft.right = workingTile.drleft;
                        workingTile.drright.left = workingTile.drright;
                        workingTile.special = [];
                    }

                    if ((y > 1 && y < 5) && (x > 1 && x < 5)) {
                        workingTile.color = "#bc9364";
                        workingTile.type = "Wood Ceiling";
                        workingTile.special = [];
                    }


                }
            }

            let room = util.makeBlankMap(11);

            for (let x = 0; x < room.length; x++) {
                for (let y = 0; y < room[x].length; y++) {
                    let workingTile = room[x][y];
                    workingTile.color = "#000000";
                    workingTile.type = "Empty";

                    if (x > 2 && x < 8 && (y == 3 || y == 7)) { //top and bottom walls
                        workingTile.color = "#b2854b";
                        workingTile.type = "Wood Wall";
                        workingTile.drup.down = workingTile.drup;
                        workingTile.drdown.up = workingTile.drdown;
                        workingTile.drleft.right = workingTile.drleft;
                        workingTile.drright.left = workingTile.drright;
                    }

                    if (y > 3 && y < 7 && (x == 3 || x == 7)) { //left and right walls
                        workingTile.color = "#b2854b";
                        workingTile.type = "Wood Wall";
                        workingTile.drup.down = workingTile.drup;
                        workingTile.drdown.up = workingTile.drdown;
                        workingTile.drleft.right = workingTile.drleft;
                        workingTile.drright.left = workingTile.drright;
                    }

                    if ((y > 3 && y < 7) && (x > 3 && x < 7)) {
                        workingTile.color = "#4f3d21";
                        workingTile.type = "Wood Floor";
                    }
                }
            }

            room[2 + 3][4 + 3].color = "#2a1f14";
            working[3][5].color = "#2a1f14";
            room[2 + 3][4 + 3].type = "Wood Door";
            working[3][5].type = "Wood Door";


            room[2 + 3][4 + 3].down = working[3][6];
            working[3][6].up = room[2 + 3][4 + 3];
            room[2 + 3][4 + 3].drup.down = room[2 + 3][4 + 3];

            //"#4f3d21";

            // console.log(working);
        }
    }]
};