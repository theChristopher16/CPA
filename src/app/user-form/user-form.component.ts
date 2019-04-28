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

  onSubmit(){ this.submitted = true; }

  newUser(){
    this.model = new User(null,null,null,null);
  }

  closeDialog(){
    this.dialogRef.close();
  }

  get diagnotstic() { return JSON.stringify(this.model); }
}
