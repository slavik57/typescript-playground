// The video for this file:
// https://youtu.be/Hr6CXYUEmaM
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var StringBuilder = (function () {
    function StringBuilder(value) {
        if (value === void 0) { value = ''; }
        this.value = value;
    }
    StringBuilder.prototype.append = function (text) {
        this.value += text;
        return this;
    };
    StringBuilder.prototype.appendLine = function (line) {
        this.value += line + '\n';
        return this;
    };
    StringBuilder.prototype.result = function () {
        return this.value;
    };
    return StringBuilder;
}());
exports.StringBuilder = StringBuilder;
var ObjectStringBuilder = (function (_super) {
    __extends(ObjectStringBuilder, _super);
    function ObjectStringBuilder(value) {
        if (value === void 0) { value = ''; }
        return _super.call(this, value) || this;
    }
    ObjectStringBuilder.prototype.appendObject = function (obj) {
        this.value += JSON.stringify(obj);
        return this;
    };
    return ObjectStringBuilder;
}(StringBuilder));
exports.ObjectStringBuilder = ObjectStringBuilder;
var builder = new ObjectStringBuilder();
var result = builder
    .appendObject({ a: 1 })
    .appendLine('Header')
    .append('Label:')
    .appendObject({ b: 2 })
    .appendLine('I am label')
    .result();
console.log(result);
