import "./style.css";
import ChickenHome from "./chicken-home.png";
import Logo from "./logo.png";

class Link{
    _link = null;

    constructor(href, textContent){
        this._link = document.createElement("a");
        this._link.textContent = textContent;
        this._link.setAttribute("href", href);
    }

    getLink(){
        return this._link;
    }
}

class List{
    _items = null;

    constructor(itemsArray){
        this._items = itemsArray;
    }

    createListItem(item){
        const listItem = document.createElement("li");
        listItem.append(item);

        return listItem;
    }

    createList(){
        const list = document.createElement("ul");
        this._items.map(item => list.append(this.createListItem(item)));

        return list;
    }
}

class Image{
    _image;

     constructor(src, alt){
         this._image = document.createElement("img");
         this._image.setAttribute("src", src);
         this._image.setAttribute("alt", alt);
     }

     getImage(){
         return this._image;
     }
}

const DisplayPage = (() => {

    const content = document.getElementById("content");
    const header = document.createElement("header");
    const nav = document.createElement("nav");

    const logo = new Image(Logo, "TYL logo");

    const homeLink = new Link("#", "Home");
    const menuLink = new Link("#", "Menu");
    const aboutLink = new Link("#", "About US");

    const listItems = Array(homeLink.getLink(), menuLink.getLink(), aboutLink.getLink());
    const list = new List(listItems);

    nav.append(logo.getImage());
    nav.append(list.createList());
    header.append(nav);
    content.append(header);

})();