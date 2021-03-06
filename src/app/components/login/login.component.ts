import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User} from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id:number;
  errorMessage = 'Invalid Credentials';
  invalidLogin = true;
  firstname:string;
  lastname:string;
  email:string;
  password:string;
  address:string;
  city:string;
  state:string;
  phonenumber:string;
  

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

 
  login(){
  
    console.log("Login:", this.email, this.password);
    this.userService.login(this.email, this.password).subscribe ( (res)=>{
      console.log(res);
  
     let user = new User();


      let userObj = JSON.stringify(res);
      sessionStorage.setItem('user', `${userObj}`)

      console.log(user);
      
      if (res != null){//Valid Login
        console.log(user)
        console.log(sessionStorage.getItem('user'))
      
        this.invalidLogin = false;
        sessionStorage.setItem('userId', `${user.id}`);
        this.router.navigate([':category']);
        sessionStorage.setItem('loggedIn', "true");
        sessionStorage.setItem('loggedOut', "false");
    }
        else{//Invalid Login
          this.invalidLogin = true;
          alert(this.errorMessage);
          sessionStorage.setItem('loggedIn', "false");
          sessionStorage.setItem('loggedOut', "true");
          this.router.navigate(['login']);
        }
    });

    
  }

  }


    


