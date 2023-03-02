import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LoginRequest } from "../_models/auth.interface";

@Injectable({
    providedIn:'root'
})
export class AuththenticationLogicService {
    private userSubject: BehaviorSubject<LoginRequest | null>;
    public user$: Observable<LoginRequest | null>;
    public isLogoutSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(){
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user$ = this.userSubject.asObservable();
    }
    public get userValue(){
        return  this.userSubject.value;
    }
}