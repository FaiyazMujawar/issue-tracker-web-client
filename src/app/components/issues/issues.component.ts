import { Component, OnInit } from '@angular/core';
import { Issue, IssuesService } from 'src/app/services/issues/issues.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
})
export class IssuesComponent implements OnInit {
  issues: Issue[] = [];

  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {
    this.issueService
      .getAllIssues('CSE')
      .subscribe((issues) => (this.issues = issues));
  }
}
