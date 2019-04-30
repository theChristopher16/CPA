import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { Observable } from 'rxjs';
import { AchievementsService } from '../achievements.service';
import { TabScrollerService } from '../tabscroller.service';
import { Router } from '@angular/router';
import { NavigateRoutes, BottomSheetMenu } from '../sidebar/sidebar.component';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

var userList:User[];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit, OnDestroy {

  users$: object;
  Achievements$: object;
  TabScroller$: boolean;

  onlineSorted: object;
  offlineSorted: object;

  searchText: string;

  achFilled: boolean;

  constructor(private bottomSheet: MatBottomSheet, private user: UserInfoService, private achievement: AchievementsService,
  private router: Router, private tabscroller: TabScrollerService) { }

  onClickMe() {
    
    if(!this.achFilled){
      // Fill user achievements here
      this.fillUserAchievements();
      this.achFilled = true;
    }

    var value = (<HTMLInputElement>document.getElementById("searchVal")).value;

    var player = this.findPlayer(value);
    if(player != undefined){
      console.log("PLAYER EXISTS");
      PlayerSearchMenu.user = player;
    }
    else{
      console.log("PLAYER DOES NOT EXIST");
      PlayerSearchMenu.user = new User("User Not Found", 0, null);
    }
    this.openBottomSheet();
  }

  findPlayer(v: string){
    var user = undefined;
    for(let u of userList){
      if(v == u.getName()){
        user = u;
      }
    }
    return user;
  }

  //function to open the bottom sheet
  openBottomSheet(): void {
    this.bottomSheet.open(PlayerSearchMenu);
  }

  fillUserAchievements(){
    for(let u of userList){
      for(let a of u.achievements_uf){
        let counter = 0;
        while(true){
          if(this.Achievements$[counter].Id == a){
            u.fillAch(this.Achievements$[counter]);
            counter = 0;
            break;
          }
          // Catch if not found
          if(counter == 100){
            counter = 0;
            break;
          }
          counter = counter + 1;
        }
      }
    }
  }

  ngOnInit() {

    this.searchText = "";
    /**this.tabscroller.getScrollBool().subscribe(
      tabscroller => {
        this.TabScroller$ = tabscroller;
        console.log(this.TabScroller$);
      }
    );*/
    NavigateRoutes.getInstance().setCurrentRoute('users'); //used to tell sidebar the current route

    this.TabScroller$ = this.tabscroller.getScrollBool();
    // auto scrolling
    setTimeout(() => {
      if (this.tabscroller.getScrollBool() && NavigateRoutes.getInstance().getCurrentRoute()=='users') {
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

        this.onlineSorted = onlineSort;
        this.offlineSorted = offlineSort;

        this.initUsers(this.onlineSorted, this.offlineSorted);
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

  initUsers(on: any, off: any){
    userList = [];
    let counter = 0;
    for(let u of on){
      userList[counter] = new User(u.Name, u.Score, u.Achievements);
      counter++;
    }
    for(let u of off){
      userList[counter] = new User(u.Name, u.Score, u.Achievements);
      counter++;
    }
  }
}

class User{

  name: string;
  score: number;
  achievements: any[] = new Array();
  achievements_uf: any[] = new Array();

  constructor(n: any, s: any, a: any){
    this.name = n;
    this.score = s;
    // Get all achievements from user and store in list
    if(a != null){
      let ach = "";
      for(let i = 0; i < a.length; i++){
        if(a.charAt(i) != ","){
          ach = ach + a.charAt(i);
        }
        else{
          this.achievements_uf.push(ach);
          ach = ""
        }
      }
      this.achievements_uf.push(ach);
    }
  }

  getName(){
    return this.name;
  }
  getScore(){
    return this.score;
  }
  getAchievements_UF(){
    return this.achievements_uf;
  }
  getAchievements(){
    return this.achievements;
  }

  fillAch(ach: any){
    console.log("FILLING");
    this.achievements.push(ach);
  }
}

//Additional component for the bottom sheet
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: '../playercard/playercard.component.html',
  styleUrls: ['../playercard/playercard.component.scss'],
})

export class PlayerSearchMenu implements OnInit {

  name: string;
  score: number;
  achievements$: any;

  public static user: User;

  constructor(private playerSearchRef: MatBottomSheetRef<PlayerSearchMenu>){
  }

  ngOnInit(){
    document.getElementById("name").innerHTML = PlayerSearchMenu.user.getName();
    document.getElementById("score").innerHTML = String(PlayerSearchMenu.user.getScore());
    this.achievements$ = PlayerSearchMenu.user.getAchievements();
    console.log(this.achievements$);
  }
  openLink(event: MouseEvent): void {
    this.playerSearchRef.dismiss();
    event.preventDefault();
  }
}
