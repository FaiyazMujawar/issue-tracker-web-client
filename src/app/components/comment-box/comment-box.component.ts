import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssuesService } from 'src/app/services/issues/issues.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css'],
})
export class CommentBoxComponent implements OnInit {
  @Input() issueId!: string;
  @Output() onCommentPost = new EventEmitter();

  comment: string = '';

  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {}

  async postComment(): Promise<void> {
    try {
      await this.issueService.postComment(this.issueId, this.comment);
      this.onCommentPost.emit(this.comment);
      this.comment = '';
    } catch (error) {
      console.error(error);
    }
  }
}
