import { Component, Input, OnInit } from '@angular/core';
import {MovieStorageService} from '../../services/movie-storage.service'
import {Subject} from 'rxjs';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie;
  movieDetails = {};
  imgUrl: string;
  posterUrl: string;



  constructor( private storage: MovieStorageService) { }

  ngOnInit(
  
  
  
  ) {
  }

}
