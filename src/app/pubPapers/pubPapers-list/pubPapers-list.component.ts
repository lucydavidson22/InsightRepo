import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { PubPaper } from '../pubPaper.model';
import { PubPaperService } from '../pubPaper.service';

@Component({
  selector: 'insight-proj-pubPapers-list',
  templateUrl: './pubPapers-list.component.html',
  styleUrls: ['./pubPapers-list.component.css']
})
export class PubPapersListComponent implements OnInit, OnDestroy {
  pubPapers: PubPaper[] = [];
  private subscription: Subscription;
  term:string;

  userIsAuthenticated = false;
  userId: string;
  private authStatusSub: Subscription;

  constructor(private pubPaperService: PubPaperService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.pubPaperService.pubPaperChangedEvent.subscribe(
      (pubPaper:PubPaper[]) => {
        this.pubPapers = pubPaper;
      }
    )
    this.pubPapers = this.pubPaperService.getPubPapers();
    this.subscription = this.pubPaperService.pubPaperListChangedEvent.subscribe(pubPaperList => {
      this.pubPapers = pubPaperList;
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId()
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  search(value:string){
    this.term = value;
  }

}
