import { Component, OnInit } from '@angular/core';
import {ResetPasswordService} from '../../services/reset-password.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  email:string;
  constructor(private restPass: ResetPasswordService,) { }

  ngOnInit() {
  }

  recoverPassword(email){
    console.log('reset= ' +email)
    this.restPass.recoverPassword(email).subscribe( (res)=>{
      console.log(res);
      alert('Please check your email inbox')
  });
}
}
