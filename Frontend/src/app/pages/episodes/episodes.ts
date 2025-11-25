import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodesList } from '../../services/episodes-list';

@Component({
  selector: 'app-episodes',
  imports: [],
  templateUrl: './episodes.html',
  styleUrl: './episodes.css',
})
export class Episodes {

  id: string = '';//initilize show id parameter
  results: any[] = [];

  //Pagination initilize
  currentPage: number = 1;//first page 
  itemsPerPage: number = 20;//amount of episodes in the page
  paginatedResults: any[] = []; //the episodes information for the page

//the constractor get the show id as a parameter from the search-show component and keep it in a variable
  constructor(private route: ActivatedRoute, private EpisodeService: EpisodesList){
        this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '';
      this.Init();
    });
  }
//sends the show id to the episode-list service to get back all the episodes of the show
  Init(){
    this.EpisodeService.showList(this.id).subscribe(results => {
    console.log('show results:', results);
    this.results = results; 
    this.updatePagination();
    });
  }

  //put in the PaginatedResults the episodes information for the current page
  updatePagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.paginatedResults = this.results.slice(start, end);
  }
  //move to next page and update the PaginatedResults
  nextPage() {
    if ((this.currentPage * this.itemsPerPage) < this.results.length) {
      this.currentPage++;
      this.updatePagination();
    }
  }
  //move to previos page and update the PaginatedResults
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
 //calculate the amount of pages in total
  get totalPages(): number {
    return Math.ceil(this.results.length / this.itemsPerPage);
  }

}
