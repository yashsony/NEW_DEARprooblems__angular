import { Component, OnInit } from '@angular/core';
import {S1Service} from 'src/app/s1.service';
import { group } from '../groupinterface';

@Component({
  selector: 'app-searchgroups',
  templateUrl: './searchgroups.component.html',
  styleUrls: ['./searchgroups.component.css']
})
export class SearchgroupsComponent implements OnInit {
  
  group : group[]=[];
  constructor(private configService: S1Service) { }

  ngOnInit() {

    this.configService.grouplist("").subscribe((r)=>
      { 
        let  x = JSON.stringify(r);
      console.log(x);
      this.group = r;
     })

 
    }


 h(e):any{
 console.log(e)


 this.configService.grouplist(e).subscribe((r)=>
      { 
        let  x = JSON.stringify(r);
      console.log(x);
      this.group = r;
     })
 }

}

