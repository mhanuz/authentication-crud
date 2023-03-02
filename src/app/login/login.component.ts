import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

import { AuthenticationService } from '../_service/authentication.service';
import { LoginForm } from './loginForm.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup<LoginForm>;
  constructor(private authenticationService: AuthenticationService){
    
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup<LoginForm>({
        userName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        rememberMe: new FormControl(false)
    })
  }

  
  onSubmit(){
     console.log(this.loginForm.value)
    if(this.loginForm.valid){
      const loginData = this.loginForm.value;
      this.authenticationService.login( {
        userName: loginData.userName,
        captchaText: '', 
        password: loginData.password,
        rememberMe: loginData.rememberMe,
        templateId: 2
      }).subscribe((response)=>{
        if(response){
          console.log(response);
          localStorage.setItem('user', JSON.stringify(response))
        }
      })
    }
  }

}
