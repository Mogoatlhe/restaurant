

export class Link{
    _link = null;

    constructor(href, content, text){
        this._link = document.createElement("a");

        if(text === undefined || text === true){
            this._link.textContent = content;
        }else{
            this._link.append(content);
        }
        this._link.setAttribute("href", href);
    }

    getLink(){
        return this._link;
    }
}