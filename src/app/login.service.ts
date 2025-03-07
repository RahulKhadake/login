import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="https://projectapi.gerasim.in/api/BankLoan/login";
  private tokenAPIurl="https://projectapi.gerasim.in/api/UserApp/login"
  constructor(private http:HttpClient) { }


  login(userObj:any):Observable<any>{
    return this.http.post<any>(this.baseUrl,userObj);
  }

  tokenAPiURl(userdata:any):Observable<any>{
   
     return this.http.post<any>(this.tokenAPIurl,userdata)

  }
}
