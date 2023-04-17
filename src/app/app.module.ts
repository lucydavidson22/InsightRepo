import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import { AppRoutingModule } from './app-routing.module';
import { DndModule } from 'ng2-dnd';
import { HttpClientModule } from '@angular/common/http';

import { DocumentsComponent } from './documents/documents.component';
import { DocumentsDetailComponent } from './documents/documents-detail/documents-detail.component';
import { DocumentsItemComponent } from './documents/documents-item/documents-item.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentsListComponent } from './documents/documents-list/documents-list.component';
import { DocumentsFilterPipe } from './documents/documents-filter.pipe';

import { ProjectChoicesComponent } from './project-choices/project-choices.component';
import { ProjectChoiceEditComponent } from './project-choices/project-choice-edit/project-choice-edit.component';
import { ProjectChoicesDetailComponent } from './project-choices/project-choices-detail/project-choices-detail.component';
import { ProjectChoicesItemComponent } from './project-choices/project-choices-item/project-choices-item.component';
import { ProjectChoicesListComponent } from './project-choices/project-choices-list/project-choices-list.component';

import { PubPapersComponent } from './pubPapers/pubPapers.component';
import { PubPaperEditComponent } from './pubPapers/pubPaper-edit/pubPaper-edit.component';
import { PubPapersDetailComponent } from './pubPapers/pubPapers-detail/pubPapers-detail.component';
import { PubPapersItemComponent } from './pubPapers/pubPapers-item/pubPapers-item.component';
import { PubPapersListComponent } from './pubPapers/pubPapers-list/pubPapers-list.component';
import { PubPapersFilterPipe } from './pubPapers/pubPapers-filter.pipe';


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
    ProjectChoicesComponent,
    ProjectChoiceEditComponent,
    ProjectChoicesDetailComponent,
    ProjectChoicesItemComponent,
    ProjectChoicesListComponent,
    PubPapersComponent,
    PubPaperEditComponent,
    PubPapersDetailComponent,
    PubPapersItemComponent,
    PubPapersListComponent,
    PubPapersFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DndModule.forRoot(),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
