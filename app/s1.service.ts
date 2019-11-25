import { Injectable } from '@angular/core';
import { HttpClient  , HttpHeaders } from '@angular/common/http';



import {user_interface} from 'src/app/user-interface';
import { getCookie } from './getcookie';
import {group } from './groupinterface'
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';



@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private http : HttpClient) { }
  configUrl :string = 'http://127.0.0.1:8000/rest-auth/registration/';
   

  

  addHero(user )
  { console.log(user);
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
      
   });
   let options = {
    headers: headers,  withCredentials :true  , observe: 'response' as 'body'}
    return this.http.post('http://127.0.0.1:8000/rest-auth/registration/', user,  options  )
}

login_user(user ){
  let csrftoken  = getCookie('csrftoken');
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-CSRFToken': csrftoken
     });
     let options = {
        headers: headers,  withCredentials :true  , observe: 'response' as 'body'}
      
      return this.http.post('http://127.0.0.1:8000/rest-auth/login/', user,  options )}




logout_user( ){

  let csrftoken  = getCookie('csrftoken');
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': csrftoken
  });
  let options = {
    headers: headers ,  withCredentials :true  , observe: 'response' as 'body' }
    //  withCredentials :true should be set for automatically update sessionid coookie and for security add httponly=true in django
      
      return this.http.post('http://127.0.0.1:8000/rest-auth/logout/', {},  options )
  }


  makegroup(group_name){
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
    });
    let options = {
      headers: headers,  withCredentials :true  , observe: 'response' as 'body'}
      return this.http.post('http://127.0.0.1:8000/group/',group_name,  options )

  }


  grouplist(query:string):Observable<any>{
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
    });
    let options = {
      headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
      return this.http.get('http://127.0.0.1:8000/group/'+ '?q=' + query ,  options )

  }








  one_group(id:string):Observable<any>{
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
    });
    let options = {
      headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
      return this.http.get('http://127.0.0.1:8000/group/'+ id +'/',  options )

  }
   request_to_add(group_id : string){
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
    });
    let options = {
      headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
      return this.http.post('http://127.0.0.1:8000/request/', {"group_name": group_id },  options )

  }


  all_request():Observable<any>{
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
    });
    let options = {
      headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
      return this.http.get('http://127.0.0.1:8000/request/',  options )

  }
  user_info():Observable<any>{
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
    });
    let options = {
      headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
      return this.http.get('http://127.0.0.1:8000/user_info/',  options )

  }
  user_post():Observable<any>{
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
    });
    let options = {
      headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
      return this.http.get('http://127.0.0.1:8000/user_post/',  options )

  }

  add_in_group(data:any):Observable<any>{
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
    });
    let options = {
      headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
      return this.http.post('http://127.0.0.1:8000/add_in_group/', data,  options )

  }

  

  userlist(query:string):Observable<any>{
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
    });
    let options = {
      headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
      return this.http.get('http://127.0.0.1:8000/user/'+ '?q=' + query ,  options )

  }
  one_user(id):Observable<any>{
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
    });
    let options = {
      headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
      return this.http.get('http://127.0.0.1:8000/user/'+ id +'/',  options )

  }



  follow_someone(data : any ):Observable<any>{
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
    });
    let options = {
      headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
      return this.http.post('http://127.0.0.1:8000/follow/' , data ,  options )

  }


  notification( ):Observable<any>{
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken
    });
    let options = {
      headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
      return this.http.get('http://127.0.0.1:8000/notification/' ,  options )

  }


  postFile(fileToUpload: File): Observable<any> {
    let csrftoken  = getCookie('csrftoken');
    let headers = new HttpHeaders({
      //'Content-Type': '*/*;',
      'Access-Control-Allow-Origin': '*',
      'X-CSRFToken': csrftoken,
     
    });
    let options = {
      headers: headers,  withCredentials :true  }
    const formData: FormData = new FormData();
    formData.append("file", fileToUpload);
    
    return this.http.post('http://127.0.0.1:8000/profile/' , formData,  options )
     
}


upload(formdata): Observable<any> {
  let csrftoken  = getCookie('csrftoken');
  let headers = new HttpHeaders({
    
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': csrftoken,
   
  });
  let options = {
    headers: headers,  withCredentials :true  } 
  return this.http.post('http://127.0.0.1:8000/post/' , formdata,  options )
   
}

getallpost( page_no: number):Observable<any>{
  let csrftoken  = getCookie('csrftoken');
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': csrftoken
  });

  let options = {
    headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
    return this.http.get('http://127.0.0.1:8000/post/?page='+ page_no ,  options )

}

get_suggeted_users( page_no: number):Observable<any>{
  let csrftoken  = getCookie('csrftoken');
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': csrftoken
  });

  let options = {
    headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
    return this.http.get('http://127.0.0.1:8000/top_suggested_u/?page='+ page_no ,  options )

}
get_suggeted_groups( page_no: number):Observable<any>{
  let csrftoken  = getCookie('csrftoken');
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': csrftoken
  });

  let options = {
    headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
    return this.http.get('http://127.0.0.1:8000/top_suggested_g/?page='+ page_no ,  options )

}

dolike(formdata): Observable<any> {
  let csrftoken  = getCookie('csrftoken');
  let headers = new HttpHeaders({
    //'Content-Type': 'multipart/form-data ',
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': csrftoken,
   
  });
  let options = {
    headers: headers,  withCredentials :true  } 
  return this.http.post('http://127.0.0.1:8000/like/' , formdata,  options )
   
}
onepost(id):Observable<any>{
  let csrftoken  = getCookie('csrftoken');
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': csrftoken
  });
  let options = {
    headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
    return this.http.get('http://127.0.0.1:8000/post/'+ id +'/' ,  options )
    
}
docomment(formdata): Observable<any> {
  let csrftoken  = getCookie('csrftoken');
  let headers = new HttpHeaders({
    //'Content-Type': 'multipart/form-data ',
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': csrftoken,
   
  });
  let options = {
    headers: headers,  withCredentials :true  } 
  return this.http.post('http://127.0.0.1:8000/comment/' , formdata,  options )
   
}
allexperts():Observable<any>{
  let csrftoken  = getCookie('csrftoken');
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': csrftoken
  });
  let options = {
    headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
    return this.http.get('http://127.0.0.1:8000/expert/' ,  options )

}
share_expert(formdata):Observable<any>{
  let csrftoken  = getCookie('csrftoken');
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': csrftoken
  });
  let options = {
    headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
    return this.http.post('http://127.0.0.1:8000/Share_expert/' , formdata ,  options )

}
all_followers_and_groups_added():Observable<any>{
  let csrftoken  = getCookie('csrftoken');
  
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': csrftoken
  });
  let options = {
    headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
    return this.http.get('http://127.0.0.1:8000/list/' ,  options )

}


share_to_group_user(formdata):Observable<any>{
  let csrftoken  = getCookie('csrftoken');
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': csrftoken
  });
  let options = {
    headers: headers,  withCredentials :true  }//, observe: 'response' as 'body'}
    return this.http.post('http://127.0.0.1:8000/share/' , formdata ,  options )

  }




   }






  





















// as seurity risk use interface to <user>

//accept, accept-encoding, authorization, content-type, dnt, origin, user-agent, x-csrftoken, x-requested-with



