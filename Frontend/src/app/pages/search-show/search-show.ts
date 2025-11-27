import { Component} from '@angular/core';
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
 //initilize the show name parameter and results for the answre from the service
  show: string = '';
  results: any[] = [] ;


  //initilize shared data variables
  selectedLanguages: string[] = [];
  selectedRating: string = "";
  selectedGenre: string[] = [];

  GenreFlag: boolean = false;

//the constructor keep the parameter that the search-bar component send into a string value 
  constructor(private route: ActivatedRoute, private router: Router, private searchService: Search) {
    this.route.paramMap.subscribe(params => {
      this.show = params.get('show') ?? '';
      this.Init();
    });
  }

  //send the show name to the search service to get all the shows information the API sends back
  Init(){
    this.searchService.searchShows(this.show).subscribe(results => {
    console.log('show results:', results);
    this.results = results; 
    });

  }

  //navigate to episodes component with the wanted show id 
  Episodes(id: string){
    this.router.navigate(['/episodes', id])
  }

  //do subscribe to the filters shared data so the component will be able to know the changes in real time
  ngOnInit() {
  this.searchService.selectedGenre$.subscribe(v =>  this.selectedGenre = v );
  this.searchService.selectedRating$.subscribe(v => this.selectedRating = v);
  this.searchService.selectedLanguages$.subscribe(v => this.selectedLanguages = v);
  }

  //check if the geners of the show are in the selected geners from the filter
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
  //check if the language of the show are in the selected languagess from the filter
  cheackLanguageFilter(language: string){
    if(this.selectedLanguages.length == 0){
      return true
    }else{
      return this.selectedLanguages.includes(language.toLowerCase())
    }
  }
  //check if the Rating of the show is bigger than the rating filter that was chosen
  cheackRaitingFilter(Rating: string){

    if(this.selectedRating.length == 0){
      return true
    }else{
      const cleanRating = this.selectedRating.slice(0,-1); // cut the + symbol from the Rating
      const choseRating = Number(cleanRating)
      return Number(Rating) > choseRating
    }
  }

  //filter the shows according to the filters that chosen and return only the shows that stend in the conditions
get filteredResults() {
  return this.results.filter(result =>
    this.cheackLanguageFilter(result.Language) &&
    this.cheackRaitingFilter(result.Rating.average) &&
    this.cheackGenerFilter(result.Generes)
  );
}

}