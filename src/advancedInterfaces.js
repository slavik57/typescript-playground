// The video for this file:
// https://youtu.be/AN8zXNm10Cw
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Item = (function () {
    function Item(id) {
        this.id = id;
    }
    return Item;
}());
var ItemsCache = (function () {
    function ItemsCache(itemsConstructor) {
        this.itemsConstructor = itemsConstructor;
        this.itemsCache = {};
    }
    ItemsCache.prototype.createItem = function (id) {
        if (!!this.itemsCache[id]) {
            return this.itemsCache[id];
        }
        var item = new this.itemsConstructor(id);
        this.itemsCache[id] = item;
        return item;
    };
    return ItemsCache;
}());
var cache = new ItemsCache(Item);
var item1 = cache.createItem('a');
var item2 = cache.createItem('b');
var item3 = cache.createItem('a');
console.log('item1:', item1);
console.log('item2:', item2);
console.log('item3:', item3);
console.log('item1 === item2:', item1 === item2);
console.log('item1 === item3:', item1 === item3);
var item4 = {
    id: 'new id'
};
console.log('item4:', item4);
var item5 = {
    id: 'new id2'
};
console.log('item5:', item5);
console.log('============');
console.log('============');
console.log('============');
var Control = (function () {
    function Control() {
    }
    Control.prototype.doStuff = function (control) {
        control.state = 'some state';
    };
    return Control;
}());
var CheckBox = (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        return _super.apply(this, arguments) || this;
    }
    CheckBox.prototype.select = function () {
    };
    return CheckBox;
}(Control));
var Button = (function () {
    function Button() {
    }
    Button.prototype.select = function () {
    };
    return Button;
}());
var selectableControl;
selectableControl = new CheckBox();
// These will yield errors:
// selectableControl = new Button();
//selectableControl.doStuff(new Button()); 
