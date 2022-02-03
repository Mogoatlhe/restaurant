import "./style.css";
import ChickenHome from "./chicken-home.jpg";
import Logo from "./logo.png";

class ListItem{

    _href;
    _textContent

    constructor(href, textContent){
        this._href = href;
        this._textContent = textContent;
    }

    createAchor(){

        const anchor = document.createElement("a");
        anchor.textContent = this._textContent;
        anchor.setAttribute("href", this._href);

        return anchor;

    }

    createListItem(){

        const listItem = document.createElement("li");

        listItem.append(this.createAchor());

        return listItem;

    }

}

class Header {
    
    _listItems;
    
    constructor(){
        const homeItem = new ListItem(".", "Home");
        const menuItem = new ListItem(".", "Menu");
        const aboutItem = new ListItem(".", "About Us");
        this._listItems = Array(homeItem.createListItem(), 
            menuItem.createListItem(), aboutItem.createListItem());
    }
    
    createList(){
        const list = document.createElement("ul");
        
        this._listItems.map(listItem => list.append(listItem));
        
        return list;
    }
    
    createLogo(){
        const logo = document.createElement("img");
        logo.setAttribute("alt", "TYL logo");
        logo.setAttribute("src", Logo);
        
        return logo;
    }
    
    createHeader(){
        const header = document.createElement("header");
        const nav = document.createElement("nav");
        
        nav.append(this.createLogo());
        nav.append(this.createList());
        header.append(nav);

        return header;
    }
}

const Display = (() => {
    const content = document.getElementById("content");
    
    const header = new Header();
    content.append(header.createHeader());
})();


