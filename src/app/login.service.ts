import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="https://projectapi.gerasim.in/api/BankLoan/login";
  constructor(private http:HttpClient) { }


  login(userObj:any):Observable<any>{
    return this.http.post<any>(this.baseUrl,userObj);
  }
}
