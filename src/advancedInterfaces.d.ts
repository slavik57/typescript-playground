interface ItemConstructor {
    new (id: string): IItem;
}
interface IItem {
    id: string;
}
declare class Item implements IItem {
    id: string;
    constructor(id: string);
}
interface ItemIdToItemMap {
    [id: string]: IItem;
}
declare class ItemsCache {
    private itemsConstructor;
    private itemsCache;
    constructor(itemsConstructor: ItemConstructor);
    createItem(id: string): IItem;
}
declare const cache: ItemsCache;
declare const item1: IItem;
declare const item2: IItem;
declare const item3: IItem;
declare const item4: Item;
declare const item5: Item;
declare class Control {
    private state;
    doStuff(control: SelectableControl): void;
}
interface SelectableControl extends Control {
    select(): void;
}
declare class CheckBox extends Control {
    select(): void;
}
declare class Button {
    select(): void;
}
declare let selectableControl: SelectableControl;
