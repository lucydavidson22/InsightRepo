import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DocumentEditComponent } from "./documents/document-edit/document-edit.component";
import { DocumentsDetailComponent } from "./documents/documents-detail/documents-detail.component";
import { DocumentsComponent } from "./documents/documents.component";
import { PaperPubEditComponent } from "./paper-pubs/paper-pub-edit/paper-pub-edit.component";
import { PaperPubsDetailComponent } from "./paper-pubs/paper-pubs-detail/paper-pubs-detail.component";
import { PaperPubsComponent } from "./paper-pubs/paper-pubs.component";
import { ProjectChoicesComponent } from "./project-choices/project-choices.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/documents', pathMatch: 'full'},
  {path: 'documents', component: DocumentsComponent, children: [
    {path: 'new', component: DocumentEditComponent},
    {path: ':id', component: DocumentsDetailComponent},
    {path: ':id/edit', component: DocumentEditComponent}
  ]},
  {path: 'paperPubs', component: PaperPubsComponent, children: [
    {path: 'new', component:PaperPubEditComponent},
    {path: ':id', component: PaperPubsDetailComponent},
    {path: ':id/edit', component: PaperPubEditComponent}
  ]},
  { path: 'project-choices', component: ProjectChoicesComponent },
  {path: '**', component: DocumentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
