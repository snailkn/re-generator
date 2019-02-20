///<reference path="constant.ts"/>
class SubStr implements PatternElement {
  public value: string;
  public constructor(value: string) {
    this.value = value;
  }
  public parse(): string {
    let result: string = this.value;
    for (let i = 0; i < RESERVED_CHARACTER.length; i++) {
      result = result.replace(RESERVED_CHARACTER[i], '\\' + RESERVED_CHARACTER[i]);
    }
    return result;
  }
}
