import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule, MatFormField}from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {} from '@angular/material/'
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViewportScroller } from '@angular/common';
import { Modal1Component } from '../modal1/modal1.component';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule ,MatFormFieldModule,
    MatInputModule,   MatButtonModule,
    MatFormFieldModule,
    MatInputModule ,
    
    MatRippleModule],
    
  exports: [MatButtonModule, MatCheckboxModule ,MatFormFieldModule,
    MatInputModule, MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule],
   
    declarations : [],
    
    
})
export class ModalModule { }


