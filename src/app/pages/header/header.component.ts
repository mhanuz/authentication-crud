import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserMenus } from 'src/app/_models/userMenus';
import { AuththenticationLogicService } from 'src/app/_service/authlogic.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public userMenus: BehaviorSubject<UserMenus | null>;

  firstName: string;
  lastName: string;
  imagePath: string;
  constructor(private authService:AuththenticationLogicService,
    private router: Router,
    private http:HttpClient
    ){

  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    let apiToken = JSON.parse(localStorage.getItem('user'))['token'];
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${apiToken}`
    })
    const requestOptions = {headers: headers }

    this.http.get<UserMenus>(`${environment.apiUrl}/api/account/get-menus-user-info`, requestOptions).subscribe(response=>{
      if(response){
        this.firstName = response.userInfo.firstName;
        this.lastName = response.userInfo.lastName;
        this.imagePath = response.userInfo.imagePath;
      }
    }) 
  }

  logout() {
    localStorage.removeItem('user');
    this.authService.userSubject.next(null)
    this.router.navigate(['/login']);
}

}
