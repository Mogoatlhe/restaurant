
import { Heading } from "./htmlElements/heading";
import { Paragraph } from "./htmlElements/paragraph";
import { Wrap } from "./htmlElements/wrap";

export class About{

    _whatWeDoContainer = null;

    constructor(){
        this.setAboutContainer();
    }

    setAboutContainer(){
        const heading = new Heading("h3", "What We Do", "what-we-do-heading");
        const paragraph1 = new Paragraph("Lorem ipsum dolor sit amet. Ab sapiente tempore aut repudiandae aspernatur in magnam enim eos accusantium recusandae vel",
        "what-we-do-paragraph");
        const whatWeDoImage = document.createElement("div");
        whatWeDoImage.classList.add("what-we-do-image");

        let children = new Array(heading.getHeading(), paragraph1.getParagraph());
        const whatWeDoTextContainer = new Wrap(children, "what-we-do-text-container");

        children = new Array(whatWeDoTextContainer.getWrap(), whatWeDoImage);
        this._whatWeDoContainer = new Wrap(children, "what-we-do-container");
    }

    getAboutContainer(){
        return this._whatWeDoContainer.getWrap();
    }
}
