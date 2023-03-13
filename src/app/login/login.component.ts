import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../_service/authentication.service';
import { LoginForm } from './loginForm.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  submitted: boolean;

  loginForm: FormGroup<LoginForm>;
  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private toaster: ToastrService
    ){
    
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup<LoginForm>({
        userName: new FormControl(null, {validators:[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]}),
        password: new FormControl(null, {validators:[Validators.required]}),
        rememberMe: new FormControl(false)
    })
    this.submitted = false;
  }

  
  onSubmit(){
    this.submitted = true
    console.log(this.loginForm);
    if(this.loginForm.valid){
      console.log("valid",this.loginForm);
      const loginData = this.loginForm.value;
      this.authenticationService.login( {
        userName: loginData.userName,
        captchaText: '', 
        password: loginData.password,
        rememberMe: loginData.rememberMe,
        templateId: 2
      }).subscribe((response)=>{
        if(response){
          localStorage.setItem('user', JSON.stringify(response))
          this.router.navigate([''])
          this.toaster.success("Successfully Login")
        }
      }, (error) => {
        if(error instanceof HttpErrorResponse) {
           this.errorMessage = error.error.message;
           this.toaster.error(this.errorMessage)
        }
      })
    }
  }

}
