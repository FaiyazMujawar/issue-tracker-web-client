import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { IssuesComponent } from './components/issues/issues.component';
import { IssueCardComponent } from './components/issue-card/issue-card.component';
import { IssueComponent } from './components/issue/issue.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CommentComponent } from './components/comment/comment.component';
import { SolutionComponent } from './components/solution/solution.component';
import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IssuesComponent,
    IssueCardComponent,
    IssueComponent,
    NavbarComponent,
    CarouselComponent,
    CommentComponent,
    SolutionComponent,
    CreateIssueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
