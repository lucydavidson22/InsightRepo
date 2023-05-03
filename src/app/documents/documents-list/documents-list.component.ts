import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'insight-proj-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  term:string;
  userIsAuthenticated = false;
  userId: string;
  private subscription: Subscription;
  private authStatusSub: Subscription;

  constructor(  private documentService: DocumentService, private authService: AuthService  ) { }

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    this.documentService.documentChangedEvent.subscribe(
      (document:Document[]) => {
        this.documents = document;
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
      this.userId = this.authService.getUserId()
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
      this.authStatusSub.unsubscribe();
  }

  search(value:string){
    this.term = value;
  }

}