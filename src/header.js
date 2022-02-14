
import { Image } from "./htmlElements/image";
import { Link } from "./htmlElements/link";
import { List } from "./htmlElements/list";
import Logo from "./images/logo.png";

export class Header{

    _header = null;

    constructor(){
        this.setHeader();
    }
    
    setHeader(){
        this._header = document.createElement("header");
        const nav = document.createElement("nav");
        const logo = new Image(Logo, "TYL logo", "logo-header");

        const homeLink = new Link("#", "Home");
        const menuLink = new Link("#", "Menu");
        const aboutLink = new Link("#", "About Us");
        const listItems = Array(homeLink.getLink(), menuLink.getLink(), aboutLink.getLink());
        const list = new List(listItems, "home-nav-list");

        nav.append(logo.getImage());
        nav.append(list.createList());
        this._header.append(nav);
    }

    getHeader(){
        return this._header;
    }
}