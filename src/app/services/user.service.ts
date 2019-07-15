import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl = "http://localhost:8090/"

  constructor(private http: HttpClient) { }


  register(user:User){
    return this.http.post( this.serverUrl + 'users', user );
  }

  login(email:string,password:string){
    let user = { "email": email, "password": password};
    return this.http.post(this.serverUrl + "users/login", user);
  }

  view(id:number){
    return this.http.post(this.serverUrl + "users/", id);

  }

  update(id:number){
    return this.http.put(this.serverUrl + "users/" , id);

  }

  
}
