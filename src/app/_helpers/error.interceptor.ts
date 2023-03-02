import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { AuthenticationService } from "../_service/authentication.service";

@Injectable()
export class ErrorInterCeptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(err=>{
            if([401,403].includes(err.status) && this.authenticationService.userValue){
                this.authenticationService.logout()
            }

            const errror = err.message || err.statusText;
            
        }))
    }
}