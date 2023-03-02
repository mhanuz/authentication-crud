import { Component } from '@angular/core';
import { map } from 'rxjs';
import { AuthenticationService } from './_service/authentication.service';
import { AuththenticationLogicService } from './_service/authlogic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'real-api-implementation';

  // constructor(
  //   private authLogicService:  AuththenticationLogicService,
  //   private authecticationService: AuthenticationService){

  // }

  //   authecticationService.login().pipe(map(user=>{
  //   localStorage.setItem('user', JSON.stringify(user));
  //   this.userSubject.next(user)
  //   return user;
  // }))



}
