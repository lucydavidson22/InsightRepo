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
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'documents', component: DocumentsComponent, canActivate: [AuthGuard], children: [
    {path: 'new', component: DocumentEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: DocumentsDetailComponent, canActivate: [AuthGuard]},
    {path: ':id/edit', component: DocumentEditComponent, canActivate: [AuthGuard]}
  ]},
  {path: 'pubPapers', component: PubPapersComponent, canActivate: [AuthGuard], children: [
    {path: 'new', component: PubPaperEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: PubPapersDetailComponent, canActivate: [AuthGuard]},
    {path: ':id/edit', component: PubPaperEditComponent, canActivate: [AuthGuard]}
  ]},
  {path: 'projChoices', component: ProjChoicesComponent, canActivate: [AuthGuard], children: [
    {path: 'new', component: ProjChoiceEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: ProjChoicesDetailComponent, canActivate: [AuthGuard]},
    {path: ':id/edit', component: ProjChoiceEditComponent, canActivate: [AuthGuard]}
  ]},
  { path: 'auth', component: AuthComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule{

}
