import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  private baseUrl = 'http://localhost:8081/shop-flow-pro-service/services'; 
  
  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}
