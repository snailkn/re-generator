class Group implements PatternElement {
  public elements: PatternElement[];
  public name: string;
  public ignoreIndex: boolean;
  public constructor (elements: PatternElement[], name: string = null, ignoreIndex: boolean = false) {
    this.elements = elements;
    if (ignoreIndex && name) {
      throw Error('Can\'t set name for a ignore index group!');
    }
    this.name = name;
    this.ignoreIndex = ignoreIndex;
  }
  public parse(): string {
    let name = this.name ? '?<${this.name}>' : '';
    let ignoreIndex = this.ignoreIndex ? '?:' : '';
    let content = this.elements.map(x => x.parse()).join('|');
    return '(${name}${ignoreIndex}${content})';
  }
}
