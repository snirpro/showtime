import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Search } from '../../services/search';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  public searchTerm: string = '';
  searchService = new Search();
  results: any;


onSubmit() {
  this.searchService.searchShows(this.searchTerm)
    .subscribe(results => {
      console.log('results:', results);
      this.results = results;  
    });
}

}
