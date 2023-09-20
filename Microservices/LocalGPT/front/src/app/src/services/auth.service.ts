// authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  tokenKey: string = "jwt_token";

  constructor(private http: HttpClient, private router: Router) {
  }


  isAuthenticatedUser(): boolean {
    const jwt = this.getToken();
    if (jwt != null)
      return true;
    return false;
  }

  login(username: string, password: string): void {
    const credentials = { username, password };

      this.http.post<any>(`${environment.authApiUrl}/auth/login`, credentials).subscribe({
        next: (response) => {
          const token: string = response.token;
          this.saveToken(token);
          this.router.navigate(["/chat"]);
        },
        error: () => {console.log("Authentication failed")}
      })
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  logout(): void {
    // Clear user session and perform any necessary cleanup
  }
}
