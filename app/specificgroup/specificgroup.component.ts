import { Component, OnInit, Input } from '@angular/core';
import { group } from '../groupinterface';
import {S1Service} from 'src/app/s1.service';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-specificgroup',
  templateUrl: './specificgroup.component.html',
  styleUrls: ['./specificgroup.component.css']
})

export class SpecificgroupComponent implements OnInit {
@Input('mid') hero;
  
  constructor(private configService: S1Service , private router: Router) {
    

   }

  ngOnInit() {
    
  }
  onegroup(r){
    
    
    
    this.router.navigate(['group/'+ r  ]);
    
    
  }

}
