import { Component, OnInit } from '@angular/core';
import {S1Service} from 'src/app/s1.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private configService: S1Service, private router: Router, private formBuilder: FormBuilder) { }
  groupForm: FormGroup;
  fileToUpload: File = null;
  ngOnInit() {
    this.groupForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      
  });

  }
  logout(){
    this.configService.logout_user().subscribe(()=>
    console.log('succcesssfull logout'));
    // document.cookie = "sessionid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    
  }
  formakegroup(){
    console.log(JSON.stringify(this.groupForm.value));
  
    if(this.groupForm.invalid){
      console.log("error");
    }
    this.configService.makegroup(JSON.stringify(this.groupForm.value)).subscribe((r)=>{
    console.log(r)
    console.log('succcesssfull made group')});
    
  }
  handleFileInput(event ) {
    this.fileToUpload =  event.target.files[0];
    console.log(this.fileToUpload)
}
uploadFileToActivity() {
  this.configService.postFile(this.fileToUpload).subscribe(data => {
    console.log(data)
    }, error => {
      console.log(error);
    });
}


}
