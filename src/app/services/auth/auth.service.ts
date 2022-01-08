import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment as ENV } from '../../../environments/environment';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private ACCESS_TOKEN_KEY: string = 'APP_ACCESS_TOKEN';
  private REFRESH_TOKEN_KEY: string = 'APP_REFRESH_TOKEN';

  constructor(private http: HttpClient) {}

  async isLoggedIn() {
    return !!(await this.getAccessToken());
  }

  async login(userId: string, password: string) {
    const response: HttpResponse<any> = await firstValueFrom(
      this.http.post(
        `${ENV.API_SERVER_URI}/auth/login`,
        { userId, password },
        { observe: 'response' }
      )
    );

    const body = response.body!;

    if (response.status !== 200) {
      throw new Error(body.message);
    }

    const { token: accessToken, refreshToken } = body;

    localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
  }

  private async getAccessToken(): Promise<string | null> {
    const token: string | null = localStorage.getItem(this.ACCESS_TOKEN_KEY);

    if (!!token) {
      const parsedToken: any = jwtDecode(token);

      if (parsedToken.exp * 1000 > Date.now()) {
        return token;
      }

      return await this.refreshToken();
    }

    return null;
  }

  private async refreshToken(): Promise<string | null> {
    const refreshToken: string | null = localStorage.getItem(
      this.REFRESH_TOKEN_KEY
    );

    if (!refreshToken) {
      return null;
    }

    const response: HttpResponse<any> = await firstValueFrom(
      this.http.post<any>(
        `${ENV.API_SERVER_URI}/auth/refresh`,
        { refreshToken },
        {
          observe: 'response',
          headers: {
            Authorization: localStorage.getItem(this.ACCESS_TOKEN_KEY)!,
          },
        }
      )
    );

    const body = response.body;

    if (response.status !== 200) {
      throw new Error(body.message);
    }

    return body.token;
  }
}
