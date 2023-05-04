import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WindRefService } from 'src/app/window-ref.service';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'insight-proj-documents-detail',
  templateUrl: './documents-detail.component.html',
  styleUrls: ['./documents-detail.component.css']
})
export class DocumentsDetailComponent implements OnInit {
  document!: Document;
  id!: string;
  nativeWindow: any;

  userId: string;
  userIsAuthenticated = false;
  documents: Document[] = [];
  private subscription: Subscription;
  private authStatusSub: Subscription;

  constructor(private documentService: DocumentService,
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
        this.document = this.documentService.getDocument(this.id);
      }
    )

    this.documents = this.documentService.getDocuments();
    this.subscription = this.documentService.documentListChangedEvent.subscribe(documentList => {
      this.documents = documentList;
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    })

  }

  onEditDocument(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onView(){
    if(this.document.url){
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete(){
    this.documentService.deleteDocument(this.document);
    // this.router.navigate(['documents'], {relativeTo: this.route});
    this.router.navigate(['documents']);
  }

}