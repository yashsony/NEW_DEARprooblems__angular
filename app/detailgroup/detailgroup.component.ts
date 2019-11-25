import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { S1Service } from '../s1.service';
import { group_detail } from '../groupdetail_interface';


@Component({
  selector: 'app-detailgroup',
  templateUrl: './detailgroup.component.html',
  styleUrls: ['./detailgroup.component.css']
})
export class DetailgroupComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router,
    private service: S1Service) { }

    group : any ;
    group_user_set : any ;
    //user_profile_photo :boolean = false;

  ngOnInit() {
    let ids : string  = this.route.snapshot.paramMap.get('id');
    
    this.service.one_group(ids).subscribe((r)=>
      { 
        let  x = JSON.stringify(r);
       
      this.group = r;
      this.group_user_set =r.user_set;
      // if(this.group_user_set[0].user_name_for_profile.has('profile_photo')){
      //   this.user_profile_photo = true
      // }
    // console.log(this.user_profile_photo)//.user_name_for_profile.profile_photo);
  })
  }
  request_to_join(){
   
    this.service.request_to_add(this.group.id).subscribe((r)=>
      { 
        let  x = JSON.stringify(r);
        console.log(x);
        if( r['success']!=null){
        console.log("request has been sent")}
        else{
          console.log("some error has benn occured ")
        }
    //three errors to show 1. check that a user already has request of that group
    // 2 . user is admmin of that request group
    // 3 .error of some creadentials provided by user
      
  })
  }

}
