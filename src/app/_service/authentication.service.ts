import {  Observable } from "rxjs";

import { HttpClient} from "@angular/common/http"

import { environment } from "src/environments/environment.prod";
import { LoginRequest } from "../_models/auth.interface";
import { AuththenticationLogicService } from "./authlogic.service";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn:'root'
}
)
export class AuthenticationService {
  router: any;
  userSubject: any;
    
    constructor(
      private http: HttpClient,
      private authLogicService: AuththenticationLogicService
      ) {}

    

    login(body: LoginRequest): Observable<LoginRequest>{
      return this.http.post<LoginRequest>(`${environment.apiUrl}/api/account/sign-in`, body)
    }

     logout(){
     this.authLogicService.isLogoutSubject.next(true)   
     this.router.navigate(['/login']).then((isRedirect: any) => {
      if(isRedirect) {
        localStorage.removeItem('user');
        this.userSubject.next(null);
      }
     })
    }

  }
