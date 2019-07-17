import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MovieStorageService } from 'src/app/services/movie-storage.service';
import {MovieListComponent} from '../../component/movie-list/movie-list.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

   constructor(private storage : MovieStorageService, private userService:UserService ) { }
  

  ngOnInit() {
  }

  query:string;
//  search(query){
//    console.log(this.query);
//  }

moviesList2 = [];
searchMovie(movieName) {
  console.log("query =" +movieName)
  this.storage.search(movieName)
  .subscribe(
    (response) => {
      this.moviesList2 = response['results'];
      console.log('movieListQuery =' + this.moviesList2)
      //this.sortByPopularity(this.moviesList);
    }
  );
}


}



