// The video for this file:
// https://youtu.be/AN8zXNm10Cw
class Item {
    constructor(id) {
        this.id = id;
    }
}
class ItemsCache {
    constructor(itemsConstructor) {
        this.itemsConstructor = itemsConstructor;
        this.itemsCache = {};
    }
    createItem(id) {
        if (!!this.itemsCache[id]) {
            return this.itemsCache[id];
        }
        const item = new this.itemsConstructor(id);
        this.itemsCache[id] = item;
        return item;
    }
}
const cache = new ItemsCache(Item);
const item1 = cache.createItem('a');
const item2 = cache.createItem('b');
const item3 = cache.createItem('a');
console.log('item1:', item1);
console.log('item2:', item2);
console.log('item3:', item3);
console.log('item1 === item2:', item1 === item2);
console.log('item1 === item3:', item1 === item3);
const item4 = {
    id: 'new id'
};
console.log('item4:', item4);
const item5 = {
    id: 'new id2'
};
console.log('item5:', item5);
console.log('============');
console.log('============');
console.log('============');
class Control {
    doStuff(control) {
        control.state = 'some state';
    }
}
class CheckBox extends Control {
    select() {
    }
}
class Button {
    select() {
    }
}
let selectableControl;
selectableControl = new CheckBox();
// These will yield errors:
// selectableControl = new Button();
//selectableControl.doStuff(new Button()); 
