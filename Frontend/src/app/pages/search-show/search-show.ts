import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Search } from '../../services/search';

@Component({
  selector: 'app-search-show',
  standalone: true,
  imports: [],
  templateUrl: './search-show.html',
  styleUrl: './search-show.css',
})
export class SearchShow {
  show: string = '';
  results: any;

  selectedLanguages: string[] = [];
  selectedRating: string = "";
  selectedGenre: string[] = [];

  GenreFlag: boolean = false;


  constructor(private route: ActivatedRoute, private router: Router, private searchService: Search) {
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

  }

  Episodes(id: string){
    this.router.navigate(['/episodes', id])
  }
  ngOnInit() {
  this.searchService.selectedGenre$.subscribe(v =>  this.selectedGenre = v );
  this.searchService.selectedRating$.subscribe(v => this.selectedRating = v);
  this.searchService.selectedLanguages$.subscribe(v => this.selectedLanguages = v);
  }

  cheackGenerFilter(geners: string[]){
    this.GenreFlag = false;
    if(this.selectedGenre.length == 0){
        this.GenreFlag = true;
      }
    for (let i = 0; i < geners.length; i++) {
      if(this.selectedGenre.includes(geners[i].toLowerCase())){
       this.GenreFlag = true;
      }
    }
    return this.GenreFlag;
  }
  cheackLanguageFilter(language: string){
    if(this.selectedLanguages.length == 0){
      return true
    }else{
      return this.selectedLanguages.includes(language.toLowerCase())
    }
  }
  cheackRaitingFilter(Rating: string){

    if(this.selectedRating.length == 0){
      return true
    }else{
      const cleanRating = this.selectedRating.slice(0,-1); // cut the + symbol from the Rating
      const choseRating = Number(cleanRating)
      return Number(Rating) > choseRating
    }
  }



}