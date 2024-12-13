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
      serviceId: ['', [Validators.required, Validators.min(1)]],
      mechanicId: ['', [Validators.required, Validators.min(1)]],
      totalCost: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.serviceOrderForm.valid) {
      const newOrder = this.serviceOrderForm.value;

      // Call the service to add the new order
      this.serviceOrderService.addServiceOrder(newOrder).subscribe({
        next: (response) => {
          alert('Service order successfully created!');
          this.serviceOrderForm.reset();
        },
        error: (err) => {
          console.error('Error creating service order:', err);
          alert('Failed to create service order. Please try again.');
        }
      });
    } else {
      alert('Please fill in all required fields correctly!');
    }
  }
}

