import { Component, Input, OnInit } from '@angular/core';
import { Issue } from 'src/app/services/issues/issues.service';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css'],
})
export class IssueCardComponent implements OnInit {
  @Input() issue!: Issue;

  constructor() {}

  ngOnInit(): void {}
}
