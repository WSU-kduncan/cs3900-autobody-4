import { Component, OnInit } from '@angular/core';
import { MechanicService } from '../mechanics.service';

@Component({
  selector: 'app-mechanics',
  templateUrl: './mechanics.component.html',
  styleUrls: ['./mechanics.component.css']
})
export class MechanicsComponent implements OnInit {

  mechanics: any[] = [];
  newMechanic: any = {}; // Form model for new mechanic

  constructor(private mechanicService: MechanicService) { }

  ngOnInit(): void {
    this.getMechanics();
  }

  // Fetch all mechanics
  getMechanics(): void {
    this.mechanicService.getMechanics().subscribe(data => {
      this.mechanics = data;
    });
  }

  // Add a new mechanic
  addMechanic(): void {
    this.mechanicService.addMechanic(this.newMechanic).subscribe(data => {
      this.getMechanics();  // Refresh the list after adding
    });
  }

  // Delete a mechanic
  deleteMechanic(id: number): void {
    this.mechanicService.deleteMechanic(id).subscribe(data => {
      this.getMechanics();  // Refresh the list after deletion
    });
  }
}
