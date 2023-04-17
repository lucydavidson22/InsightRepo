import { Component, OnInit } from '@angular/core';
import { PubPaper } from './pubPaper.model';
import { PubPaperService } from './pubPaper.service';

@Component({
  selector: 'insight-proj-pubPapers',
  templateUrl: './pubPapers.component.html',
  styleUrls: ['./pubPapers.component.css']
})
export class PubPapersComponent implements OnInit {
  selectedPubPaper!: PubPaper;

  constructor(private pubPaperService:PubPaperService) { }

  ngOnInit(): void {
    this.pubPaperService.pubPaperSelectedEvent.subscribe(
      (pubPaper:PubPaper) => {
        this.selectedPubPaper = pubPaper;
      }
    )
  }

}
