import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceOrderService } from '../../services/service-order.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  todaysOrders: any[] = [];
  serviceOrderIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor(private serviceOrderService: ServiceOrderService) {}

  ngOnInit() {
    this.loadTodaysOrders();
  }
  loadTodaysOrders(): void {
    const today = new Date().toISOString().split('T')[0];
    const orders: any[] = [];
    let remainingRequests = this.serviceOrderIds.length;
  
    this.serviceOrderIds.forEach((id) => {
      this.serviceOrderService.getServiceOrder(id).subscribe({
        next: (order) => {
          const orderDate = new Date(order.dateReceived).toISOString().split('T')[0];
          if (orderDate === today) {
            orders.push(order);
          }
          remainingRequests--;
          if (remainingRequests === 0) {
            this.todaysOrders = orders;
          }
        },
        error: (error) => {
          console.error(`Error fetching ServiceOrder ID ${id}:`, error);
          remainingRequests--;
          if (remainingRequests === 0) {
            this.todaysOrders = orders; // Still show successful results
          }
        }
      });
    });
  }
}