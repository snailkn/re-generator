class CharSet implements PatternElement {
  public charElements: Char[];
  public charRangeElements: CharRange[];
  public isExclude: boolean;
  public counts: number;
  public countsRange: CountsRnage;
  public constructor(charElements: Char[] = null, charRangeElement: CharRange[] = null, isExclude: boolean = false, counts: number = null, countsRange: CountsRnage = null) {
    this.charElements = charElements;
    this.charRangeElements = charRangeElement;
    this.isExclude = isExclude;
    if (counts !== null && countsRange !== null) {
      throw Error('Only support one of the counts or countsRange!');
    }
    this.counts = counts;
    this.countsRange = countsRange;
  }
  public parse(): string {
    let counts = '';
    if (this.counts) {
      counts = '{${this.counts}}';
    } else if (this.countsRange) {
      counts = this.countsRange.parse();
    }
    let chars: string = this.charElements.map(x => x.parse()).join();
    let charRanges: string = this.charRangeElements.map(x => x.parse()).join();
    return '[${chars}${charRanges}]${counts}';
  }
}
