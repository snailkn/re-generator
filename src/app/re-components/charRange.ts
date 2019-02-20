class CharRange {
  public begin: string;
  public end: string;
  public constructor(begin: string, end: string) {
    if (begin.length !== 1 || end.length !== 1) {
      throw Error('the begin and end must be a string which length = 1!');
    }
    if (begin >= end) {
      throw Error('the begin must small than end!');
    }
    this.begin = begin;
    this.end = end;
  }
  public parse() {
    return this.begin + '-' + this.end;
  }
}
