import { Component, OnInit, ɵConsole } from '@angular/core';
import {S1Service} from 'src/app/s1.service';
import { Router,  } from '@angular/router';
import { Modal1Component } from '../modal1/modal1.component';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { CreatePostComponent } from '../create-post/create-post.component';



declare var $:any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private configService: S1Service ,private router: Router ,public dialog: MatDialog ) { }
 user :any[];
  ngOnInit() {
  }
  profile(){
     $("#profile").css("-webkit-text-fill-color","#b80000");
    $("#home").css("-webkit-text-fill-color","#777777");
    $("#updates").css("-webkit-text-fill-color","#777777");
    $("#create").css("-webkit-text-fill-color","#777777");
    this.router.navigate(['profile/' ])


  }
  create(){
  //   $("#profile").css("-webkit-text-fill-color","#777777");
  //  $("#home").css("-webkit-text-fill-color","#777777");
  //  $("#updates").css("-webkit-text-fill-color","#777777");
  //  $("#create").css("-webkit-text-fill-color","#b80000");
  //  this.router.navigate(['create/']);
   const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '80%'
    const dialogRef = this.dialog.open( CreatePostComponent, dialogConfig );
    dialogRef.afterClosed().subscribe(()=>{
    console.log("exited")
    }
    )

 } 
 updates(){
  $("#profile").css("-webkit-text-fill-color","#777777");
 $("#home").css("-webkit-text-fill-color","#777777");
 $("#updates").css("-webkit-text-fill-color","#b80000");
 $("#create").css("-webkit-text-fill-color","#777777");


}
 home(){
  $("#profile").css("-webkit-text-fill-color","#777777");
 $("#home").css("-webkit-text-fill-color","#b80000");
 $("#updates").css("-webkit-text-fill-color","#777777");
 $("#create").css("-webkit-text-fill-color","#777777");
 this.router.navigate(['post/'])
}
h(e):any{
  this.configService.userlist(e).subscribe((r)=>
  { 
    let  x = JSON.stringify(r);
  console.log(x);
  this.user = r;
 })

}
change_to_user(){
  $("#change_to_user").css("-webkit-text-fill-color","#b80000");
  $("#change_to_group").css("-webkit-text-fill-color","#777777");
}
change_to_group(){
  $("#change_to_user").css("-webkit-text-fill-color","#777777");
  $("#change_to_group").css("-webkit-text-fill-color","#b80000");


}

}
