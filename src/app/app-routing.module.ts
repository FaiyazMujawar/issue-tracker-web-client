import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { HomeComponent } from './components/home/home.component';
import { IssueComponent } from './components/issue/issue.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'issues/create',
    component: CreateIssueComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'issues/:issueId',
    component: IssueComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
