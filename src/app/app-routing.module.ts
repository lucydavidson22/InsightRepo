import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DocumentEditComponent } from "./documents/document-edit/document-edit.component";
import { DocumentsDetailComponent } from "./documents/documents-detail/documents-detail.component";
import { DocumentsComponent } from "./documents/documents.component";

import { ProjChoicesComponent } from "./projChoices/projChoices.component";
import { ProjChoiceEditComponent } from "./projChoices/projChoice-edit/projChoice-edit.component";
import { ProjChoicesDetailComponent } from "./projChoices/projChoices-detail/projChoices-detail.component";

import { PubPaperEditComponent } from "./pubPapers/pubPaper-edit/pubPaper-edit.component";
import { PubPapersDetailComponent } from "./pubPapers/pubPapers-detail/pubPapers-detail.component";
import { PubPapersComponent } from "./pubPapers/pubPapers.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/documents', pathMatch: 'full'},
  {path: 'documents', component: DocumentsComponent, children: [
    {path: 'new', component: DocumentEditComponent},
    {path: ':id', component: DocumentsDetailComponent},
    {path: ':id/edit', component: DocumentEditComponent}
  ]},
  {path: 'pubPapers', component: PubPapersComponent, children: [
    {path: 'new', component: PubPaperEditComponent},
    {path: ':id', component: PubPapersDetailComponent},
    {path: ':id/edit', component: PubPaperEditComponent}
  ]},
  {path: 'projChoices', component: ProjChoicesComponent, children: [
    {path: 'new', component: ProjChoiceEditComponent},
    {path: ':id', component: ProjChoicesDetailComponent},
    {path: ':id/edit', component: ProjChoiceEditComponent}
  ]},
  {path: '**', component: DocumentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
