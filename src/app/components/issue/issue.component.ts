import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Comment,
  Issue,
  IssuesService,
} from 'src/app/services/issues/issues.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  loadingIssue!: boolean;
  loadingComments!: boolean;

  private issueId!: string;
  issue!: Issue | undefined;
  comments: Comment[] = [];
  solutions: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private issueService: IssuesService
  ) {
    const routerParams = this.router.snapshot.paramMap;

    this.issueId = routerParams.get('issueId') ?? '';
  }

  ngOnInit(): void {
    this.loadingIssue = true;
    this.loadingComments = true;

    // Get issue
    this.issueService
      .getIssueById(this.issueId)
      .then((issue) => {
        this.issue = issue;
        this.loadingIssue = false;

        // Get comments
        this.issueService
          .getComments(issue!._id)
          .then((data) => {
            this.comments = data.comments;
            this.loadingComments = false;
          })
          .catch((error) => {
            console.error(error);
          });

        // TODO: Get solutions
      })
      .catch((error) => {
        this.issue = undefined;
        this.loadingIssue = false;

        console.error(error);
      });
  }
}
