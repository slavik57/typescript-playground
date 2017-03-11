// The video for this file:
// https://youtu.be/0FvaxUzzA0g
"use strict";
var exportingModule_1 = require("./exportingModule");
var exportingModule = require("./exportingModule");
require("./moduleWithSideEffect");
var defaultExportingModule_1 = require("./defaultExportingModule");
var reExportingModule_1 = require("./reExportingModule");
console.log('Renamed imported:', exportingModule_1.exportedVariable);
defaultExportingModule_1.default();
console.log('namespace:', exportingModule.exportedVariable);
console.log('Renamed exported:', exportingModule_1.renamedExportedVariable);
console.log('ReExported:', reExportingModule_1.reExportedVariable);
console.log('Renamed ReExported:', reExportingModule_1.reExportedRenamedVariable);
