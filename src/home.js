
import { Heading } from "./htmlElements/heading";
import { Image } from "./htmlElements/image";
import { Input } from "./htmlElements/input";
import { Wrap } from "./htmlElements/wrap";
import { Paragraph } from "./htmlElements/paragraph";
import ChickenHome from "./images/chicken-home.png";

export class HomePage{ 
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