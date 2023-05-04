import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { DocumentsComponent } from './documents/documents.component';
import { DocumentsDetailComponent } from './documents/documents-detail/documents-detail.component';
import { DocumentsItemComponent } from './documents/documents-item/documents-item.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentsListComponent } from './documents/documents-list/documents-list.component';
import { DocumentsFilterPipe } from './documents/documents-filter.pipe';

import { ProjChoicesComponent } from './projChoices/projChoices.component';
import { ProjChoiceEditComponent } from './projChoices/projChoice-edit/projChoice-edit.component';
import { ProjChoicesDetailComponent } from './projChoices/projChoices-detail/projChoices-detail.component';
import { ProjChoicesItemComponent } from './projChoices/projChoices-item/projChoices-item.component';
import { ProjChoicesListComponent } from './projChoices/projChoices-list/projChoices-list.component';
import { ProjChoicesFilterPipe } from './projChoices/projChoices-filter.pipe';

import { PubPapersComponent } from './pubPapers/pubPapers.component';
import { PubPaperEditComponent } from './pubPapers/pubPaper-edit/pubPaper-edit.component';
import { PubPapersDetailComponent } from './pubPapers/pubPapers-detail/pubPapers-detail.component';
import { PubPapersItemComponent } from './pubPapers/pubPapers-item/pubPapers-item.component';
import { PubPapersListComponent } from './pubPapers/pubPapers-list/pubPapers-list.component';
import { PubPapersFilterPipe } from './pubPapers/pubPapers-filter.pipe';

import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    DocumentsComponent,
    DocumentsListComponent,
    DocumentsItemComponent,
    DocumentsDetailComponent,
    DocumentEditComponent,
    DocumentsFilterPipe,

    ProjChoicesComponent,
    ProjChoicesListComponent,
    ProjChoicesItemComponent,
    ProjChoicesDetailComponent,
    ProjChoiceEditComponent,
    ProjChoicesFilterPipe,

    PubPapersComponent,
    PubPapersListComponent,
    PubPapersItemComponent,
    PubPapersDetailComponent,
    PubPaperEditComponent,
    PubPapersFilterPipe,

    AuthComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
