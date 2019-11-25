import { Component, OnInit } from '@angular/core';
import {S1Service} from 'src/app/s1.service';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-searchusers',
  templateUrl: './searchusers.component.html',
  styleUrls: ['./searchusers.component.css']
})
export class SearchusersComponent implements OnInit {

  constructor(private configService: S1Service,private router: Router) { }
  user :any[];
  ngOnInit() {
    this.configService.userlist("").subscribe((r)=>
    { 
      let  x = JSON.stringify(r);
    
    this.user = r;
    console.log(r)
   })
  }
  h(e):any{
    this.configService.userlist(e).subscribe((r)=>
    { 
      let  x = JSON.stringify(r);
    console.log(x);
    this.user = r;
   })

  }
  goto(id){
    this.router.navigate(['users/'+ id ]);

  }

}
//comeenyt by new keyboard how it i9s looking yash  is soni  nam to suna hi hoga 