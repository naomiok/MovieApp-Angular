import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { MovieStorageService } from './services/movie-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  filter= '';
  constructor(
    private movies: MovieStorageService,
  ) {}
  ngOnInit() {

  }

  // search(filter) {
  //   this.movies.emitChange(filter);
  // }
}
