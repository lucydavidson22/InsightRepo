import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ProjChoice } from '../projChoice.model';

@Component({
  selector: 'insight-proj-projChoices-item',
  templateUrl: './projChoices-item.component.html',
  styleUrls: ['./projChoices-item.component.css']
})
export class ProjChoicesItemComponent implements OnInit {
  @Input() projChoice!: ProjChoice;

  constructor() { }

  ngOnInit(): void {

  }

}
