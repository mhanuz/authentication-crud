import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { LoginRequest, LoginResponse } from '../_models/auth.interface';
import { AuththenticationLogicService } from './authlogic.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authLogicService: AuththenticationLogicService
  ) {}

  login(body: LoginRequest) {
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/api/account/sign-in`,
      body
    );
  }

  logout() {
    this.authLogicService.isLogoutSubject.next(true);
    this.router.navigate(['/login']).then((isRedirect: any) => {
      if (isRedirect) {
        localStorage.removeItem('user');
        this.authLogicService.userSubject.next(null);
      }
    });
  }
}
