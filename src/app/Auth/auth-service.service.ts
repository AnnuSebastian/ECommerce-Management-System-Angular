import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from './user';
import { LoginResponseDto } from './login-response-dto';
import { UserDto } from './user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  apiUrl = environment.baseApiUrl + 'auth';

  constructor(private client:HttpClient) { }

  register(u:User):Observable<User>{
    return this.client.post<User>(this.apiUrl,u);
  }

  login(us:UserDto):Observable<LoginResponseDto>{
    let res = this.client.post<LoginResponseDto>(this.apiUrl + '/login',us);

    res.subscribe(response=>{
      localStorage.clear();//it clears all the details before login for overriding previous details
      localStorage.setItem('userDetails',JSON.stringify(response));
    },err=>{
      return null;
    })
    return res;
  }

  getUser():LoginResponseDto{ //get the user details from loginResponseDto
    let user = localStorage.getItem('userDetails');
    return JSON.parse(user || '{}');
  }

  logout(){
    localStorage.clear();//to clear localstorage after logout
  }

  isLoggedIn():boolean{
    return localStorage.getItem('userDetails')!= null? true : false; //terinory operator
  }
}
