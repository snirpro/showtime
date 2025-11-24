import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { SearchBar } from './components/search-bar/search-bar';
import { Filters } from './components/filters/filters';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, SearchBar, Filters],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Frontend');
}
