// The video for this file:
// https://youtu.be/0FvaxUzzA0g

interface LocalInterface {
}

class LocalClass {
}

const localVariable = 123;

export interface ExportedInterface{
}

export class ExprtedClass {
}

export const exportedVariable = 12;

const exportedVariableToRename = 'rename me';

export { exportedVariableToRename 
            as renamedExportedVariable };