import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import {Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl = "http://localhost:8090/"

  constructor(private http: HttpClient) { }


  register(user:User){
    return this.http.post( this.serverUrl + 'users', user);
  }

  login(email:string,password:string){
    let user = { "email": email, "password": password};
    return this.http.post(this.serverUrl + "users/login", user);
  }

  findById(id:number){
    return this.http.get(this.serverUrl + `users/${id}`);
  }

  view(id:number){
    return this.http.post(this.serverUrl + "users/",  id);

  }

  update(id:number,user){

    return this.http.put(this.serverUrl +  `users/${id}` , user);

  }

  isUserLoggedIn():boolean{
    //let user = sessionStorage.getItem('user');
    let isLoggedOut = sessionStorage.getItem('loggedOut');
    let isLoggedIn = sessionStorage.getItem('loggedIn');
  //   let invalid = (user === 'null');//invalid is TRUE if the login is invalid.
  //  console.log(invalid);
  //   return !invalid;
    
    if(isLoggedIn === 'true' && isLoggedOut === 'false'){//Logging in
      console.log("Logged in");
      return true;
    }
    else{ 
      return false;
    }
  }

  logout(){
    sessionStorage.removeItem('user');
    sessionStorage.setItem('loggedOut', "true");
    sessionStorage.setItem('loggedIn', "false");
    //return false;
  }
  // getUser() : Observable <User[]>{
  //   return this.http.get<User[]>(this.serverUrl)
  //   .pipe(
  //     tap(_ => this.log('fetched user')),
  //     catchError(this.handleError<User[]>('getUser',[])))
  //   }
  }

  
