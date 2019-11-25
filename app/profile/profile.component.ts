import { Component, OnInit } from '@angular/core';
import {S1Service} from 'src/app/s1.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private configService : S1Service ,) { }
user_info :any ;
user_post : any[];
  ngOnInit() {
    this.user_info ={
      user_name_for_profile :null
    }
    this.configService.user_info().subscribe((r)=>{
      console.log(r)
      this.user_info = r
    
    })
    this.configService.user_post().subscribe((r)=>{
      console.log(r)
      this.user_post = r
    
    })
  }
  mouseHover(id){
    
    let a = document.getElementById(id)
    
    a.style.fontSize = '50px';
      }
      mouseLeave(id){
        let a = document.getElementById(id)
    
    a.style.fontSize = '0px';
      }

}
