

export class Input{
    
    _input = null;

    constructor(type, inputClass, inputValue, inputName){
        this._input = document.createElement("input");
        this._input.setAttribute("type", type);
        this._input.setAttribute("class", inputClass);
        this._input.setAttribute("value", inputValue);
        
        if(inputName !== undefined){
            this._input.setAttribute("name", inputName);
        }
    }

    getInput(){
        return this._input;
    }

}