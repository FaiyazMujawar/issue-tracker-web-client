import { Component, Input, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() comment!: any;
  commentText!: string;
  postedOn!: string;

  constructor() {
    dayjs.extend(relativeTime);
  }

  ngOnInit(): void {
    this.postedOn = dayjs().to(this.comment.postedOn) ?? '';
  }
}
