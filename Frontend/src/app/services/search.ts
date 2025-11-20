import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Search {
    httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';
  constructor() { }

searchShows(query: string): Observable<any> {
  return this.httpClient.get(`${this.baseUrl}/search/shows?q=${query}`);
}


}
