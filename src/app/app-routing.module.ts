import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DocumentEditComponent } from "./documents/document-edit/document-edit.component";
import { DocumentsDetailComponent } from "./documents/documents-detail/documents-detail.component";
import { DocumentsComponent } from "./documents/documents.component";
import { ProjectChoicesComponent } from "./project-choices/project-choices.component";
import { PublicationsComponent } from "./publications/publications.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/documents', pathMatch: 'full'},
  {path: 'documents', component: DocumentsComponent, children: [
    {path: 'new', component: DocumentEditComponent},
    {path: ':id', component: DocumentsDetailComponent},
    {path: ':id/edit', component: DocumentEditComponent}
  ]},
  {path: 'project-choices', component: ProjectChoicesComponent },
  {path: 'publications', component: PublicationsComponent },
  {path: '**', component: DocumentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
