import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Search } from '../../services/search';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})

export class SearchBar {

  showName: string = '';
  searchService = new Search();
  constructor(private router: Router) {}


  /*function that sends the search term as a parameter
    to the search-show component and navigate to it*/
onSubmit() {
  this.router.navigate(['/search-show', this.showName])
}}