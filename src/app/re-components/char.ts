///<reference path="patternElement.ts"/>

interface Char extends PatternElement {
  parse(): string;
}

class CustomerChar implements Char {
  public content: string;
  public constructor(content: string) {
    if (content.length !== 1) {
      throw Error('len of Char must be 1!');
    }
    this.content = content;
  }
  public parse(): string {
    if ('\\.*+?$^(){}['.includes(this.content)) {
      return '\\' + this.content;
    } else {
      return this.content;
    }
  }
}

class Wildcard implements Char {
  parse(): string {
    return '.';
  }
}

class NewLineChar implements Char {
  parse(): string {
    return '\n';
  }
}

class Digit implements Char {
  parse(): string {
    return '\d';
  }
}

class NotDigit implements Char {
  parse(): string {
    return '\D';
  }
}

class Space implements Char {
  parse(): string {
    return '\w';
  }
}

class NotSpace implements Char {
  parse(): string {
    return '\W';
  }
}
