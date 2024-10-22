import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { AchievementsService } from '../achievements.service';
import { TabScrollerService } from '../tabscroller.service';
import { Router } from '@angular/router';
import { NavigateRoutes, BottomSheetMenuComponent } from '../sidebar/sidebar.component';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

var userList:User[];
var globalUsers;

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

  constructor(private bottomSheet: MatBottomSheet, private user: UserInfoService, private achievement: AchievementsService,
  private router: Router, private tabscroller: TabScrollerService) { }

  onClickMe() {
    
    // Fill user achievements here
    this.fillUserAchievements();

    var value = (<HTMLInputElement>document.getElementById("searchVal")).value;

    var player = this.findPlayer(value);
    if(player != undefined){
      PlayerSearchMenu.user = player;
    }
    else{
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
      u.achievements = [];
      for(let a of u.achievements_uf){
        let counter = 0;
        while(true){
          if(this.Achievements$[counter].ID == a){
            u.fillAch(this.Achievements$[counter]);
            counter = 0;
            break;
          }
          // Catch if not found
          if(counter == 50){
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
    NavigateRoutes.getInstance().setCurrentRoute('users'); // used to tell sidebar the current route

    this.TabScroller$ = this.tabscroller.getScrollBool();
    // auto scrolling
    setTimeout(() => {
      if (this.tabscroller.getScrollBool() && NavigateRoutes.getInstance().getCurrentRoute() === 'users') {
        this.router.navigate(['stats']);
      }
    }, 45000); // 2s

    // Subscribe to service to get scores from database
    this.user.getUserInfo().subscribe(
      user => {
        globalUsers = user;

        // Find size of user list
        let findingSize = true;
        let size = 0;
        while (findingSize) {
          size++;
          if (globalUsers[size] === undefined) {
            findingSize = false;
          }
        }

        // Sort the users by online status
        const onlineSort = [];
        const offlineSort = [];
        for (let i = 0; i < size; i++) {
          if (globalUsers[i].Online == 0) {
            offlineSort.push(globalUsers[i]);
          } else if (globalUsers[i].Online == 1) {
            onlineSort.push(globalUsers[i]);
          }
        }

        this.onlineSorted = onlineSort;
        this.offlineSorted = offlineSort;
        this.initUsers(this.onlineSorted, this.offlineSorted);
      }
    );

    setInterval(() => {
      // runs sub service every 2 minutes
      this.user.getUserInfo().subscribe(
        user => {
          globalUsers = user;

        // Find size of user list
        let findingSize = true;
        let size = 0;
        while (findingSize) {
          size++;
          if (globalUsers[size] === undefined) {
            findingSize = false;
          }
        }

        // Sort the users by online status
        const onlineSort = [];
        const offlineSort = [];
        for (let i = 0; i < size; i++) {
          if (globalUsers[i].Online == 0) {
            offlineSort.push(globalUsers[i]);
          } else if (globalUsers[i].Online == 1) {
            onlineSort.push(globalUsers[i]);
          }
        }

        this.onlineSorted = onlineSort;
        this.offlineSorted = offlineSort;
        this.initUsers(this.onlineSorted, this.offlineSorted);
        }
      );},5000);

    // subscribe to service to get achievement info
    this.achievement.getAchievements().subscribe(
      achievement => {
        this.Achievements$ = achievement;
      }
    );

  }
  ngOnDestroy() {
    // this.tabscroller.destroy();
  }

  initUsers(on: any, off: any){
    userList = [];
    let counter = 0;
    for(let u of on){
      userList[counter] = new User(u.Username, u.Score, u.Achievements);
      counter++;
    }
    for(let u of off){
      userList[counter] = new User(u.Username, u.Score, u.Achievements);
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
    console.log(PlayerSearchMenu.user);
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
