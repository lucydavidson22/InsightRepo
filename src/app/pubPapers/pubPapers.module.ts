import { NgModule } from "@angular/core";

import { PubPaperEditComponent } from "./pubPaper-edit/pubPaper-edit.component";
import { PubPapersDetailComponent } from "./pubPapers-detail/pubPapers-detail.component";
import { PubPapersFilterPipe } from "./pubPapers-filter.pipe";
import { PubPapersItemComponent } from "./pubPapers-item/pubPapers-item.component";
import { PubPapersListComponent } from "./pubPapers-list/pubPapers-list.component";
import { PubPapersComponent } from "./pubPapers.component";

import { AppRoutingModule } from "../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";



@NgModule({
    declarations: [
        PubPapersComponent,
        PubPapersListComponent,
        PubPapersItemComponent,
        PubPapersDetailComponent,
        PubPaperEditComponent,
        PubPapersFilterPipe,

    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule,
        MatDialogModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class PubPapersModule{

}