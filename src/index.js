import "./style.css";
import { Main } from "./htmlElements/main";
import { HomePage } from "./home";
import { Menu } from "./menu";
import { About } from "./about-us";
import { Header } from "./header";
import { NavStatus } from "./navStatus";
import { Footer } from "./footer";

const DisplayPage = (() => {

    const content = document.getElementById("content");
    const main = document.createElement("main");
    
    const header = new Header();
    content.append(header.getHeader());

    const navStatus = new NavStatus();
    const homePage = new HomePage(main, navStatus);
    content.append(homePage.createHomeContent());

    const footer = new Footer();
    content.append(footer.getFooter());

    const navigation = document.getElementsByClassName("home-nav-list");
    const navItems = [...(navigation[0].children)];
    
    navItems.map((navItem, position) => {
        navItem.addEventListener("click", () => {
            if(navItem.classList.contains("active")){
                return;
            }

            const mainTag = new Main();

            navStatus.resetNavStatus();
            navStatus.setNavStatus(position);

            mainTag.removeChildren();

            if(position === 0){
                mainTag.removeMain();
                content.insertBefore(homePage.createHomeContent(), footer.getFooter());
            }else if(position === 1){
                const menu = new Menu();
                mainTag.addChildren(menu.getItemsContainer());
            }else{
                const about = new About();
                mainTag.addChildren(about.getAboutContainer());
            }
    
        });
    });
})();