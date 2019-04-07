import Special from "../Special";
import Item from "../Item";
import Enchantment from "../Enchantment";

export default class Treasure extends Special {
    constructor() {
        super({
            special: "Treasure",
            color: "#DAA520",
            onWalk(utils) {},
            onUse(utils) {},
        });
        let itemList = [new Item(),new Item(),new Item(),new Item(),new Item(),new Enchantment()];
        itemList[0].color = "#a28e50";
        itemList[0].modifiers.str = Math.floor(Math.random() * 5 - 2.5) + 10;
        itemList[0].name = "Weak Sword";
        
        itemList[1].color = "#ff7f50";
        itemList[1].modifiers.str = Math.floor(Math.random() * 20 - 10) + 10;
        itemList[1].name = "Wacky Sword";
        
        itemList[2].color = "#808080";
        itemList[2].modifiers.str = Math.floor(Math.random() * 10 - 2.5) + 10;
        itemList[2].name = "Better Sword";
        
        itemList[3].color = "#dcdcdc";
        itemList[3].modifiers.str = Math.floor(Math.random() * 5 - 2.5) + 15;
        itemList[3].name = "Strong Sword";
        
        itemList[4].color = "#9400d3";
        itemList[4].modifiers.str = Math.floor(Math.random() * 10 - 5) + 20;
        itemList[4].name = "Powerful Sword";
        
        itemList[5].color = "#9400d3";
        itemList[5].modifiers.str = Math.floor(Math.random() * 10 - 5) + 20;
        itemList[5].name = "Powerful Enchantment";
        
        

        this.onUse = function (utils) {

            let item = itemList[Math.floor(Math.random() * itemList.length)];
            utils.player.inventory.addItem(item);
        }
    }
}