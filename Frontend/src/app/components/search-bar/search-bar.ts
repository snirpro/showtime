import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Search } from '../../services/search';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})

export class SearchBar {

  showName: string = '';
  searchService = new Search();
  results: any;

  constructor(private router: Router) {}


onSubmit() {
  this.router.navigate(['/search-show', this.showName])

  this.searchService.searchShows(this.showName).subscribe(results => {
    console.log('results:', results);
    this.results = results;  
    });
}}