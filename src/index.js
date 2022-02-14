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
        this.setHeading(headingType, headingContent, headingClass);
    }

    setHeading(headingType, headingContent, headingClass){
        this._heading = document.createElement(headingType);
        this._heading.textContent = headingContent;
        this._heading.classList.add(headingClass);
    }
    

    getHeading(){
        return this._heading;
    }
}

class Paragraph{

    _paragraph = null;

    constructor(content, className){
        this.setParagraph(content, className);
    }
    
    setParagraph(content, className){
        this._paragraph = document.createElement("p");
        this._paragraph.classList.add(className);
        this._paragraph.textContent = content;
    }

    getParagraph(){
        return this._paragraph;
    }
}

class Wrap{

    _div = null;

    constructor(children, wrapClass){
        this.setWrap(children, wrapClass);
    }
    
    setWrap(children, wrapClass){
        this._div = document.createElement("div");
        this._div.classList.add(wrapClass);
        
        children.map( child => this._div.append(child));
    }

    getWrap(){
        return this._div;
    }
}

class Input{
    
    _input = null;

    constructor(type, inputClass, inputValue, inputName){
        this._input = document.createElement("input");
        this._input.setAttribute("type", type);
        this._input.setAttribute("class", inputClass);
        this._input.setAttribute("value", inputValue);
        
        if(inputName !== undefined){
            this._input.setAttribute("name", inputName);
        }
    }

    getInput(){
        return this._input;
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
        const h1 = new Heading("h1", "Serving the best quality chicken", "tagline");
        const h3 = new Heading("h3", "About"
        , "about-heading");
        const image = new Image(ChickenHome, "chicken breasts image", "home-image");
        const menuButton = new Input("button", "menu-button", "View Menu");
        let children = new Array(h1.getHeading(), menuButton.getInput());
        const wrap = new Wrap(children, "heading-wrap");
        const paragraph = new Paragraph("Lorem ipsum dolor sit amet. Ab sapiente tempore aut repudiandae aspernatur in magnam enim eos accusantium recusandae vel totam aperiam est quas tempore! Sed minima dignissimos et delectus quia non praesentium velit in Quis repellendus sit dolorem molestiae. Non commodi repudiandae ea voluptates ipsum At iure impedit. Et esse voluptate aut dolores dolore et blanditiis veritatis. maxime deleniti ut illum dolorem sed nostrum cupiditate eum ipsa quae vel incidunt cupiditate. Et sunt autem id incidunt distinctio aut quis voluptatem.",
        "about-paragraph");


        this._homeMain.append(wrap.getWrap());
        this._homeMain.append(image.getImage());

        children = new Array(h3.getHeading(), paragraph.getParagraph());
        wrap.setWrap(children, "about-container");
         
        this._homeMain.append(wrap.getWrap());

        h3.setHeading("h3", "Hours", "hours-heading");
        paragraph.setParagraph("Mon - Fri : 8am - 5pm", "hours-paragraph");
        children = new Array(h3.getHeading(), paragraph.getParagraph());
        wrap.setWrap(children, "hours-container");

        this._homeMain.append(wrap.getWrap());
        
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