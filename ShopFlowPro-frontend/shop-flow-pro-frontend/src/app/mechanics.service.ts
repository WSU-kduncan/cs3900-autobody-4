import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  private baseUrl = 'http://localhost:8081/shop-flow-pro-service/mechanics'; 

  constructor(private http: HttpClient) { }

  // GET: Retrieve all mechanics
  getMechanics(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // GET: Retrieve a specific mechanic by ID
  getMechanic(mechanicId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${mechanicId}`);
  }

  // POST: Add a new mechanic
  addMechanic(mechanic: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, mechanic);
  }

  // PUT: Update a mechanic
  updateMechanic(mechanicId: number, mechanic: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${mechanicId}`, mechanic);
  }

  // DELETE: Delete a mechanic
  deleteMechanic(mechanicId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${mechanicId}`);
  }
}
