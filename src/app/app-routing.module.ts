import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { HomeComponent } from './components/home/home.component';
import { IssueComponent } from './components/issue/issue.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'issues/create',
    component: CreateIssueComponent,
  },
  {
    path: 'issues/:issueId',
    component: IssueComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
