// The video for this file:
// https://youtu.be/0FvaxUzzA0g

import {
    ExportedInterface,
    ExprtedClass,
    exportedVariable as renamedImportedVariable,
    renamedExportedVariable
} from './exportingModule';
import * as exportingModule from './exportingModule';
import './moduleWithSideEffect';

import renamdedDefaultExportedFunction
    from './defaultExportingModule';

import {
    reExportedVariable,
    reExportedRenamedVariable
} from './reExportingModule';

console.log('Renamed imported:', renamedImportedVariable);
renamdedDefaultExportedFunction();
console.log('namespace:', exportingModule.exportedVariable);
console.log('Renamed exported:', renamedExportedVariable);
console.log('ReExported:', reExportedVariable);
console.log('Renamed ReExported:', reExportedRenamedVariable);
