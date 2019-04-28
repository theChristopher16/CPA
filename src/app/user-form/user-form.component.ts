import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent{
  
  model = new User(null,null,null,null);

  submitted = false;

  onSubmit(){ this.submitted = true; }

  get diagnotstic() { return JSON.stringify(this.model); }
}
