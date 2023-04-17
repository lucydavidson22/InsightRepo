import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WindRefService } from 'src/app/window-ref.service';
import { PubPaper } from '../pubPaper.model';
import { PubPaperService } from '../pubPaper.service';

@Component({
  selector: 'insight-proj-pubPapers-detail',
  templateUrl: './pubPapers-detail.component.html',
  styleUrls: ['./pubPapers-detail.component.css']
})
export class PubPapersDetailComponent implements OnInit {
  pubPaper!: PubPaper;
  id!: string;
  nativeWindow: any;

  constructor(private pubPaperService: PubPaperService,
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
        this.pubPaper = this.pubPaperService.getPubPaper(this.id);
      }
    )
  }

  onEditPubPaper(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  // onView(){
  //   if(this.pubPaper.url){
  //     this.nativeWindow.open(this.pubPaper.url);
  //   }
  // }

  onDelete(){
    this.pubPaperService.deletePubPaper(this.pubPaper);
    // this.router.navigate(['pubPapers'], {relativeTo: this.route});
    this.router.navigate(['pubPapers']);
  }

}
