import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule, MatFormField, MatFormFieldControl}from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {} from '@angular/material/'
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViewportScroller } from '@angular/common';

//import { MatInputModule } from '@angular/material';




@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.css'],
  
})
export class Modal1Component implements OnInit {
  share_with_group = [];
  share_with_user = [];
  share_with_both = [];

  constructor(
    public dialogRef: MatDialogRef<Modal1Component>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    //console.log(data);
  }
  addgroups(e , id){
    if (e.target.checked == true ){
      if (this.share_with_group.includes(id) == false ){
    this.share_with_group.push(id)
    
    this.share_with_both = [this.share_with_group , this.share_with_user];
    console.log(this.share_with_both);

      }
    }
    else{
      if (this.share_with_group.includes(id) == true ){
        var index = this.share_with_group.indexOf(id);
        if (index > -1) {
          this.share_with_group.splice(index, 1);
          this.share_with_both = [this.share_with_group , this.share_with_user];
        }
        console.log(this.share_with_both);
      }
    }
  }
  adduser(e , id){
    if (e.target.checked == true ){
      if (this.share_with_user.includes(id) == false ){
    this.share_with_user.push(id)
    
    this.share_with_both = [this.share_with_group , this.share_with_user];
    console.log(this.share_with_both);

      }
    }
    else{
      if (this.share_with_user.includes(id) == true ){
        var index = this.share_with_user.indexOf(id);
        if (index > -1) {
          this.share_with_user.splice(index, 1);
        }
        
        this.share_with_both = [this.share_with_group , this.share_with_user];
        console.log(this.share_with_both);

      }
    }
  }



}
