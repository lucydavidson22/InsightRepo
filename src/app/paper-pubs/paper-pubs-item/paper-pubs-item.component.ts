import { Component, Input, OnInit } from '@angular/core';
import { PaperPub } from '../paper-pub.model';

@Component({
  selector: 'insight-proj-paper-pubs-item',
  templateUrl: './paper-pubs-item.component.html',
  styleUrls: ['./paper-pubs-item.component.css']
})
export class PaperPubsItemComponent implements OnInit {
  @Input() paperPub!: PaperPub;

  constructor() { }

  ngOnInit(): void {
  }

}
