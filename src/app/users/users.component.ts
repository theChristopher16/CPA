import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { Observable } from 'rxjs';
import { AchievementsService } from '../achievements.service';
import { TabScrollerService } from '../tabscroller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  users$: object;
  Achievements$: object;
  TabScroller$: boolean;


  constructor(private user: UserInfoService, private achievement: AchievementsService,
  private router: Router, private tabscroller: TabScrollerService) { }

  ngOnInit() {

    /**this.tabscroller.getScrollBool().subscribe(
      tabscroller => {
        this.TabScroller$ = tabscroller;
        console.log(this.TabScroller$);
      }
    );*/
    this.TabScroller$ = this.tabscroller.getScrollBool();

    // auto scrolling
    setTimeout(() => {
      if (this.TabScroller$) {
        this.router.navigate(['stats']);
      }
    }, 45000); // 2s

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
  ngOnDestroy() {
    //this.tabscroller.destroy();
  }

}
