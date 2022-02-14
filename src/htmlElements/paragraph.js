

export class Paragraph{

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