import { Component, OnInit } from '@angular/core';
import { ServiceOrderService } from '../../services/service-order.service';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterModule, NgIf, FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery: string = '';
  searchResults: any[] = [];
  serviceOrderIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    constructor(private serviceOrderService: ServiceOrderService) {}

    ngOnInit(): void {
      this.fetchServiceOrders();
    }

    fetchServiceOrders(): void {
      const orders: any[] = [];
  let remainingRequests = this.serviceOrderIds.length;

  this.serviceOrderIds.forEach((id) => {
    this.serviceOrderService.getServiceOrder(id).subscribe({
      next: (order) => {
        orders.push(order);
        remainingRequests--;
        if (remainingRequests === 0) {
          this.searchResults = orders;
        }
      },
      error: (error) => {
        console.error(`Error fetching ServiceOrder ID ${id}:`, error);
        remainingRequests--;
        if (remainingRequests === 0) {
          this.searchResults = orders; // Still show successful results
        }
      }
    });
  });
}

    onSearch(): void {
      const query = this.searchQuery.trim().toLowerCase();
  
      if (query) {
        this.searchResults = this.searchResults.filter((order) =>
          [
            order.customerFirstName,
            order.customerLastName,
            order.vin,
            order.serviceOrderId.toString(),
          ]
            .map((field) => field?.toLowerCase() || '')
            .some((field) => field.includes(query))
        );
      } else {
        this.searchResults; // Show all if search is empty
      }
    }
}
