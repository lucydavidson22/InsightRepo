import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjChoice } from '../projChoice.model';
import { ProjChoiceService } from '../projChoice.service';


@Component({
  selector: 'insight-proj-projChoices-list',
  templateUrl: './projChoices-list.component.html',
  styleUrls: ['./projChoices-list.component.css']
})
export class ProjChoicesListComponent implements OnInit, OnDestroy {
  projChoices: ProjChoice[] = [];
  private subscription: Subscription;
  term:string;

  constructor(private projChoiceService: ProjChoiceService,
              ) { }

  ngOnInit(): void {
    this.projChoiceService.projChoiceChangedEvent.subscribe(
      (projChoice:ProjChoice[]) => {
        this.projChoices = projChoice;
      }
    )
    this.projChoices = this.projChoiceService.getProjChoices();
    this.subscription = this.projChoiceService.projChoiceListChangedEvent.subscribe(projChoiceList => {
      this.projChoices = projChoiceList;
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  search(value:string){
    this.term = value;
  }

}