import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  private searchFilter = new Subject<any>();
  searchFilterEmited = this.searchFilter.asObservable();
  emitChange(change: any){
    this.searchFilter.next(change);
  }
}
