import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css']
})
export class DetailuserComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private service :S1Service
  ) { }
   u:any;
  ngOnInit() {

    let ids : string  = this.route.snapshot.paramMap.get('id');
    
    this.service.one_user(ids).subscribe((r)=>
      { 
        let  x = JSON.stringify(r);
       console.log(r);
      this.u = r;
      //this.group_user_set =r.user_set;
  })
  }
  follow(s){
    
    let data = {
      "follow_s" : s
    }
    console.log("follow button");
    this.service.follow_someone(data).subscribe((r)=>
      { 
        let  x = JSON.stringify(r);
       console.log(x);
       this.router.navigateByUrl('/group', {skipLocationChange: true}).then(()=>
       this.router.navigate(["users/"+ s ])); 
      
      //this.group_user_set =r.user_set;
  })
  }

}
