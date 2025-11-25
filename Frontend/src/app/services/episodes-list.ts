import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EpisodesList {
  httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';
  constructor() { }


  /*a function that get the id of a show and send is as a parameter to the server*/
  showList(id: string): Observable<any>{
      return this.httpClient.get(`${this.baseUrl}/episodes/${id}`);
  }
  
}
