// The video for this file:
// https://youtu.be/AN8zXNm10Cw

interface ItemConstructor {
    new (id: string): IItem
}

interface IItem {
    id: string;
}

class Item implements IItem {
    constructor(public id: string) {
    }
}

interface ItemIdToItemMap {
    [id: string]: IItem;
}

class ItemsCache {
    private itemsCache: ItemIdToItemMap;

    constructor(
        private itemsConstructor: ItemConstructor) {
        this.itemsCache = {};
    }

    public createItem(id: string): IItem {
        if (!!this.itemsCache[id]) {
            return this.itemsCache[id];
        }

        const item: IItem =
            new this.itemsConstructor(id);

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

const item4: Item = {
    id: 'new id'
}
console.log('item4:', item4);

const item5 = <Item>{
    id: 'new id2'
}
console.log('item5:', item5);

console.log('============');
console.log('============');
console.log('============');

class Control {
    private state: any;
    doStuff(control: SelectableControl): void {
        control.state = 'some state';
    }
}

interface SelectableControl extends Control {
    select(): void;
}

class CheckBox extends Control {
    select(): void {
    }
}

class Button {
    select(): void {
    }
}

let selectableControl: SelectableControl;
selectableControl = new CheckBox();

// These will yield errors:
// selectableControl = new Button();
//selectableControl.doStuff(new Button());