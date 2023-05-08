import { NgModule } from "@angular/core";

import { DocumentsComponent } from './documents.component';
import { DocumentsDetailComponent } from './documents-detail/documents-detail.component';
import { DocumentsItemComponent } from './documents-item/documents-item.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { DocumentsListComponent } from './documents-list/documents-list.component';
import { DocumentsFilterPipe } from './documents-filter.pipe';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [
        DocumentsComponent,
        DocumentsListComponent,
        DocumentsItemComponent,
        DocumentsDetailComponent,
        DocumentEditComponent,
        DocumentsFilterPipe
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule,
        MatDialogModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class DocumentsModule{

}