import { Component, OnInit } from '@angular/core';
import {CheckerContent} from '../share/checker-content';

@Component({
  selector: 'app-re-checker',
  templateUrl: './re-checker.component.html',
  styleUrls: ['./re-checker.component.css']
})
export class ReCheckerComponent implements OnInit {
  public texts: CheckerContent[];

  constructor() { }

  ngOnInit() {
    const text = 'highlight text!---------highlight text!';
    const i = text.lastIndexOf('highlight');
    const checkerContent = {text: text, highlightIntervals: [{begin: 0, end: 8}, {begin: i, end: i + 8}]};
    this.texts = [checkerContent, checkerContent, checkerContent];
    console.log(this.texts);
  }

}
