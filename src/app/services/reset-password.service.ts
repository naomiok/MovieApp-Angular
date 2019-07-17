import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  serverUrl = "http://localhost:8090/"

  constructor(private http: HttpClient,) { }


  recoverPassword(email:string){
    console.log('service email=' +email);
    console.log(this.serverUrl + "users/recoverPassword/" +email);
    return this.http.get(this.serverUrl + "users/recoverPassword/" +email);
  }
}
