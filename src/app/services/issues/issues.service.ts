import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, of } from 'rxjs';
import { environment as ENV } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';

export interface Issue {
  description: string;
  images: string[];
  isEdited: boolean;
  isResolved: boolean;
  isInappropriate: boolean;
  createdOn: Date;
  _id: string;
  title: string;
  section: string;
  department: string;
  scope: string;
  upvotes: number;
  commentsCount: number;
  solutionsCount: number;
  isAuthor: boolean;
  hasUpvoted: boolean;
  hasReported: boolean;
}

export interface Comment {
  postedOn: Date;
  isInappropriate: boolean;
  _id: string;
  comment: string;
  postedBy: string;
}

export interface Issues {
  issues: Issue[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Comments {
  comments: Comment[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private issues: Issue[] = [];
  constructor(private authService: AuthService, private http: HttpClient) {}

  async getAllIssues(): Promise<Issues> {
    const token: string = (await this.authService.getAccessToken()) as string;

    const response: HttpResponse<any> = await firstValueFrom(
      this.http.get<any>(`${ENV.API_SERVER_URI}/issues/all`, {
        observe: 'response',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 5,
        },
      })
    );

    const body: any = response.body;

    if (response.status !== 200) {
      throw new Error(body.message);
    }

    return body.data;
  }

  async getIssueById(id: string): Promise<Issue | undefined> {
    const token: string = (await this.authService.getAccessToken()) as string;

    const response: HttpResponse<any> = await firstValueFrom(
      this.http.get<any>(`${ENV.API_SERVER_URI}/issues/${id}`, {
        observe: 'response',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );

    const body: any = response.body;

    if (response.status !== 200) {
      throw new Error(body.message);
    }

    return body.issue;
  }

  async getComments(id: string): Promise<Comments> {
    const token: string = (await this.authService.getAccessToken()) as string;

    const response: HttpResponse<any> = await firstValueFrom(
      this.http.get<any>(`${ENV.API_SERVER_URI}/issues/${id}/comments`, {
        observe: 'response',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 5,
        },
      })
    );

    const body: any = response.body;

    if (response.status !== 200) {
      throw new Error(body.message);
    }

    return body.data;
  }

  async postComment(id: string, comment: string): Promise<void> {
    const token: string = (await this.authService.getAccessToken()) as string;

    const response: HttpResponse<any> = await firstValueFrom(
      this.http.put<any>(
        `${ENV.API_SERVER_URI}/issues/${id}/comments`,
        {
          comment,
        },
        {
          observe: 'response',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    const body: any = response.body;

    if (response.status !== 200) {
      throw new Error(body.message);
    }
  }
}
