import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MechanicService } from '../../services/mechanics.service';

@Component({
  selector: 'app-mechanic-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './mechanic-form.component.html',
  styleUrls: ['./mechanic-form.component.css']
})
export class MechanicFormComponent implements OnInit {
  @Input() mechanicId!: number; // Mechanic ID is passed from the parent
  mechanicForm!: FormGroup;

  constructor(private fb: FormBuilder, private mechanicService: MechanicService) {}

  ngOnInit(): void {
    // Initialize form
    this.mechanicForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

    // Load mechanic data
    this.loadMechanicData();
  }

  // Load the mechanic data from the server
  loadMechanicData(): void {
    this.mechanicService.getMechanic(this.mechanicId).subscribe({
      next: (data) => {
        this.mechanicForm.patchValue({
          firstName: data.mechanic_first_name,
          lastName: data.mechanic_last_name,
        });
      },
      error: (error) => console.error('Error fetching mechanic data', error),
    });
  }

  // Handle form submission
  onSubmit(): void {
    if (this.mechanicForm.valid) {
      const updatedMechanic = {
        mechanic_first_name: this.mechanicForm.value.firstName,
        mechanic_last_name: this.mechanicForm.value.lastName,
      };

      this.mechanicService.updateMechanic(this.mechanicId, updatedMechanic).subscribe({
        next: () => {
          alert('Mechanic updated successfully!');
        },
        error: (error) => {
          console.error('Update failed', error);
          alert('Failed to update mechanic');
        },
      });
    }
  }
}
