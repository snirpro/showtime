import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EpisodesList {
  httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';
  constructor() { }

  showList(id: string){
      return this.httpClient.get(`${this.baseUrl}/episodes/${id}`);
  }
  
}
