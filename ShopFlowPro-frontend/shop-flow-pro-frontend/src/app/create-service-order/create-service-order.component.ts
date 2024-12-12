import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceOrderService } from '../../services/service-order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-service-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-service-order.component.html',
  styleUrls: ['./create-service-order.component.css']
})
export class CreateServiceOrderComponent {
  serviceOrderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private serviceOrderService: ServiceOrderService
  ) {
    // Initialize the form with validations
    this.serviceOrderForm = this.fb.group({
      customerFirstName: ['', Validators.required],
      customerLastName: ['', Validators.required],
      vin: ['', [Validators.required, Validators.pattern('[A-HJ-NPR-Z0-9]{17}')]],  // Basic VIN validation (17 characters, excluding I, O, Q)
      serviceId: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.serviceOrderForm.valid) {
      const formData = this.serviceOrderForm.value;
      const newOrder = {
        id: this.generateRandomId(),
        serviceId: formData.serviceId,
        vin: formData.vin,
        customer_first_name: formData.customerFirstName,
        customer_last_name: formData.customerLastName,
        date_received: new Date(),
        service_cost: 100 // You can update this as needed
      };

      // Call the service to add the new order
      this.serviceOrderService.addOrder(newOrder);
      alert('New service order created!');
    } else {
      alert('Please fill in all required fields correctly!');
    }
  }

  private generateRandomId(): number {
    return Math.floor(10000 + Math.random() * 90000); // Generates a 5-digit number
  }
}

