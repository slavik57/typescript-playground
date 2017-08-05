// The video for this file:
// https://youtu.be/Hr6CXYUEmaM

export class StringBuilder {
  constructor(protected value: string = '') {
  }
  public append(text: string): this {
    this.value += text;
    return this;
  }
  public appendLine(line: string): this {
    this.value += line + '\n';
    return this;
  }
  public result(): string {
    return this.value;
  }
}

export class ObjectStringBuilder extends StringBuilder {
  constructor(value: string = '') {
    super(value);
  }
  public appendObject(obj: any): this {
    this.value += JSON.stringify(obj);
    return this;
  }
}

const builder = new ObjectStringBuilder();
const result =
  builder
    .appendObject({a:1})
    .appendLine('Header')
    .append('Label:')
    .appendObject({b:2})
    .appendLine('I am label')
    .result();
console.log(result);