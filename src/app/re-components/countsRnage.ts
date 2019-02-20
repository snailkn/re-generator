class CountsRnage {
  public begin: number;
  public end: number;
  public lazyMatching = false;
  public constructor(begin: number = 0, end: number = null, lazyMatching: boolean = false) {
    if (begin < 0) {
      throw Error('begin must be a int equal or bigger than 0!');
    }
    if (end && end <= begin) {
      throw Error('end must be a int bigger than begin!');
    }
    this.begin = begin;
    this.end = end;
    this.lazyMatching = lazyMatching;
  }
  public parse(): string {
    let range_str: string;
    if (this.begin === 0 && this.end === 1) {
      range_str = '?';
    } else if (this.begin === 0 && this.end === null) {
      range_str = '*';
    } else if (this.begin === 1 && this.end === null) {
      range_str = '+';
    } else {
      range_str = '{${this.begin}, ${this.end}}';
    }
    return this.lazyMatching ? range_str + '?' : range_str;
  }
}
