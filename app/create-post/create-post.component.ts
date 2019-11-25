import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import {S1Service} from 'src/app/s1.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;
  postid : any;
  allposts :any;
  share_with_expert = [];
  allexpert : any[];
  editorConfig = {
    
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "200px",
    "width": "100%",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "fontSize": "20px",
    "placeholder": "Enter text here...",
    "imageEndPoint": "",
    "toolbar": [
        ["bold", "italic", "underline"],
        ["fontName", "fontSize", "color"],
        ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
        ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
        ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
        
    ]
  }
  constructor( private formBuilder: FormBuilder , private configService: S1Service ) { }

  ngOnInit() {

    this.postForm  =  this.formBuilder.group({
      title : ['', Validators.required],
      text : ['', Validators.required],
      ask_with_only_experts : [''],
      profile : ['']

  });
  }
  onChange(event) {
    
    const file = event.target.files[0];
    console.log(file)
    this.postForm.get('profile').setValue(file);
  
}
onSubmit() {
    
  const formData = new FormData();
  //console.log(this.postForm.get('ask_with_only_experts').value);
  if(this.postForm.get('ask_with_only_experts').value == '')
  {
    formData.append('ask_with_only_experts', 'False' );
  }
  else {
    formData.append('ask_with_only_experts', 'True' );
  }
  formData.append('file', this.postForm.get('profile').value );
  formData.append('title', this.postForm.get('title').value );
  formData.append('text', this.postForm.get('text').value );
  
  console.log(this.postForm.value);

  ////this.postForm.get('profile').value);
  this.configService.upload(formData).subscribe(
    (res) => {
      
      console.log(res);
      if (res.message  == 'expert_list'){
        
          this.postid = res['success']
          
        this.configService.allexperts().subscribe((r)=>{
          this.allexpert = r ;
          console.log(r)
          }) 


      }
     
    },
    (err) => {  
      console.log(err);
    }
  )

}


addexperts(e , id){
  if (e.target.checked == true ){
    if (this.share_with_expert.includes(id) == false ){
  this.share_with_expert.push(id)
  console.log(this.share_with_expert)
    }
  }
  else{
    if (this.share_with_expert.includes(id) == true ){
      var index = this.share_with_expert.indexOf(id);
      if (index > -1) {
        this.share_with_expert.splice(index, 1);
      }
      console.log(this.share_with_expert);
    }
  }
}
share(){
    
  let  a = {
    experts_id : this.share_with_expert,
     post_name : this.postid
   }
      this.configService.share_expert(a).subscribe((r)=>{
        console.log(r);
      },
      (err)=>{
        console.log(err);
  
      })
  console.log(a);
    }

}
