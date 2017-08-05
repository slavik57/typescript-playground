export declare class StringBuilder {
    protected value: string;
    constructor(value?: string);
    append(text: string): this;
    appendLine(line: string): this;
    result(): string;
}
export declare class ObjectStringBuilder extends StringBuilder {
    constructor(value?: string);
    appendObject(obj: any): this;
}
