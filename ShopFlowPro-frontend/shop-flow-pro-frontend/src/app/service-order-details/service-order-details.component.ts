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
  serviceOrder: any;

  constructor(
    private route: ActivatedRoute,
    private serviceOrderService: ServiceOrderService
  ) {}

  ngOnInit(): void {
    const orderId = Number(this.route.snapshot.paramMap.get('id'));
    this.serviceOrder = this.serviceOrderService.getOrders().find(order => order.id === orderId);
  }
}
