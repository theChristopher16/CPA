import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: object;

  constructor(private user: ScoresService) { }

  ngOnInit() {
    //Subscribe to service to get scores from database
    this.user.getScores().subscribe(
      user => this.users$ = user
    );
  }

}
