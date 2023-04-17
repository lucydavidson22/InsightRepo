import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WindRefService } from 'src/app/window-ref.service';
import { PaperPub } from '../paper-pub.model';
import { PaperPubService } from '../paper-pub.service';

@Component({
  selector: 'insight-proj-paper-pubs-detail',
  templateUrl: './paper-pubs-detail.component.html',
  styleUrls: ['./paper-pubs-detail.component.css']
})
export class PaperPubsDetailComponent implements OnInit {
  paperPub!: PaperPub;
  id!:string;
  nativeWindow: any;

  constructor(private paperPubService:PaperPubService,
              private windowRefService:WindRefService,
              private route:ActivatedRoute,
              private router: Router) {
      this.nativeWindow = windowRefService.getNativeWindow();
              }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = params['id'];
        this.paperPub = this.paperPubService.getPaperPub(this.id);
      }
    )
  }

  onEditPaperPub(){
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDelete(){
    this.paperPubService.deletePaperPub(this.paperPub);
    this.router.navigate(['paperPubs']);
  }

}
