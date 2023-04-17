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

import { PaperPubsComponent } from './paper-pubs/paper-pubs.component';
import { PaperPubEditComponent } from './paper-pubs/paper-pub-edit/paper-pub-edit.component';
import { PaperPubsItemComponent } from './paper-pubs/paper-pubs-item/paper-pubs-item.component';
import { PaperPubsDetailComponent } from './paper-pubs/paper-pubs-detail/paper-pubs-detail.component';
import { PaperPubsListComponent } from './paper-pubs/paper-pubs-list/paper-pubs-list.component';



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
    PaperPubsComponent,
    PaperPubEditComponent,
    PaperPubsItemComponent,
    PaperPubsDetailComponent,
    PaperPubsListComponent,
    PaperPubsDetailComponent
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
