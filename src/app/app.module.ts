import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentsListComponent } from './documents/documents-list/documents-list.component';
import { DocumentsItemComponent } from './documents/documents-item/documents-item.component';
import { AppRoutingModule } from './app-routing.module';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DndModule } from 'ng2-dnd';
import { HttpClientModule } from '@angular/common/http';
import { DocumentsFilterPipe } from './documents/documents-filter.pipe';
import { DocumentsDetailComponent } from './documents/documents-detail/documents-detail.component';
import { ProjectChoicesComponent } from './project-choices/project-choices.component';
import { ProjectChoiceEditComponent } from './project-choices/project-choice-edit/project-choice-edit.component';
import { ProjectChoicesDetailComponent } from './project-choices/project-choices-detail/project-choices-detail.component';
import { ProjectChoicesItemComponent } from './project-choices/project-choices-item/project-choices-item.component';
import { ProjectChoicesListComponent } from './project-choices/project-choices-list/project-choices-list.component';
import { PublicationsComponent } from './publications/publications.component';
import { PublicationEditComponent } from './publications/publication-edit/publication-edit.component';
import { PublicationsDetailComponent } from './publications/publications-detail/publications-detail.component';
import { PublicationsItemComponent } from './publications/publications-item/publications-item.component';
import { PublicationsListComponent } from './publications/publications-list/publications-list.component';


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
    PublicationsComponent,
    PublicationEditComponent,
    PublicationsDetailComponent,
    PublicationsItemComponent,
    PublicationsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
