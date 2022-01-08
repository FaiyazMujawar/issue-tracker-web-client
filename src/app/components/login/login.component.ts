import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userId: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['/']);
      }
    });
  }

  async onSubmit() {
    try {
      await this.authService.login(this.userId, this.password);
      this.router.navigate(['/']);
    } catch (error) {
      // TODO: Handle invalid login
      console.error(error);
    }
  }
}
