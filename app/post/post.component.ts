import { Component, OnInit,Inject } from '@angular/core';
import {S1Service} from 'src/app/s1.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule}from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
//import {} from '@angular/material/'
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViewportScroller } from '@angular/common';
import { Modal1Component } from '../modal1/modal1.component';
import {MatDialog, MatDialogConfig} from "@angular/material";





@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  constructor( private configService : S1Service, private router: Router, private formBuilder: FormBuilder,public dialog: MatDialog) { }
  postForm: FormGroup;
  likeForm : FormGroup;
  allposts :any;
  allexpert : any;
  share_with_expert = [];
  postid : any;
  
  all_list_of_g_and_f : any[];
  
 

  openDialog(data): void {
    
   
    this.configService.all_followers_and_groups_added().subscribe((r)=>{
      this.all_list_of_g_and_f = r;
      console.log(r)
      
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        groups: this.all_list_of_g_and_f[0],
        followers : this.all_list_of_g_and_f[1] ,
        i : data

    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '1000px'
    
      const dialogRef = this.dialog.open(Modal1Component , dialogConfig );
      dialogRef.afterClosed().subscribe(result =>{if(result) {
        console.log(result[0] +" and " + result[1] + " u choosed")
        let a={
          "post_name" : data.id ,
          "share_to_user" : result[1],
          "share_to_group": result[0]
        }
        
        this.configService.share_to_group_user(a).subscribe((r)=>{
          console.log(r);
        });
      }}
      );
    })
    
    
  }
   
  
   
    
  //dialogConfig.backdropClass = 'cdk-overlay-transparent-backdrop' ;
  //dialogConfig.hasBackdrop = false ;
  
    

    
  

  ngOnInit() {
    this.postForm  =  this.formBuilder.group({
      title : ['', Validators.required],
      text : ['', Validators.required],
      ask_with_only_experts : [''],
      profile : ['']

  });
  this.likeForm  =  this.formBuilder.group({
    gender : ['', Validators.required],
    

});

  this.configService.getallpost(1).subscribe((r)=>{
    this.allposts = r;
    console.log(this.allposts)
  })
  
  }
  onChange(event) {
    
      const file = event.target.files[0];
      console.log(file)
      this.postForm.get('profile').setValue(file);
    
  }

  onSubmit() {
    
    const formData = new FormData();
    //console.log(this.postForm.get('ask_with_only_experts').value);
    if(this.postForm.get('ask_with_only_experts').value == '')
    {
      formData.append('ask_with_only_experts', 'False' );
    }
    else {
      formData.append('ask_with_only_experts', 'True' );
    }
    formData.append('file', this.postForm.get('profile').value );
    formData.append('title', this.postForm.get('title').value );
    formData.append('text', this.postForm.get('text').value );
    
    console.log(JSON.stringify(this.postForm.value));

    //this.postForm.get('profile').value);
    this.configService.upload(formData).subscribe(
      (res) => {
        
        console.log(res);
        if (res.message  == 'expert_list'){
          
            this.postid = res['success']
            
          this.configService.allexperts().subscribe((r)=>{
            this.allexpert = r ;
            console.log(r)
            }) 


        }
       
      },
      (err) => {  
        console.log(err);
      }
    )
  }

  like(id ){
   // console.log(this.likeForm.get('gender').value)
    
    let a ={
      "like_on_post" : id ,
      "like_ratio" : this.likeForm.get('gender').value
    }
    this.configService.dolike(a).subscribe(
      (r)=>{
        console.log(r)
      },
      (err) => {  
        console.log(err);
      }
    )
  }
  detailpost(id){
    this.router.navigate(['post/'+ id ])
  }

  addexperts(e , id){
    if (e.target.checked == true ){
      if (this.share_with_expert.includes(id) == false ){
    this.share_with_expert.push(id)
    console.log(this.share_with_expert)
      }
    }
    else{
      if (this.share_with_expert.includes(id) == true ){
        var index = this.share_with_expert.indexOf(id);
        if (index > -1) {
          this.share_with_expert.splice(index, 1);
        }
        console.log(this.share_with_expert);
      }
    }
  }


  share(){
    
let  a = {
  experts_id : this.share_with_expert,
   post_name : this.postid
 }
    this.configService.share_expert(a).subscribe((r)=>{
      console.log(r);
    },
    (err)=>{
      console.log(err);

    })
console.log(a);
  }


}





    
  

