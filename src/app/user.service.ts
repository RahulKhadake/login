import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl="https://projectapi.gerasim.in/api/UserApp/GetAllUsers";
  constructor(private https:HttpClient) { }


  getAllUsers() {

    return this.https.get(this.userUrl);
  }
  
}
