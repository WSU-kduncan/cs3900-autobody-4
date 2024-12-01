import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-list',
  standalone: true,
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
  imports: [RouterModule, CommonModule],
})
export class ServiceListComponent implements OnInit {

  services: any[] = [
    { id: 1, name: 'Oil Change', description: 'Change the engine oil and filter.' },
    { id: 2, name: 'Brake Service', description: 'Inspect and replace brake pads if needed.' },
    { id: 3, name: 'Tire Rotation', description: 'Rotate tires to ensure even wear.' },
    { id: 4, name: 'Battery Check', description: 'Test and replace the battery if necessary.' },
    { id: 5, name: 'Engine Diagnostics', description: 'Diagnose engine issues using onboard diagnostics.' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewServiceDetails(serviceId: number): void {
    this.router.navigate([`/service-details/${serviceId}`]);
  }

}
