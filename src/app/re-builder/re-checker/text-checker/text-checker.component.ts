import {Component, Input, OnInit} from '@angular/core';
import {TextContent} from '../share/text-content';
import {CheckerContent} from '../share/checker-content';

@Component({
  selector: 'app-text-checker',
  templateUrl: './text-checker.component.html',
  styleUrls: ['./text-checker.component.css']
})
export class TextCheckerComponent implements OnInit {
  @Input()
  public checkerContent: CheckerContent;
  public textContents: TextContent[];

  constructor() { }

  ngOnInit() {
    this.getTextContents();
  }

  private getTextContents() {
    this.checkerContent.highlightIntervals.sort((x, y) => (x.begin - y.begin));
    let begin = 0;
    this.textContents = [];
    console.log(this.checkerContent);
    for (let i = 0; i < this.checkerContent.highlightIntervals.length; i++) {
      this.textContents.push({begin: begin, end: this.checkerContent.highlightIntervals[i].begin, type: 'default'});
      this.textContents.push({begin: this.checkerContent.highlightIntervals[i].begin, end: this.checkerContent.highlightIntervals[i].end, type: 'matched'});
      begin = this.checkerContent.highlightIntervals[i].end;
    }
    this.textContents.push({begin: begin, end: this.checkerContent.text.length, type: 'default'});
    console.log(this.textContents);
  }

}
