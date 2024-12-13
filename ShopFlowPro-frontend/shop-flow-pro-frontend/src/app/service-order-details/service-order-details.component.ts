import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceOrderService } from '../../services/service-order.service';

@Component({
  selector: 'app-service-order-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './service-order-details.component.html',
  styleUrl: './service-order-details.component.css'
})
export class ServiceOrderDetailsComponent {
  serviceOrder: any = null; // Holds the fetched service order
  errorMessage: string | null = null; // Handles errors

  constructor(
    private route: ActivatedRoute,
    private serviceOrderService: ServiceOrderService
  ) {}

  ngOnInit(): void {
    const orderId = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(orderId)) {
      this.serviceOrderService.getServiceOrder(orderId).subscribe({
        next: (response) => {
          this.serviceOrder = response; // Assuming API returns the service order directly
        },
        error: (error) => {
          console.error('Error fetching service order:', error);
          this.errorMessage = 'Service order not found.';
        },
      });
    } else {
      this.errorMessage = 'Invalid service order ID.';
    }
  }
}
