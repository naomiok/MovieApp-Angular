import { Component, OnInit } from '@angular/core';
import { MovieStorageService } from 'src/app/services/movie-storage.service';
import { ActivatedRoute, Params } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs'
import { MovieService } from 'src/app/services/movie.service';
//import {HeaderComponent} from '../../layouts/header/header.component';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  moviesList = [];
  listName = 'popular';
  selectedCategory:string = 'popular';
  

  constructor(private storage: MovieStorageService,
    private route: ActivatedRoute,
    private movies: MovieService,
    ) { 

    }
  
  ngOnInit() {
    console.log('this.route.params = ' + this.route.params);
    this.route.params
    .subscribe(
      (params: Params) => {
        this.selectedCategory = params.category;        
         this.getList();
        
      }
    );

      }
      //console.log(this.header.movieList2);


     // movie : [];
      getList() {
        console.log('category =' +this.selectedCategory);
        this.storage.getList(this.selectedCategory)
        .subscribe(
          (response) => {
            console.log(response);

            this.moviesList = response['results'];
            console.log('moviesList = ' + this.moviesList);
          }
        );
      }

      getQuery(movieName) {
        console.log('movieName = ' +movieName);
        this.storage.search(movieName)
        .subscribe(
          (response) => {
            console.log(response);

            this.moviesList = response['results'];
            console.log('moviesList = ' + this.moviesList);
          }
        );
      }

  
   
    }

