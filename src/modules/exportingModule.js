// The video for this file:
// https://youtu.be/0FvaxUzzA0g
"use strict";
var LocalClass = (function () {
    function LocalClass() {
    }
    return LocalClass;
}());
var localVariable = 123;
var ExprtedClass = (function () {
    function ExprtedClass() {
    }
    return ExprtedClass;
}());
exports.ExprtedClass = ExprtedClass;
exports.exportedVariable = 12;
var exportedVariableToRename = 'rename me';
exports.renamedExportedVariable = exportedVariableToRename;
