class Pattern {
  public elements: PatternElement[];
  public atBeginning: boolean;
  public atEnd: boolean;
  public ignoreCase: boolean;
  public constructor(elements: PatternElement[], atBeginning: boolean = false, atEnd: boolean = false, ignoreCase: boolean = false) {
    this.elements = elements;
    this.atBeginning = atBeginning;
    this.atEnd = atEnd;
    this.ignoreCase = ignoreCase;
  }
  public compile() {
    let content = this.elements.map(x => x.parse()).join();
    let beginning = this.atBeginning ? '^' : '';
    let end = this.atEnd ? '$' : '';
    return RegExp('${beginning}${content}${end}', this.ignoreCase ? 'i' : null);
  }
}
