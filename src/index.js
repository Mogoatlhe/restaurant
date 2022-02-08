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
    _listClass = null;

    constructor(itemsArray, listClass){
        this._items = itemsArray;
        this._listClass = listClass;
    }

    createListItem(item){
        const listItem = document.createElement("li");
        listItem.append(item);

        return listItem;
    }

    createList(){
        const list = document.createElement("ul");
        list.classList.add(this._listClass);
        this._items.map(item => list.append(this.createListItem(item)));

        return list;
    }
}

class Image{
    _image;

     constructor(src, alt, className){
         this._image = document.createElement("img");
         this._image.setAttribute("src", src);
         this._image.setAttribute("alt", alt);

         if(className !== undefined){
             this._image.classList.add(className);
         }
     }

     getImage(){
         return this._image;
     }
}

class Heading{
    _heading = null;

    constructor(headingType, headingContent, headingClass){
        this._heading = document.createElement(headingType);
        this._heading.textContent = headingContent;
        this._heading.classList.add(headingClass);
    }

    getHeading(){
        return this._heading;
    }
}

class HomePage{ 
    _homeMain = null;

    constructor(main, navStatus){
        this._homeMain = main;
        navStatus.resetNavStatus();
        navStatus.setNavStatus(0);
    }

    createHomeContent(){
        const h2 = new Heading("h1", "Serving the best quality chicken", "tagline");
        const image = new Image(ChickenHome, "chicken breasts image", "home-image");

        this._homeMain.append(h2.getHeading());
        this._homeMain.append(image.getImage());

        return this._homeMain;
    }
}

class NavStatus{

    _navItems = null;

    constructor(){
        this._navItems = [...document.getElementsByClassName("home-nav-list")[0].childNodes];
    }

    resetNavStatus(){
        this._navItems.map(item => item.classList.remove("active"));
    }

    setNavStatus(position){
        this._navItems[position].classList.add("active");
    }
}

const DisplayPage = (() => {

    const content = document.getElementById("content");
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const main = document.createElement("main");

    const logo = new Image(Logo, "TYL logo", "logo-header");

    const homeLink = new Link("#", "Home");
    const menuLink = new Link("#", "Menu");
    const aboutLink = new Link("#", "About Us");

    const listItems = Array(homeLink.getLink(), menuLink.getLink(), aboutLink.getLink());
    const list = new List(listItems, "home-nav-list");
    
    
    nav.append(logo.getImage());
    nav.append(list.createList());
    header.append(nav);
    content.append(header);

    const navStatus = new NavStatus();
    const homePage = new HomePage(main, navStatus);
    
    content.append(homePage.createHomeContent());

})();