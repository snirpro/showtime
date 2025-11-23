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

  id: string = '';
  EpisodeService = new EpisodesList();
  results: any;

  constructor(private route: ActivatedRoute){
        this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '';
      this.Init();
    });
  }

  Init(){
      this.EpisodeService.showList(this.id).subscribe(results => {
    console.log('show results:', results);
    this.results = results; 
    });
  }
}
