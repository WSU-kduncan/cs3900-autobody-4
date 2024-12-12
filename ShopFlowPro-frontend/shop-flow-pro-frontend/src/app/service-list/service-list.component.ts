import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceListService } from '../../services/service-list.service';

@Component({
  selector: 'app-service-list',
  standalone: true,
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
  imports: [RouterModule, CommonModule],
})
export class ServiceListComponent implements OnInit {

  services: { serviceName: string, serviceID: number }[] = [];

  constructor(private serviceListService: ServiceListService) {}
  
  ngOnInit(): void {
    this.fetchServices();
  }

  fetchServices(): void {
    this.serviceListService.getServices().subscribe({
      next: (response) => {
        this.services = response.data;
      },
      error: (error) => {
        console.error('Error fetching services:', error)
      }
    })
  }
}
