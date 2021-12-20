import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userId: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: any) {
    console.log({ userId: this.userId, password: this.password });
  }
}
