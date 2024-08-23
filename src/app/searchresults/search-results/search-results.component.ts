import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [NgFor],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
searchTerm: any;
selectedCategory: any;
filteredResults: any;
categories: any;

  onCategoryChange(category: string) {
  }

  onSearchChange() {
    // This function is triggered when the search term changes.
  }
}
