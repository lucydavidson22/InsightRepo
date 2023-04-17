import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaperPub } from '../paper-pub.model';
import { PaperPubService } from '../paper-pub.service';

@Component({
  selector: 'insight-proj-paper-pubs-list',
  templateUrl: './paper-pubs-list.component.html',
  styleUrls: ['./paper-pubs-list.component.css']
})
export class PaperPubsListComponent implements OnInit, OnDestroy {
  paperPubs: PaperPub[] = [];
  private subscription:Subscription;

  constructor(private paperPubService:PaperPubService ) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.paperPubService.paperPubChangedEvent.subscribe(
      (paperPub:PaperPub[]) => {
        this.paperPubs = paperPub;
      }
    )
    this.paperPubs = this.paperPubService.getPaperPubs();
    this.subscription = this.paperPubService.paperPubListChangedEvent.subscribe(paperPubList => {
      this.paperPubs = paperPubList;
    })
  }

}
