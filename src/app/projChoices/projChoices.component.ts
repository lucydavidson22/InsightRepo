import { Component, OnInit } from '@angular/core';
import { ProjChoice } from './projChoice.model';
import { ProjChoiceService } from './projChoice.service';

@Component({
  selector: 'insight-proj-projChoices',
  templateUrl: './projChoices.component.html',
  styleUrls: ['./projChoices.component.css']
})
export class ProjChoicesComponent implements OnInit {
  selectedProjChoice!: ProjChoice;

  constructor(private projChoiceService:ProjChoiceService) { }

  ngOnInit(): void {
    this.projChoiceService.projChoiceSelectedEvent.subscribe(
      (projChoice:ProjChoice) => {
        this.selectedProjChoice = projChoice;
      }
    )
  }

}
