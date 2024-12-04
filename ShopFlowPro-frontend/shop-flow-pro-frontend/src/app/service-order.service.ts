import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceOrderService {


  constructor(private http: HttpClient) {

  }
  private orders = [
    { 
      id: 12345, 
      serviceId: 1, 
      vin: '1A2B3C4D5E6F7G8H9I0J', 
      customer_first_name: 'John', 
      customer_last_name: 'Doe', 
      date_received: new Date(), 
      service_cost: 99.99 
    },
    { 
      id: 67890, 
      serviceId: 2, 
      vin: '0J9I8H7G6F5E4D3C2B1A', 
      customer_first_name: 'Jane', 
      customer_last_name: 'Smith', 
      date_received: new Date(), 
      service_cost: 149.99 
    }
  ];

  // Method to get the orders
  getOrders() {
    /** 
    this.http.get("").subscribe({
      next:(res: any) => {
        this.orders = res.orders
      }, error: (error) => {
        console.error(error)
      }
    })
    */
    return this.orders;
  }

  addOrder(order: { 
    id: number; 
    serviceId: number; 
    vin: string; 
    customer_first_name: string; 
    customer_last_name: string; 
    date_received: Date; 
    service_cost: number;
  }) {
    this.orders.push(order);
  }
}
