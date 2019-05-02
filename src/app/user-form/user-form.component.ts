import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatDialogRef } from '@angular/material';
import { UserInfoService } from '../user-info.service';
import { PostRequest } from '../post-request';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit{
  
  constructor(private user: UserInfoService, public dialogRef: MatDialogRef<SidebarComponent>){

  }

  model = new User(null,null,null,null);
  submitted = false;
  userNameTaken = false;
  users$: object;

  ngOnInit(): void {
    
    // Subscribe to service to get scores from database
    this.user.getUserInfo().subscribe(
      user => {
        this.users$ = user;
        console.log(this.users$);
        });

  }

  onSubmit(){ this.submitted = true; }

  newUser(){
    this.model = new User(null,null,null,null);
  }

  closeDialog(){
    this.dialogRef.close();
  }

  /*
  Ran when submit button is clicked
  makes sure username is not taken
  make POST request
  */
  verifyForm(){

    //Go thru users from database
    //If match -> name is taken; break
    //if no match -> name not taken
    let i = 0;
    for(let person in this.users$){
      if(this.users$[i]["Name"] === this.model.userName){
        this.userNameTaken = true;
        break;
      }
      else{
        this.userNameTaken = false;
      }
      i++;
    }

    //Creates form to send to API
    let posty = new PostRequest();
    let data = new URLSearchParams();
    data.append("Name",this.model.name);
    data.append("UserName",this.model.userName);
    data.append("Email",this.model.email);
    data.append("Key", posty.getApiCode());

    fetch("http://winnet.duckdns.org:8080/addNewRegister",{
      method: "POST",
      body: data,
    })

    //closes dialog and submits form if name available
    if(!this.userNameTaken){
      this.closeDialog();
      this.submitted = true;
      this.newUser();
    }

  }

}
