import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceOrderService } from '../service-order.service';

@Component({
  selector: 'app-service-order-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './service-order-details.component.html',
  styleUrl: './service-order-details.component.css'
})
export class ServiceOrderDetailsComponent {
  // Variable to hold the service order details
  serviceOrder: any;

  // Injects activatedRoute to access the route parameters
  // Injects custom service order made from creating a new service order
  constructor(
    private route: ActivatedRoute,
    private serviceOrderService: ServiceOrderService
  ) {}

  // Lifecycle hook which is executed when the component is initialized
  // Retrieves the id parameter from url (route) then find the service by 
  // matching it with the id from the serviceOrderService orders
  ngOnInit(): void {
    const orderId = Number(this.route.snapshot.paramMap.get('id'));
    this.serviceOrder = this.serviceOrderService.getOrders().find(order => order.id === orderId);
  }
}
