

export class IdiomaticText{

    _iTag = null;

    constructor(className){
        this._iTag = document.createElement("i");
        this.assignClassNames(className);
    }

    assignClassNames(className){
        const classNameArr = className.split(" ");
        classNameArr.map(currClass => this._iTag.classList.add(currClass));
    }

    getITag(){
        return this._iTag;
    }
}