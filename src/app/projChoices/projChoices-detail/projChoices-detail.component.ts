import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WindRefService } from 'src/app/window-ref.service';
import { ProjChoice } from '../projChoice.model';
import { ProjChoiceService } from '../projChoice.service';

@Component({
  selector: 'insight-proj-projChoices-detail',
  templateUrl: './projChoices-detail.component.html',
  styleUrls: ['./projChoices-detail.component.css']
})
export class ProjChoicesDetailComponent implements OnInit {
  projChoice!: ProjChoice;
  id!: string;
  nativeWindow: any;

  constructor(private projChoiceService: ProjChoiceService,
              private windowRefService: WindRefService,
              private route: ActivatedRoute,
              private router: Router) {
    this.nativeWindow = windowRefService.getNativeWindow();
               }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        // let parseId = parseInt(this.id);
        this.projChoice = this.projChoiceService.getProjChoice(this.id);
      }
    )
  }

  onEditProjChoice(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  // onView(){
  //   if(this.projChoice.url){
  //     this.nativeWindow.open(this.projChoice.url);
  //   }
  // }

  onDelete(){
    this.projChoiceService.deleteProjChoice(this.projChoice);
    // this.router.navigate(['projChoices'], {relativeTo: this.route});
    this.router.navigate(['projChoices']);
  }

}
