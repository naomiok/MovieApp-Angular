import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User} from 'src/app/models/user';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  id:number;
  
  constructor(private userService:UserService, private router:Router) { }
  
  ngOnInit() {
    
    this.view();
  }

  user:User;
  
  view(){
    let user = JSON.parse(sessionStorage.getItem('user'));
    
    
    console.log(user);
      // this.userService.findById(this.id).subscribe ( (res)=>{
      //   console.log(res);  
        
      // });
      this.user = user;
  }
}



