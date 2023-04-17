import { Component, OnInit } from '@angular/core';
import { PaperPub } from './paper-pub.model';
import { PaperPubService } from './paper-pub.service';

@Component({
  selector: 'insight-proj-paper-pubs',
  templateUrl: './paper-pubs.component.html',
  styleUrls: ['./paper-pubs.component.css']
})
export class PaperPubsComponent implements OnInit {
  selectedPaperPubs!: PaperPub;

  constructor(private paperPubService:PaperPubService) { }

  ngOnInit(): void {
    this.paperPubService.paperPubSelectedEvent.subscribe(
      (paperPub:PaperPub) => {
        this.selectedPaperPubs = paperPub;
      }
    )
  }

}
