import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Search {
  httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';
  constructor() { }

  /*BehaviorSubject is an object from RxJS that manage vriabele value in real time
    $ anonce that the varieble is a stream of data*/
  selectedGenre$ = new BehaviorSubject<string[]>([]);
  selectedRating$ = new BehaviorSubject<string>("");
  selectedLanguages$ = new BehaviorSubject<string[]>([]);

searchShows(query: string): Observable<any> {
  return this.httpClient.get(`${this.baseUrl}/search/shows?q=${query}`);
}


}
