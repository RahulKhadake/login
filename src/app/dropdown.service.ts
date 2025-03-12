import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  private baseUrl = 'https://localhost:7073/api/Master/GetAllState';
 

  constructor(private http: HttpClient) {}

  getAllStatus(): Observable<any> {
    return this.http.get<any>(this.baseUrl); // Ensure correct type
  }

  getAlldistrictbyStateId(stateId: number): Observable<any> {
    return this.http.get<any>(`https://localhost:7073/api/Master/GetDistrictByStateId/${stateId}`);
  }

  districtChange(districtId: number): Observable<any> {
    return this.http.get<any>(`https://localhost:7073/api/Master/GetCityByDistrictId?districtId/${districtId}`);
  }
  
}


