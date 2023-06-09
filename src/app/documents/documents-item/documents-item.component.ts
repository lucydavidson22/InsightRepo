import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'insight-proj-documents-item',
  templateUrl: './documents-item.component.html',
  styleUrls: ['./documents-item.component.css']
})
export class DocumentsItemComponent implements OnInit {
  @Input() document!: Document;

  constructor() { }

  ngOnInit(): void {

  }

}