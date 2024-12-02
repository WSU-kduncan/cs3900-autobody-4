import { Component, OnInit } from '@angular/core';
import { ServiceOrderService } from '../service-order.service';
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
  serviceOrders: any[] = [];
  searchResults: any[] = [];

  constructor(private serviceOrderService: ServiceOrderService) {}

  ngOnInit() {
    // Fetch the service orders from the service
    this.serviceOrders = this.serviceOrderService.getOrders();
    this.searchResults = this.serviceOrders; // Initially, show all orders
  }

  onSearch() {
    if (this.searchQuery) {
      this.searchResults = this.serviceOrders.filter(order =>
        order.customer_first_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        order.customer_last_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        order.vin.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        order.serviceId.toString().includes(this.searchQuery)
      );
    } else {
      this.searchResults = this.serviceOrders; // If no search query, show all orders
    }
  }
}
