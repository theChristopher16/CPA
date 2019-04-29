import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent{
  
  constructor(public dialogRef: MatDialogRef<SidebarComponent>){}

  model = new User(null,null,null,null);

  submitted = false;

  userNameTaken = false;

  onSubmit(){ this.submitted = true; }

  newUser(){
    this.model = new User(null,null,null,null);
  }

  closeDialog(){
    this.dialogRef.close();
  }

  //Ran when submit button is clicked
  //makes sure username is not taken
  verifyForm(){

    //TODO: check if username is taken

    if(!this.userNameTaken){
      this.closeDialog();
      this.submitted = true;
      this.newUser();
    }

  }

  get diagnotstic() { return JSON.stringify(this.model); }
}
