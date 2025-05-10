class Menu { 
    constructor(elem) { 
        this._elem = elem; 
        elem.onclick = this.onClick.bind(this);
    } 

    remove() {
        tableRowRemove();
    };
    prepend() {
        prependSavedRow();
    }
    returnToStart() {
        replaceInconsistancy();
    }
    replace() {
        replaceFirstANDLast()
    }

    onClick(event) {
        let action = event.target.dataset.action; 
        if (action) { 
            this[action](); 
        } 
    } 
} 
new Menu(document.getElementById("tableOperationsMenu"));