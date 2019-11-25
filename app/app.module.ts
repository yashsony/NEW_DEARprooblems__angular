import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SearchgroupsComponent } from './searchgroups/searchgroups.component';
import { SpecificgroupComponent } from './specificgroup/specificgroup.component';
import { DetailgroupComponent } from './detailgroup/detailgroup.component';
import { ShowRequestComponent } from './show-request/show-request.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { SearchusersComponent } from './searchusers/searchusers.component';
import { DetailuserComponent } from './detailuser/detailuser.component';
import { NotifiactionsComponent } from './notifiactions/notifiactions.component';
import { PostComponent } from './post/post.component';
import { SpecificpostComponent } from './specificpost/specificpost.component';
import { Modal1Component } from './modal1/modal1.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalModule } from './modal/modal.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewpostComponent } from './newpost/newpost.component';
import {MatRadioModule} from '@angular/material/radio';
import { AppendPostsComponent } from './append-posts/append-posts.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CreatePostComponent } from './create-post/create-post.component';
import {MatBadgeModule} from '@angular/material/badge';
import { NgxEditorModule } from 'ngx-editor';
import { ProfileComponent } from './profile/profile.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignupComponent,
    LoginComponent,
    UserprofileComponent,
    SearchgroupsComponent,
    SpecificgroupComponent,
    DetailgroupComponent,
    ShowRequestComponent,
    PagenotFoundComponent,
    SearchusersComponent,
    DetailuserComponent,
    NotifiactionsComponent,
    PostComponent,
    SpecificpostComponent,
    Modal1Component,
   NewpostComponent,
   AppendPostsComponent,
   CreatePostComponent,
   ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    MatDialogModule,
    ModalModule ,
    NgbModule,
    MatRadioModule,
    ScrollDispatchModule,
    MatBadgeModule,
    NgxEditorModule,
    AngularFontAwesomeModule
  


   
  ],
  entryComponents:[Modal1Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
