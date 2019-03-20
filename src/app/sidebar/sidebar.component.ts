import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { TabScrollerService } from '../tabscroller.service';
import { Router } from '@angular/router';
import { MapComponent } from '../map/map.component';
import { SpeedControllerService } from '../speedcontroller.service';

/*
  Singleton used to keep track of the current route
  May be overkill, but it works and I dont want to change anything
*/
export class NavigateRoutes {

  private static instance: NavigateRoutes;
  private currentRoute: string;

  private constructor(){
  }

  static getInstance(){
    if (!NavigateRoutes.instance){
      NavigateRoutes.instance = new NavigateRoutes()
    }
    return NavigateRoutes.instance
  }

  setCurrentRoute(navTo:string){
    this.currentRoute = navTo;
  }

  getCurrentRoute(){
    return this.currentRoute.toString();
  }
}

//original component genereated for sidebar
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  Tabscroller$: boolean;
  CameraSlider$: number;
  
  constructor(private bottomSheet: MatBottomSheet, private tabscroller: TabScrollerService, private cameraslider: SpeedControllerService) { }

  ngOnInit() {
    this.Tabscroller$ = this.tabscroller.getScrollBool();
    this.CameraSlider$ = this.cameraslider.getSpeed();
  }

  //function to open the bottom sheet
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetMenu);
    console.log("SCROLL VAL IS " + this.Tabscroller$);
  }

}

//Additional component for the bottom sheet
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: '../hamburger-menu/hamburger-menu.component.html',
  styleUrls: ['../hamburger-menu/hamburger-menu.component.scss'],
})

export class BottomSheetMenu implements OnInit {

  Tabscroller$: boolean;
  device: boolean;
  navTo: string;
  CameraSlider$: number;
  cameraslider: number;

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetMenu>, 
    private tabscroller: TabScrollerService,
    private router: Router,
    private speedcontroller: SpeedControllerService) {}
    

  ngOnInit(){
    this.Tabscroller$ = this.tabscroller.getScrollBool();
    if(this.Tabscroller$){
      this.device = true;
    }
    this.CameraSlider$ = this.speedcontroller.getSpeed();
    this.cameraslider = this.speedcontroller.getSpeed();
    console.log("cameraslider:" + this.CameraSlider$);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  changeSpeed(){
    this.speedcontroller.setSpeed(this.cameraslider);
  }

  //function executed by the slide toggle
  toggle(){
    if(this.tabscroller.getScrollBool()){
      this.tabscroller.setScrollBool(false);
    }
    else{
      //need a way to refresh current route or restart timer...
      //set timer then change to next one based on route (switchcase)
      //component might not be with other routes...
      console.log("THE CURRENT ROUTE IS");
      console.log(NavigateRoutes.getInstance().getCurrentRoute());
      this.tabscroller.setScrollBool(true);
      let currentRoute = NavigateRoutes.getInstance().getCurrentRoute();
      switch(currentRoute){
        case '':
          setTimeout(() => {
            if (this.tabscroller.getScrollBool()) {
              this.router.navigate(['users']);
            }
          }, 10000); // 10s
          break;
        case 'users':
          setTimeout(() => {
            if (this.tabscroller.getScrollBool()) {
              this.router.navigate(['stats']);
            }
          }, 10000); // 10s
          break;
        case 'stats':
          setTimeout(() => {
            if (this.tabscroller.getScrollBool()) {
              this.router.navigate(['info']);
            }
          }, 10000); // 10s
          break;
        case 'info':
          setTimeout(() => {
            if (this.tabscroller.getScrollBool()) {
              this.router.navigate(['']);
            }
          }, 10000); // 10s
          break;
      }
    }
  }
}