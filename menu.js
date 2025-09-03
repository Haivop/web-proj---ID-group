class Menu { 
    constructor(elem) { 
        this._elem = elem; 
        elem.onclick = this.onClick.bind(this);
    } 


    onClick(event) {
        let action = event.target.dataset.action; 
        if (action) { 
            this[action](); 
        } 
    } 
} 
new Menu(document.getElementById("tableOperationsMenu"));