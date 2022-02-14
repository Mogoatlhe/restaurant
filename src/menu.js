
import items from "./data/data";
import { Image } from "./htmlElements/image";
import { Heading } from "./htmlElements/heading";
import { Paragraph } from "./htmlElements/paragraph";
import { Wrap } from "./htmlElements/wrap";

export class Menu{

    _itemContainerArr = null;

    constructor(){
        this._itemContainerArr = new Array();
        this.setMenuItem(items);
    }

    setMenuItem(items){

        items.map((item) => {

            const img = new Image(item.path, item.alt, "item-image");
            const h4 = new Heading("h4", item.name, "item-name");
            const price = new Paragraph(item.price, "item-price");
            const itemContainerChild = new Array(img.getImage(), h4.getHeading(), price.getParagraph());

            const itemContainer = new Wrap(itemContainerChild, "item-container");
             
            this._itemContainerArr.push(itemContainer.getWrap());
            
        });
    }
    
    getItemsContainer(){
        const itemsContainer = new Wrap(this._itemContainerArr, "items-container");
        return itemsContainer.getWrap();
    }
}