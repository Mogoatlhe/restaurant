

export class List{
    _items = null;
    _listClass = null;

    constructor(itemsArray, listClass){
        this._items = itemsArray;
        this._listClass = listClass;
    }

    createListItem(item){
        const listItem = document.createElement("li");
        listItem.append(item);

        return listItem;
    }

    createList(){
        const list = document.createElement("ul");
        list.classList.add(this._listClass);
        this._items.map(item => list.append(this.createListItem(item)));

        return list;
    }
}