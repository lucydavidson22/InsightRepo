import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjChoice } from '../projChoice.model';
import { ProjChoiceService } from '../projChoice.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'insight-proj-projChoices-list',
  templateUrl: './projChoices-list.component.html',
  styleUrls: ['./projChoices-list.component.css']
})
export class ProjChoicesListComponent implements OnInit, OnDestroy {
  projChoices: ProjChoice[] = [];
  term:string;

  userIsAuthenticated = false;
  userId: string;
  private subscription: Subscription;
  private authStatusSub: Subscription;

  constructor(private projChoiceService: ProjChoiceService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    this.projChoiceService.projChoiceChangedEvent.subscribe(
      (projChoice:ProjChoice[]) => {
        this.projChoices = projChoice;
      }
    )
    this.projChoices = this.projChoiceService.getProjChoices();
    this.subscription = this.projChoiceService.projChoiceListChangedEvent.subscribe(projChoiceList => {
      this.projChoices = projChoiceList;
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