import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Search } from '../../services/search';

@Component({
  selector: 'app-search-show',
  standalone: true,
  imports: [],
  templateUrl: './search-show.html',
  styleUrl: './search-show.css',
})
export class SearchShow {

  searchService = new Search();
  show: string = '';
  results: any;




  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.show = params.get('show') ?? '';
      this.Init();
    });

  }
  Init(){
    this.searchService.searchShows(this.show).subscribe(results => {
    console.log('show results:', results);
    this.results = results; 
    });

  }}