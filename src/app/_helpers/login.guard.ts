import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class LoginGuard implements CanActivate{

    constructor(private router: Router){

    }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (!localStorage.getItem('user')) {
            return true;
        }
        
        this.router.navigate([''])
        return false;

    }

}