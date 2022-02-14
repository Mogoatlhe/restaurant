
export class Heading{
    _heading = null;

    constructor(headingType, headingContent, headingClass){
        this.setHeading(headingType, headingContent, headingClass);
    }

    setHeading(headingType, headingContent, headingClass){
        this._heading = document.createElement(headingType);
        this._heading.textContent = headingContent;
        this._heading.classList.add(headingClass);
    }
    

    getHeading(){
        return this._heading;
    }
}