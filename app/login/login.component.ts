import { Component, OnInit } from '@angular/core';
import {S1Service} from 'src/app/s1.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private configService : S1Service, private router: Router, private formBuilder: FormBuilder ) { }
  loginForm: FormGroup;
 
  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

   
}
  // callrequest(){
  //   let newHero ={
  //     "username" : "ram2esh5",
  //     "password":"Ramesh123@",
      
  //   };
  //   let newHero1 = {
  //     "username" : "yash",
  //     "password":"Noo420@@#",
      
  //   };
  //   this.configService
  //   .login_user(newHero1)
  //   .subscribe(hero => console.log(hero))

  // }

  login(){
    console.log(JSON.stringify(this.loginForm.value));
  
    if(this.loginForm.invalid){
      console.log("error");
    }
     this.configService
     .login_user(JSON.stringify(this.loginForm.value)).subscribe(()=>
    
    console.log('succcesssfull login'));// this.router.navigate['/']
  }
}
