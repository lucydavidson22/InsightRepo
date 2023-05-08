import { NgModule } from "@angular/core";

import { AppRoutingModule } from "../app-routing.module";
import { ProjChoiceEditComponent } from "./projChoice-edit/projChoice-edit.component";
import { ProjChoicesDetailComponent } from "./projChoices-detail/projChoices-detail.component";
import { ProjChoicesFilterPipe } from "./projChoices-filter.pipe";
import { ProjChoicesItemComponent } from "./projChoices-item/projChoices-item.component";
import { ProjChoicesListComponent } from "./projChoices-list/projChoices-list.component";
import { ProjChoicesComponent } from "./projChoices.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
        ProjChoicesComponent,
        ProjChoicesListComponent,
        ProjChoicesItemComponent,
        ProjChoicesDetailComponent,
        ProjChoiceEditComponent,
        ProjChoicesFilterPipe
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
        ReactiveFormsModule,
    ]
})
export class ProjChoicesModule{

}