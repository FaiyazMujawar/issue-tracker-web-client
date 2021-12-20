import { Component, Input, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css'],
})
export class SolutionComponent implements OnInit {
  @Input() solution!: any;
  postedOn!: string;
  postedBy!: string;

  constructor() {}

  ngOnInit(): void {
    this.postedOn = dayjs().to(this.solution.postedOn) ?? '';
    this.postedBy = 'John Doe';
  }
}
