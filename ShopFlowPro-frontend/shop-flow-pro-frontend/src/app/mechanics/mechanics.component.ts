import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mechanics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mechanics.component.html',
  styleUrl: './mechanics.component.css'
})
export class MechanicsComponent {
  mechanics = [
    { id: 1, name: 'John Doe', specialty: 'Honda' },
    { id: 2, name: 'Jane Smith', specialty: 'Chevrolet' },
  ];
}
