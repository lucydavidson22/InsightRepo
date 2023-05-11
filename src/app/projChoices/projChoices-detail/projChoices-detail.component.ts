import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WindRefService } from 'src/app/window-ref.service';
import { ProjChoice } from '../projChoice.model';
import { ProjChoiceService } from '../projChoice.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'insight-proj-projChoices-detail',
  templateUrl: './projChoices-detail.component.html',
  styleUrls: ['./projChoices-detail.component.css']
})
export class ProjChoicesDetailComponent implements OnInit {
  projChoice!: ProjChoice;
  id!: string;
  nativeWindow: any;

  userId: string;
  userIsAuthenticated = false;
  projChoices: ProjChoice[] = [];
  private subscription: Subscription;
  private authStatusSub: Subscription;

  constructor(private projChoiceService: ProjChoiceService,
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
        this.projChoice = this.projChoiceService.getProjChoice(this.id);
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
      this.userId = this.authService.getUserId();
    })
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