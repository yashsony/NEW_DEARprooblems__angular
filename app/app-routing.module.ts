import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SearchgroupsComponent } from './searchgroups/searchgroups.component';
import { DetailgroupComponent } from './detailgroup/detailgroup.component';
import { ShowRequestComponent } from './show-request/show-request.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { SearchusersComponent } from './searchusers/searchusers.component';
import { DetailuserComponent } from './detailuser/detailuser.component';
import { NotifiactionsComponent } from './notifiactions/notifiactions.component';
import { PostComponent } from './post/post.component';
import { SpecificpostComponent } from './specificpost/specificpost.component';
import { ViewportScroller } from '@angular/common';
import { NewpostComponent } from './newpost/newpost.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  {path :'profile', component: ProfileComponent  },
  { path: 'login' , component: LoginComponent },
  {path : 'create' ,component :CreatePostComponent},
  {path: 'userprofile', component : UserprofileComponent},
  {path: 'group',  component : SearchgroupsComponent },
  { path: 'group/:id', component: DetailgroupComponent },
  {path : 'requests', component: ShowRequestComponent},
  {path : 'users', component: SearchusersComponent},
  {path : 'users/:id', component: DetailuserComponent},
  {path : 'notification',component : NotifiactionsComponent},
  {path :'post', component: NewpostComponent},
  {path : 'post/:id', component: SpecificpostComponent},
  { path: '**', component: PagenotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})





export class AppRoutingModule {





 }
/*
signup page
login page
creatpost page
allpost page
specificpage post
makegroup page
search page
specifigroup page
otheruser page
profile page
request page
notification page



*/
