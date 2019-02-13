import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: object;

  constructor(private user: UserInfoService) { }

  ngOnInit() {
    //Subscribe to service to get scores from database
    this.user.getUserInfo().subscribe(
      user => this.users$ = user
    );
  }

}
