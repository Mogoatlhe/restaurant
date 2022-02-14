

export class NavStatus{

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