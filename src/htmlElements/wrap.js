

export class Wrap{

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