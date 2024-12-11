import { Component, OnInit } from '@angular/core';
import { MechanicService } from '../mechanics.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mechanics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mechanics.component.html',
  styleUrls: ['./mechanics.component.css']
})
export class MechanicsComponent implements OnInit {

  mechanics: any[] = [];
  newMechanic: any = {}; // Form model for new mechanic
  showDeletePopup: boolean = false; // Flag to toggle the delete confirmation popup
  selectedMechanicId: number | null = null; // ID of the mechanic selected for deletion


  constructor(private mechanicService: MechanicService) { }

  ngOnInit(): void {
    this.getMechanics();
  }

  // Fetch all mechanics
  getMechanics(): void {
    this.mechanicService.getMechanics(1, 10).subscribe(response => {
      console.log(response);
      this.mechanics = response.data; // Extract the `data` property from the response
    });
  }
  

  // Add a new mechanic
  addMechanic(): void {
    this.mechanicService.addMechanic(this.newMechanic).subscribe(data => {
      this.getMechanics();  // Refresh the list after adding
    });
  }

  // Delete a mechanic
  deleteMechanic(): void {
    if (this.selectedMechanicId !== null) {
      this.mechanicService.deleteMechanic(this.selectedMechanicId).subscribe(() => {
        this.getMechanics();
        this.cancelDelete();
      });
    }
  }
  cancelDelete(): void {
    this.showDeletePopup = false; // Hide the confirmation popup
    this.selectedMechanicId = null; // Clear the selected mechanic ID
  }

  updateMechanic(id: number): void {
    // Placeholder for update logic
    console.log(`Update mechanic with ID: ${id}`);
  }
  
  confirmDelete(mechanicId: number): void {
    this.selectedMechanicId = mechanicId; // Store the ID of the mechanic to delete
    this.showDeletePopup = true; // Show the confirmation popup
  }
}
