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
  // Initializing string variable to hold users search query
  // Initializing arrays to hold all service orders and filtered results
  searchQuery: string = '';
  serviceOrders: any[] = [];
  searchResults: any[] = [];

  // Injecting the serviceOrderService to retrieve service order details
  constructor(private serviceOrderService: ServiceOrderService) {}

  // Fetching the service orders from the service to store them in the arrays above
  ngOnInit() {
    // Fetch the service orders from the service
    this.serviceOrders = this.serviceOrderService.getOrders();
    this.searchResults = this.serviceOrders; // Initially, show all orders
  }

  // Triggers method when query is enetered 
  // If the query has a value then it filters the service order based on the trigger
  // Then checks if anything matches based on fist and last name, vin, or service id
  // If the query doesnt match then display all service orders
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
