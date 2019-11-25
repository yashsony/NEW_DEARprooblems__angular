import { Component, OnInit } from '@angular/core';
import {S1Service} from 'src/app/s1.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private configService : S1Service, private router: Router, private formBuilder: FormBuilder) { }
  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
  });
  }

  // let newHero ={
  //   "username" : "rameeps",
  //   "password1":"Rames123@",
  //   "password2": "Rames123@"
  // };

 
//  callrequest(){
 

//   this.configService
//   .addHero(newHero)
//   .subscribe(hero => console.log(hero));

// }


signup(){
  console.log(JSON.stringify(this.signupForm.value));

  if(this.signupForm.invalid){
    console.log("error");
  }
   this.configService
   .addHero(JSON.stringify(this.signupForm.value)).subscribe(()=>
  
  console.log('succcesssfull signup'));// this.router.navigate['/']
}
}











