import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { Observable } from 'rxjs';
import { AchievementsService } from '../achievements.service';
import { TabScrollerService } from '../tabscroller.service';
import { Router } from '@angular/router';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  users$: object;
  Achievements$: object;
  TabScroller$: boolean;

  /*sortedScore: object[] = [];
  onlineUsers: object[] = [];
  offlineUsers: object[] = [];
  finalSort: object[] = [];*/

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
        console.log(this.users$);

        // Find size of user list
        let findingSize = true;
        let size = 0;  
        while(findingSize){
        
          console.log(this.users$[size]);
          size++;
          if(this.users$[size] == undefined){
            findingSize = false;
          }
        }

        // Sort the users by score
        let sortedScore = [];
        let alreadySorted = [];

        // Find absolute smallest value
        let smallest = this.users$[0].Score*1;
        for(let i = 0; i < size; i++){
          if(smallest > this.users$[i].Score*1){
            smallest = i;
          }
        }

        for(let h = 0; h < size; h++){

          let biggest = smallest;
          for(let i = 0; i < size; i++){
            // Check if already sorted
            let as = false;
            for(let a = 0; a < alreadySorted.length; a++){
              if(alreadySorted[a] == i){
                as = true;
              }
            }
            if(this.users$[i].Score*1 > this.users$[biggest].Score*1 && !as){
              biggest = i;
            }
          }
          sortedScore.push(this.users$[biggest]);
          alreadySorted.push(biggest);
        }

        console.log("SORTED BY SCORE");
        console.log(sortedScore);
        
        // Sort the users by online status
        let onlineSort = [];
        let offlineSort = [];
        for(let i = 0; i < size; i++){
          if(sortedScore[i].Online == 0){
            offlineSort.push(sortedScore[i]);
          }
          else if(sortedScore[i].Online == 1){
            onlineSort.push(sortedScore[i]);
          }
        }

        console.log("Sorted Online Users:");
        console.log(onlineSort);

        console.log("Sorted Offline Users:");
        console.log(offlineSort);
      }
    );
    
    //subscribe to service to get achievement info
    this.achievement.getAchievements().subscribe(
      achievement => {
        this.Achievements$ = achievement;
        console.log(this.Achievements$)
      }
    );
  
  }
  ngOnDestroy() {
    //this.tabscroller.destroy();
  }

}