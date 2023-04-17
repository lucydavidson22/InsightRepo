import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PaperPubService } from '../paper-pub.service';
import { PaperPub } from '../paper-pub.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'insight-proj-paper-pub-edit',
  templateUrl: './paper-pub-edit.component.html',
  styleUrls: ['./paper-pub-edit.component.css']
})
export class PaperPubEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') pubForm:NgForm;
  subscription: Subscription;
  originalPublication: PaperPub;
  paperPub:PaperPub;
  editMode: boolean = false;
  id: string;

  constructor(private paperPubService: PaperPubService,
              private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params:Params) => {
        this.id = params['id'];
        if(!this.id){
          this.editMode = false;
          return;
        }
        this.originalPublication = this.paperPubService.getPaperPub(this.id)
        if(!this.originalPublication){
          return;
        }
        this.editMode = true;
        this.paperPub = JSON.parse(JSON.stringify(this.originalPublication));
      })
  }

  onCancel(){
    this.router.navigate(['/paperPubs'])
  }

  onSubmit(form:NgForm){
    const value = form.value;
    const newPaperPub = new PaperPub('0', value.name, value.year, value.pub, value.cat, value.projDesc, value.profPage, value.topic);

    if(this.editMode){
      this.paperPubService.updatePaperPub(this.originalPublication, newPaperPub)
    } else {
      this.paperPubService.addPaperPub(newPaperPub)
    }
    this.router.navigate(['paperPubs']);
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
