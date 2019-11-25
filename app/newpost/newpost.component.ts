import { Component, OnInit } from '@angular/core';
import {S1Service} from 'src/app/s1.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';



declare let $ :any ;
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
allposts : any[];
all_next_posts : any[];

like_on_post :number ;
like_on_comment :number ;
commentForm : FormGroup ;
all_list_of_g_and_f :any[]; 
share_with_user =[];
  share_with_group=[];
  share_with_both =[];
  share_on_post :number ;
page_count :number = 1 ;
page_count_for_suggested_users :number = 1 ;
page_count_for_suggested_groups :number = 1 ;

check_for_requests : boolean = true ;
allow_sending_request : boolean = true ;
suggested_users : any[];
suggested_groups : any[];
user_info : any;


  constructor(private configService : S1Service ,
    private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.user_info ={
      user_name_for_profile :null 
    }
this.configService.get_suggeted_users(this.page_count_for_suggested_users).subscribe((r)=>{
  console.log(r)
  this.suggested_users = r ;
})


this.configService.get_suggeted_groups(this.page_count_for_suggested_groups).subscribe((r)=>{
  console.log(r)
  this.suggested_groups = r ;
})

this.configService.user_info().subscribe((r)=>{
  console.log(r)
  this.user_info = r

})








     let scoll_element = document.getElementById("ghjk")
    

    this.configService.getallpost(this.page_count).subscribe((r)=>{
      this.allposts = r;
      console.log(this.allposts)
      let that = this 
      $("#ghjk").scroll(function () {
      

        if(
          scoll_element.scrollHeight - $("#ghjk").scrollTop() <=2170
          &&
           that.check_for_requests && that.allow_sending_request
        ){
          console.log(that.allow_sending_request)
          that.check_for_requests = false ;
                that.page_count = that.page_count + 1; 
                console.log(that.page_count)      
                that.configService.getallpost(that.page_count).subscribe((r)=>{
                  
                  if(r.error == "empty"){
                    that.allow_sending_request = false
                    
                  }
                  else{
                    that.allposts = that.allposts.concat(r)
                setTimeout(()=>{that.check_for_requests = true} , 2000)
                  }
                
                
                } ,
                
                
                )}
      })


    //     if(
    //       (  $(document).height() - (Math.ceil($(window).scrollTop()) + $(window).height())  <= 2170 )
    //       &&
    //       that.check_for_requests
    //     )
    //     {
    //       that.check_for_requests = false ;
    //       that.page_count = that.page_count + 1;       
    //       that.configService.getallpost(this.page_count).subscribe((r)=>{
    //       that.allposts = that.allposts.concat(r)
    //       console.log(that.allposts)    
    //       })
    //     }
        
    // });



    })
    this.commentForm  =  this.formBuilder.group({
      opinion : ['', Validators.required],
      type : ['',Validators.required]
  })

  // $(document).ready(function(){
  
  // })

  }
  take_id_like(id){
    this.like_on_post = id;
    
  }
  take_id_comments(id){
    this.like_on_comment = id;
    console.log(this.like_on_comment)
    
  }
  next_suggested_users(){
    this.page_count_for_suggested_users++ ;
    this.configService.get_suggeted_users(this.page_count_for_suggested_users).subscribe((r)=>{
      console.log(r)
      this.suggested_users = r ;
    })
  }
  next_suggested_groups(){
    this.page_count_for_suggested_groups++ ;
    this.configService.get_suggeted_groups(this.page_count_for_suggested_groups).subscribe((r)=>{
      console.log(r)
      this.suggested_groups = r ;
    })
  }

  comment(){
  
    let a = {
      "post" : this.like_on_comment ,
      "opinion_type" : this.commentForm.get('type').value ,
      "opinion" : this.commentForm.value.opinion
    }
     
   console.log(a)
    
      if(this.commentForm.invalid){
        console.log("error");
      }
      this.configService.docomment(a).subscribe((r)=>{
      console.log(r)
      },
      (err)=>{
        console.log(err)
      });
  
  }

  like(value ){

   
    let like_points
    if (value == "N"){like_points = 25}
    else if(value == "G"){like_points = 50}
    else if(value == "V"){like_points = 75}
    else {like_points = 100}

    let b = this.like_on_post.toString()
    var x = document.getElementById(b);
    let btd = Number(x.innerText)
    btd = btd + like_points
    x.innerText = btd.toString() 
     let a ={
       "like_on_post" : this.like_on_post ,
       "like_ratio" : value
     }

     
     
     
      this.configService.dolike(a).subscribe(
        (r)=>{
          console.log(r)
          x.innerText = r.success
        },
        (err) => {  
          x.innerText  = "!U already liked "
        }
      )
   }


   openDialog(id): void {
    
   
    this.configService.all_followers_and_groups_added().subscribe((r)=>{
      
      this.all_list_of_g_and_f = r;
      console.log(r,id)
      this.share_on_post =id ;
      
      
    })
    
    
  }

  addgroups(e , id){
    if (e.target.checked == true ){
      if (this.share_with_group.includes(id) == false ){
    this.share_with_group.push(id)
    
    this.share_with_both = [this.share_with_group , this.share_with_user];
    console.log(this.share_with_both);

      }
    }
    else{
      if (this.share_with_group.includes(id) == true ){
        var index = this.share_with_group.indexOf(id);
        if (index > -1) {
          this.share_with_group.splice(index, 1);
          this.share_with_both = [this.share_with_group , this.share_with_user];
        }
        console.log(this.share_with_both);
      }
    }
  }
  
  adduser(e , id){
    if (e.target.checked == true ){
      if (this.share_with_user.includes(id) == false ){
    this.share_with_user.push(id)
    
    this.share_with_both = [this.share_with_group , this.share_with_user];
    console.log(this.share_with_both);

      }
    }
    else{
      if (this.share_with_user.includes(id) == true ){
        var index = this.share_with_user.indexOf(id);
        if (index > -1) {
          this.share_with_user.splice(index, 1);
        }
        
        this.share_with_both = [this.share_with_group , this.share_with_user];
        console.log(this.share_with_both);

      }
    }
  }


share(){

  let a={
    "post_name" : this.share_on_post ,
    "share_to_user" : this.share_with_both[0],
    "share_to_group": this.share_with_both[1]
  }
  console.log(a)
  this.configService.share_to_group_user(a).subscribe((r)=>{
    console.log(r);
})

}
follow(s , e){
    
  let data = {
    "follow_s" : s
  }
  console.log("follow button");
  this.configService.follow_someone(data).subscribe((r)=>
    { 
      let  x = JSON.stringify(r);
     console.log(e);
     e.srcElement.innerText = "Followed"
     
    
    //this.group_user_set =r.user_set;
})
}


request_to_join(id_of_group , e){
  
  this.configService.request_to_add(id_of_group).subscribe((r)=>
    { 
      let  x = JSON.stringify(r);
      console.log(x);
      if( r['success']!=null){
      console.log("request has been sent")
      e.srcElement.innerHTML = "send"
    }
      else{
        console.log("some error has benn occured ")
        
      }
  //three errors to show 1. check that a user already has request of that group
  // 2 . user is admmin of that request group
  // 3 .error of some creadentials provided by user
    
})
}



}
