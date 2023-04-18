import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PubPaperService } from '../pubPaper.service';
import { PubPaper } from '../pubPaper.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'insight-proj-pubPaper-edit',
  templateUrl: './pubPaper-edit.component.html',
  styleUrls: ['./pubPaper-edit.component.css']
})
export class PubPaperEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') pubForm: NgForm;
  subscription: Subscription;
  originalPubPaper: PubPaper;
  pubPaper: PubPaper;
  editMode: boolean = false;
  id: string;

  constructor(private pubPaperService: PubPaperService,
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
        this.originalPubPaper = this.pubPaperService.getPubPaper(this.id);
        if(!this.originalPubPaper){
          return;
        }
        this.editMode = true;
        this.pubPaper = JSON.parse(JSON.stringify(this.originalPubPaper));
      })
  }

  onCancel(){
    this.router.navigate(['/pubPapers']);
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newPubPaper = new PubPaper('0', value.name, value.year, value.pub, value.cat, value.projDesc, value.profPage, value.topic, value.citation);
                                    //could an error be here because it expects a value.id
    if(this.editMode){
      this.pubPaperService.updatePubPaper(this.originalPubPaper, newPubPaper)
    } else{
      this.pubPaperService.addPubPaper(newPubPaper)
    }
    this.router.navigate(['pubPapers']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

}
