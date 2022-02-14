
import { IdiomaticText } from "./htmlElements/idiomaticText";
import { Link } from "./htmlElements/link";
import { List } from "./htmlElements/list";
import { Paragraph } from "./htmlElements/paragraph";
import { Wrap } from "./htmlElements/wrap";

export class Footer{

    _footer = null;

    constructor(){
        this.setFooter();
    }

    setFooter(){

        this._footer = document.createElement("footer");
        
        const facebook = new IdiomaticText("fa-brands fa-facebook-square");
        const instagram = new IdiomaticText("fa-brands fa-instagram-square");
        const messenger = new IdiomaticText("fa-brands fa-facebook-messenger");
        const github = new IdiomaticText("fa-brands fa-github-square");
        
        const facebookLink = new Link("https://web.facebook.com/pg/ThuanyoYaLesediPoultry/about/",
        facebook.getITag(), false);
        const instagramLink = new Link("https://instagram.com/thuanyo_ya_lesedi_poultry_/",
        instagram.getITag(), false);
        const messengerLink = new Link("https://m.me/ThuanyoYaLesediPoultry/",
        messenger.getITag(), false);
        const githubLink = new Link("https://github.com/mogoatlhe",
        github.getITag(), false);
        const footerLinkItems = Array(facebookLink.getLink(), instagramLink.getLink(), messengerLink.getLink());
        const creatorLinkItems = Array(githubLink.getLink());
        
        const footerList = new List(footerLinkItems, "footer-socials-list");
        const creatorList = new List(creatorLinkItems, "creator-socials");
        const paragraph = new Paragraph("Contact Us", "contact-us-text");
        const wrap = new Wrap(Array(paragraph.getParagraph(), footerList.createList()),
        "company-socials");
        
        this._footer.append(wrap.getWrap());
        
        paragraph.setParagraph("Created by:", "creator-text");
        wrap.setWrap(Array(paragraph.getParagraph(), creatorList.createList()),
        "creator-container");
        this._footer.append(wrap.getWrap());
    }

    getFooter(){
        return this._footer;
    }
}