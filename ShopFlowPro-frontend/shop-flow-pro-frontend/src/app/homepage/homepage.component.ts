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
  todaysOrders: { id: number; serviceId: number; vin: string; customer_first_name: string; customer_last_name: string; }[] = [];

  constructor(private serviceOrderService: ServiceOrderService) {}

  ngOnInit() {
    this.todaysOrders = this.serviceOrderService.getOrders();
  }

  navigateToFeature(feature: string): void {
    console.log('Navigating to feature: ' + feature); // Example implementation
  }
}
