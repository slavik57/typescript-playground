// The video for this file:
// https://youtu.be/0FvaxUzzA0g
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exportingModule_1 = require("./exportingModule");
const exportingModule = require("./exportingModule");
require("./moduleWithSideEffect");
const defaultExportingModule_1 = require("./defaultExportingModule");
const reExportingModule_1 = require("./reExportingModule");
console.log('Renamed imported:', exportingModule_1.exportedVariable);
defaultExportingModule_1.default();
console.log('namespace:', exportingModule.exportedVariable);
console.log('Renamed exported:', exportingModule_1.renamedExportedVariable);
console.log('ReExported:', reExportingModule_1.reExportedVariable);
console.log('Renamed ReExported:', reExportingModule_1.reExportedRenamedVariable);
