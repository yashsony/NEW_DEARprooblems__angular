import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { S1Service } from '../s1.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';


@Component({
  selector: 'app-specificpost',
  templateUrl: './specificpost.component.html',
  styleUrls: ['./specificpost.component.css']
})
export class SpecificpostComponent implements OnInit {
post :any ;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private service: S1Service ,
    private formBuilder : FormBuilder) { }
   commentForm : FormGroup ; 
  ngOnInit() {
    let ids : string  = this.route.snapshot.paramMap.get('id');
    this.service.onepost(ids).subscribe((r)=>
    {console.log(r)
    this.post = r ;}
    ,(er)=>{console.log(er)}
    )

    this.commentForm  =  this.formBuilder.group({
      opinion : ['', Validators.required],
      type : ['',Validators.required]
  })

}
comment(id){
  
  let a = {
    "post" : id ,
    "opinion_type" : this.commentForm.get('type').value ,
    "opinion" : this.commentForm.value.opinion
  }
   
 
  
    if(this.commentForm.invalid){
      console.log("error");
    }
    this.service.docomment(a).subscribe((r)=>{
    console.log(r)
    });

}
}
