import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

 

  constructor(private userService: UserService) {
  }

  ngOnInit() {
}

private _opened: boolean = false;

private _toggleSidebar() {
  this._opened = !this._opened;
}
}
