// The video for this file:
// https://youtu.be/Hr6CXYUEmaM
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringBuilder {
    constructor(value = '') {
        this.value = value;
    }
    append(text) {
        this.value += text;
        return this;
    }
    appendLine(line) {
        this.value += line + '\n';
        return this;
    }
    result() {
        return this.value;
    }
}
exports.StringBuilder = StringBuilder;
class ObjectStringBuilder extends StringBuilder {
    constructor(value = '') {
        super(value);
    }
    appendObject(obj) {
        this.value += JSON.stringify(obj);
        return this;
    }
}
exports.ObjectStringBuilder = ObjectStringBuilder;
const builder = new ObjectStringBuilder();
const result = builder
    .appendObject({ a: 1 })
    .appendLine('Header')
    .append('Label:')
    .appendObject({ b: 2 })
    .appendLine('I am label')
    .result();
console.log(result);
