import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PubPaper } from '../pubPaper.model';

@Component({
  selector: 'insight-proj-pubPapers-item',
  templateUrl: './pubPapers-item.component.html',
  styleUrls: ['./pubPapers-item.component.css']
})
export class PubPapersItemComponent implements OnInit {
  @Input() pubPaper!: PubPaper;

  constructor() { }

  ngOnInit(): void {

  }

}
