class Lookbehind implements PatternElement {
  public group: Group;
  public exclude: boolean;
  public constructor(group: Group, exclude: boolean = false) {
    this.group = group;
    this.exclude = exclude;
  }
  public parse(): string {
    let exclude = this.exclude ? '!' : '=';
    let content = this.group.elements.map(x => x.parse()).join('|');
    return '(?<${exclude}${content})';
  }
}
