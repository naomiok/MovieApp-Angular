import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class MovieStorageService {

  private apiKey = '?api_key=a32336a33de0b46793edc7ba5645633a';
  private apiUrl = 'https://api.themoviedb.org/';
  imageUrl = 'https://image.tmdb.org/t/p/';


  constructor(private http: HttpClient,) { }

  // private searchFilter = new Subject<any>();
  // searchFilterEmited$ = this.searchFilter.asObservable();
  // emitChange(change: any) {
  //     this.searchFilter.next(change);
  // }


  getList(category){
    console.log('category = ' + category)
    //https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28
    //return this.http.get(this.apiUrl + '3/discover/movie' + this.apiKey + '&with_genres=28');
    //return this.http.get(this.apiUrl + '3/movie/' + category + this.apiKey);
    return this.http.get(this.apiUrl + '3/discover/movie' + this.apiKey + '&with_genres=' + category)
  }

  getImageUrl(){
    return this.imageUrl;
  }

  search(query){
    console.log('query = ' + query)
    //query = this.convert(query);
    query = query.toLowerCase();
    return this.http.get(this.apiUrl + '3/search/movie' + this.apiKey + '&query=' +  query );
  }
//dont need as long as we dont put any none characters in it
  // convert(string){
  //   console.log('before .replace= ' + string);
  //   string = string.toLowerCase()
  //   .replace(/[^a-z0-9 -]/g, '')
  //   .replace(/\s+/g, '+')
  //   .replace(/-+/g, '+');
  //   console.log('after .replace= '+ string);
  //   return string;

  //}

}
