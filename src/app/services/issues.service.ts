import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Issues from '../scratchpad/issues.json';

export interface Issue {
  description: string;
  images: string[];
  isEdited: boolean;
  isResolved: boolean;
  isInappropriate: boolean;
  isDeleted: boolean;
  upvoters: string[];
  reporters: any[];
  createdOn: string;
  _id: string;
  title: string;
  section: string;
  department: string;
  scope: string;
  upvotes: number;
  comments: {
    postedOn: string;
    isInappropriate: boolean;
    _id: string;
    comment: string;
    postedBy: string;
  }[];
  solutions: any[];
  createdBy: string;
  __v: number;
}

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private issues: Issue[] = Issues;
  constructor() {}

  getAllIssues(department: string): Observable<Issue[]> {
    return of<Issue[]>(
      this.issues.filter((issue) => issue.department === department)
    );
  }

  getIssueById(id: string): Observable<Issue | undefined> {
    return of<Issue | undefined>(this.issues.find((issue) => issue._id === id));
  }
}
