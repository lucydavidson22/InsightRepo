import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjChoiceService } from '../projChoice.service';
import { ProjChoice } from '../projChoice.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'insight-proj-projChoice-edit',
  templateUrl: './projChoice-edit.component.html',
  styleUrls: ['./projChoice-edit.component.css']
})
export class ProjChoiceEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') projForm: NgForm;
  subscription: Subscription;
  originalProjChoice: ProjChoice;
  projChoice: ProjChoice;
  editMode: boolean = false;
  id: string;

  constructor(private projChoiceService: ProjChoiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if(!this.id){
          this.editMode = false;
          return;
        }
        this.originalProjChoice = this.projChoiceService.getProjChoice(this.id);
        if(!this.originalProjChoice){
          return;
        }
        this.editMode = true;
        this.projChoice = JSON.parse(JSON.stringify(this.originalProjChoice));
      })
  }

  onCancel(){
    this.router.navigate(['/projChoices']);
  }

  onSubmit(form: NgForm){
    const value = form.value;
    // console.log(value.name, value.id);
    const newProjChoice = new ProjChoice('0', value.name, value.url, value.date, value.clientSponsor, value.location, value.publication, value.category, value.tangibleItems, value.description, value.profileStartedBy, value.profileStatus);
                                    //could an error be here because it expects a value.id
    if(this.editMode){
      this.projChoiceService.updateProjChoice(this.originalProjChoice, newProjChoice)
    } else{
      this.projChoiceService.addProjChoice(newProjChoice)
    }
    this.router.navigate(['projChoices']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

}
