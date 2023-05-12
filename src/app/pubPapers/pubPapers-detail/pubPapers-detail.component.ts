import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
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

  userId: string;
  userIsAuthenticated = false;
  pubPapers: PubPaper[] = [];
  private subscription: Subscription;
  private authStatusSub: Subscription;

  constructor(private pubPaperService: PubPaperService,
              private windowRefService: WindRefService,
              private route: ActivatedRoute,
              private router: Router, private authService: AuthService) {
    this.nativeWindow = windowRefService.getNativeWindow();
               }

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.pubPaper = this.pubPaperService.getPubPaper(this.id);
      }
    )

    this.pubPapers = this.pubPaperService.getPubPapers();
    this.subscription = this.pubPaperService.pubPaperListChangedEvent.subscribe(projChoiceList => {
      this.pubPapers = projChoiceList;
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    })
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
