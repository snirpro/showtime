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
  //all the languages
languagesList = [
  { label: 'Afrikaans', value: 'afrikaans' },
  { label: 'Albanian', value: 'albanian' },
  { label: 'Arabic', value: 'arabic' },
  { label: 'Armenian', value: 'armenian' },
  { label: 'Azerbaijani', value: 'azerbaijani' },
  { label: 'Basque', value: 'basque' },
  { label: 'Belarusian', value: 'belarusian' },
  { label: 'Bengali', value: 'bengali' },
  { label: 'Bosnian', value: 'bosnian' },
  { label: 'Bulgarian', value: 'bulgarian' },
  { label: 'Burmese', value: 'burmese' },
  { label: 'Catalan', value: 'catalan' },
  { label: 'Chechen', value: 'chechen' },
  { label: 'Chinese', value: 'chinese' },
  { label: 'Croatian', value: 'croatian' },
  { label: 'Czech', value: 'czech' },
  { label: 'Danish', value: 'danish' },
  { label: 'Divehi', value: 'divehi' },
  { label: 'Dutch', value: 'dutch' },
  { label: 'English', value: 'english' },
  { label: 'Estonian', value: 'estonian' },
  { label: 'Fijian', value: 'fijian' },
  { label: 'Finnish', value: 'finnish' },
  { label: 'French', value: 'french' },
  { label: 'Galician', value: 'galician' },
  { label: 'Georgian', value: 'georgian' },
  { label: 'German', value: 'german' },
  { label: 'Greek', value: 'greek' },
  { label: 'Gujarati', value: 'gujarati' },
  { label: 'Hebrew', value: 'hebrew' },
  { label: 'Hindi', value: 'hindi' },
  { label: 'Hungarian', value: 'hungarian' },
  { label: 'Icelandic', value: 'icelandic' },
  { label: 'Indonesian', value: 'indonesian' },
  { label: 'Irish', value: 'irish' },
  { label: 'Italian', value: 'italian' },
  { label: 'Japanese', value: 'japanese' },
  { label: 'Javanese', value: 'javanese' },
  { label: 'Kannada', value: 'kannada' },
  { label: 'Kazakh', value: 'kazakh' },
  { label: 'Kongo', value: 'kongo' },
  { label: 'Korean', value: 'korean' },
  { label: 'Kyrgyz', value: 'kyrgyz' },
  { label: 'Lao', value: 'lao' },
  { label: 'Latin', value: 'latin' },
  { label: 'Latvian', value: 'latvian' },
  { label: 'Lithuanian', value: 'lithuanian' },
  { label: 'Luxembourgish', value: 'luxembourgish' },
  { label: 'Malagasy', value: 'malagasy' },
  { label: 'Malay', value: 'malay' },
  { label: 'Malayalam', value: 'malayalam' },
  { label: 'Marathi', value: 'marathi' },
  { label: 'Mongolian', value: 'mongolian' },
  { label: 'Norwegian', value: 'norwegian' },
  { label: 'Panjabi', value: 'panjabi' },
  { label: 'Pashto', value: 'pashto' },
  { label: 'Persian', value: 'persian' },
  { label: 'Polish', value: 'polish' },
  { label: 'Portuguese', value: 'portuguese' },
  { label: 'Romanian', value: 'romanian' },
  { label: 'Russian', value: 'russian' },
  { label: 'Serbian', value: 'serbian' },
  { label: 'Sinhalese', value: 'sinhalese' },
  { label: 'Slovak', value: 'slovak' },
  { label: 'Slovenian', value: 'slovenian' },
  { label: 'Spanish', value: 'spanish' },
  { label: 'Swahili', value: 'swahili' },
  { label: 'Swedish', value: 'swedish' },
  { label: 'Tagalog', value: 'tagalog' },
  { label: 'Tamil', value: 'tamil' },
  { label: 'Telugu', value: 'telugu' },
  { label: 'Thai', value: 'thai' },
  { label: 'Turkish', value: 'turkish' },
  { label: 'Ukrainian', value: 'ukrainian' },
  { label: 'Urdu', value: 'urdu' },
  { label: 'Uzbek', value: 'uzbek' },
  { label: 'Vietnamese', value: 'vietnamese' },
  { label: 'Welsh', value: 'welsh' },
  { label: 'Yoruba', value: 'yoruba' },
  { label: 'Zulu', value: 'zulu' },
  { label: 'Scottish Gaelic', value: 'scottish-gaelic' }
];

//all the geners 
genresList = [
  { label: 'Action', value: 'action' },
  { label: 'Adult', value: 'adult' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'Anime', value: 'anime' },
  { label: 'Children', value: 'children' },
  { label: 'Comedy', value: 'comedy' },
  { label: 'Crime', value: 'crime' },
  { label: 'DIY', value: 'diy' },
  { label: 'Drama', value: 'drama' },
  { label: 'Espionage', value: 'espionage' },
  { label: 'Family', value: 'family' },
  { label: 'Fantasy', value: 'fantasy' },
  { label: 'Food', value: 'food' },
  { label: 'History', value: 'history' },
  { label: 'Horror', value: 'horror' },
  { label: 'Legal', value: 'legal' },
  { label: 'Medical', value: 'medical' },
  { label: 'Music', value: 'music' },
  { label: 'Mystery', value: 'mystery' },
  { label: 'Nature', value: 'nature' },
  { label: 'Romance', value: 'romance' },
  { label: 'Science-Fiction', value: 'science-fiction' },
  { label: 'Sports', value: 'sports' },
  { label: 'Supernatural', value: 'supernatural' },
  { label: 'Thriller', value: 'thriller' },
  { label: 'Travel', value: 'travel' },
  { label: 'War', value: 'war' },
  { label: 'Western', value: 'western' }
];
//evry rating 
ratingList = [
  { label: '1+', value: '1+' },
  { label: '2+', value: '2+' },
  { label: '3+', value: '3+' },
  { label: '4+', value: '4+' },
  { label: '5+', value: '5+' },
  { label: '6+', value: '6+' },
  { label: '7+', value: '7+' },
  { label: '8+', value: '8+' },
  { label: '9+', value: '9+' }
];

 //initialize 3 variables for shared data between the filter component and the search-show component
  selectedLanguages: string[] = [];
  selectedRating: string = "";
  selectedGenre: string[] = [];

  //initialize variable that will check which filter to open
  openSection: string | null = null;

  constructor(private searchService: Search){}
  //function that open and close the filter section acording to which filter is pressed
  toggleSection(section: string) {
    if (this.openSection === section) {
      this.openSection = null; //close
    } else {
      this.openSection = section; //open
    }
  }
  //function that adds and remove values from the Genres filter shared data and update it 
  toggleGenre(value: string, event: any) {
    if (event.target.checked) {
      //add the value to the shered data
      this.selectedGenre.push(value);
    } else {
      // remove the value from the shared data
      this.selectedGenre = this.selectedGenre.filter(v => v !== value);
    }

    this.onFiltersChange();
  }

//function that adds and remove values from the Languages filter shared data and update it 
  toggleLanguage(value: string, event: any) {
    if (event.target.checked) {
      this.selectedLanguages.push(value);
    } else {
      this.selectedLanguages = this.selectedLanguages.filter(v => v !== value);
    }

    this.onFiltersChange();
  }
//update the Rating filter shared data
  selectRating(value: string) {
    this.selectedRating = value;
    this.onFiltersChange();
  }
  //function that change the shared data at the search service 
  onFiltersChange() {
  this.searchService.selectedGenre$.next(this.selectedGenre);
  this.searchService.selectedRating$.next(this.selectedRating);
  this.searchService.selectedLanguages$.next(this.selectedLanguages);
  }


//function that clear all the shared data 
CleanFilters(){
this.selectedRating = "";
this.selectedGenre = [];
this.selectedLanguages = []
this.onFiltersChange();
}
}
