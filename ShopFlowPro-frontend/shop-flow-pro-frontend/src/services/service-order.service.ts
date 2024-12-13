import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceOrderService {


  constructor(private http: HttpClient) { }


  private baseUrl = 'http://localhost:8081/shop-flow-pro-service/serviceOrders'; 


  // GET service order by id
  getServiceOrder(serviceOrderId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${serviceOrderId}`);
  }

  addServiceOrder(serviceOrder: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, serviceOrder);
  }

}
