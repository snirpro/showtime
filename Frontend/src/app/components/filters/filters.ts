import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Search } from '../../services/search';
@Component({
  selector: 'app-filters',
  imports: [FormsModule],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})
export class Filters {

  selectedLanguages: string[] = [];
  selectedRating: string = "";
  selectedGenre: string[] = [];
  constructor(private searchService: Search){}

  onFiltersChange() {
  this.searchService.selectedGenre$.next(this.selectedGenre);
  this.searchService.selectedRating$.next(this.selectedRating);
  this.searchService.selectedLanguages$.next(this.selectedLanguages);
}
}
