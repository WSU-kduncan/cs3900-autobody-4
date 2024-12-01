import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string | undefined>();

  searchForm = new FormGroup({
    searchQuery: new FormControl('', Validators.required),
  });

  onSearch() {
    if (this.searchForm.valid) {
      const searchQuery = this.searchForm.value.searchQuery || undefined; // Handle null case
      this.searchEvent.emit(searchQuery);
    }
  }
}
