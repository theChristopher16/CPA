import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { Observable } from 'rxjs';
import { AchievementsService } from '../achievements.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: object;
  Achievements$: object;

  constructor(private user: UserInfoService, private achievement: AchievementsService) { }

  ngOnInit() {

    //Subscribe to service to get scores from database
    this.user.getUserInfo().subscribe(
      user => {
        this.users$ = user;
        //console.log(this.users$);
      }
    );
    
    //subscribe to service to get achievement info
    this.achievement.getAchievements().subscribe(
      achievement => {
        this.Achievements$ = achievement;
        //console.log(this.Achievements$)
      }
    );
  }

}
