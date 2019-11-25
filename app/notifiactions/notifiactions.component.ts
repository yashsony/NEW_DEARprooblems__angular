import { Component, OnInit } from '@angular/core';
import {S1Service} from 'src/app/s1.service';

@Component({
  selector: 'app-notifiactions',
  templateUrl: './notifiactions.component.html',
  styleUrls: ['./notifiactions.component.css']
})
export class NotifiactionsComponent implements OnInit {

  constructor(private service: S1Service) { }
  n:any[];
  ngOnInit() {
    this.service.notification().subscribe((r)=>
      { 
        // let  x = JSON.stringify(r);
       console.log(r);
      this.n = r;
  })
  }

}
