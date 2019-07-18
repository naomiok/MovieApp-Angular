import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User} from 'src/app/models/user';



@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  id:number;

  // user:User = {
   // id:3
  //   firstname:'naomi',
  //   lastname:'d',
  //   email:'d',
  //   password:'d',
  //   address:'d',
  //   city:'d',
  //   state:'d',
  //   phonenumber:'d'
  // };

  //user = sessionStorage.getItem('loggedInUser');

  constructor(private userService:UserService, private router:Router) { }

 
  ngOnInit() {
    this.loadUserData();
  }

  user:User;

  loadUserData(){
    
      let user = JSON.parse(sessionStorage.getItem('user'));
  
      this.user = user;
      
  }

  update(){
    
    console.log(this.user);
    console.log(this.user.id);
    
      

    this.userService.update(this.user.id, this.user).subscribe ( (res)=>{
    console.log(res);  
    //let user = JSON.parse(sessionStorage.getItem('user'));
    //console.log('thing' +this.user);
    
    
    let newUser = JSON.stringify(this.user);
    console.log(newUser);
    sessionStorage.setItem('user', `${newUser}`);
    alert('Your information has been updated.');
    this.router.navigate([':category']);
    
    });
  }
}








