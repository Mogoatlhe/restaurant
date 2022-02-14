export class Main{

    _main = null;

    constructor(){
        this._main = document.getElementsByTagName("main")[0];
    }

    removeChildren(){

        const childNodes = [...this._main.children];

        childNodes.map(childNode => this._main.removeChild(childNode));
    }

    removeMain(){
        this._main.remove();
    }

    addChildren(children){
        this._main.append(children);
    }
}