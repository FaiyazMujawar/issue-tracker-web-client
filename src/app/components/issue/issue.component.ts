import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue, IssuesService } from 'src/app/services/issues/issues.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  private issueId!: string;
  issue!: Issue | undefined;

  constructor(
    private router: ActivatedRoute,
    private issueService: IssuesService
  ) {
    const routerParams = this.router.snapshot.paramMap;

    this.issueId = routerParams.get('issueId') ?? '';
  }

  ngOnInit(): void {
    this.issueService.getIssueById(this.issueId).subscribe((issue) => {
      this.issue = issue;
    });
  }
}
