import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MechanicService } from '../../services/mechanics.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-mechanic',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './add-mechanic.component.html',
  styleUrl: './add-mechanic.component.css'
})
export class AddMechanicComponent {
  mechanic = {
    mechanicId: '',
    firstName: '',
    lastName: ''
  };

  constructor(
    private mechanicService: MechanicService,
    private router: Router
  ) { }

  submitForm() {
    const mechanicData = {
      mechanicId: parseInt(this.mechanic.mechanicId, 10),
      firstName: this.mechanic.firstName,
      lastName: this.mechanic.lastName
    };

    this.mechanicService.addMechanic(mechanicData).subscribe(() => {
      alert('Mechanic added successfully');
      this.router.navigate(['/mechanics']);
    });
  }
}