import { Component, OnInit } from '@angular/core';
import {S1Service} from 'src/app/s1.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.css']
})
export class ShowRequestComponent implements OnInit {

  constructor(private configService: S1Service,private router: Router) { }
 requests : any[] ;
  ngOnInit() {
    this.configService.all_request().subscribe((r)=>
      { 
        // let  x = JSON.stringify(r);
      console.log(r);
      this.requests = r;
     })
  }
  accept(a:number){
     let b = a.toString()
     let data = {"request_id": b, "add":"True"}
     this.configService.add_in_group(data).subscribe((r)=>
      { 
        // let  x = JSON.stringify(r);
      console.log(r);
      this.router.navigateByUrl('/group', {skipLocationChange: true}).then(()=>
this.router.navigate(["requests"])); 
      
     })
    

  }
  reject(a:number){
    let b = a.toString()
    let data = {"request_id": b}
    this.configService.add_in_group(data).subscribe((r)=>
     { 
       // let  x = JSON.stringify(r);
     console.log(r);
     this.router.navigateByUrl('/group', {skipLocationChange: true}).then(()=>
this.router.navigate(["/requests"])); 
     
    })
   

 }

}
