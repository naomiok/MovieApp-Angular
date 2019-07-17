import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

 

  constructor() {
  }

  ngOnInit() {
}

private _opened: boolean = false;

private _toggleSidebar() {
  this._opened = !this._opened;
}
}
