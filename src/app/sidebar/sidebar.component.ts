import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { TabScrollerService } from '../tabscroller.service';
import { Router } from '@angular/router';
import { SpeedControllerService } from '../speedcontroller.service';
import { BuildingNameService } from '../buildingname.service';
import { UserFormComponent } from '../user-form/user-form.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

/*
  Singleton used to keep track of the current route
  May be overkill, but it works and I dont want to change anything
*/
export class NavigateRoutes {

  private static instance: NavigateRoutes;
  private currentRoute: string;

  private constructor() {
  }

  static getInstance() {
    if (!NavigateRoutes.instance) {
      NavigateRoutes.instance = new NavigateRoutes();
    }
    return NavigateRoutes.instance;
  }

  setCurrentRoute(navTo: string) {
    this.currentRoute = navTo;
  }

  getCurrentRoute() {
    return this.currentRoute.toString();
  }
}

// Additional component for the bottom sheet
@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: '../hamburger-menu/hamburger-menu.component.html',
  styleUrls: ['../hamburger-menu/hamburger-menu.component.scss'],
})

export class BottomSheetMenuComponent implements OnInit {

  Tabscroller$: boolean;
  BuildingNamer$: boolean;
  device1: boolean;
  device2: boolean;
  navTo: string;
  CameraSlider$: number;
  cameraslider: number;

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetMenuComponent>,
    private tabscroller: TabScrollerService,
    private router: Router,
    private speedcontroller: SpeedControllerService,
    private buildingname: BuildingNameService,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.Tabscroller$ = this.tabscroller.getScrollBool();
    if (this.Tabscroller$) {
      this.device1 = true;
    }
    this.BuildingNamer$ = this.buildingname.getNameBool();
    if (this.BuildingNamer$) {
      this.device2 = true;
    }
    this.CameraSlider$ = this.speedcontroller.getSpeed();
    this.cameraslider = this.speedcontroller.getSpeed();
    console.log('cameraslider:' + this.CameraSlider$);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  changeSpeed() {
    this.speedcontroller.setSpeed(this.cameraslider);
  }

  // function executed by the slide toggle
  toggleAutoScroll() {
    if (this.tabscroller.getScrollBool()) {
      this.tabscroller.setScrollBool(false);
    } else {
      // need a way to refresh current route or restart timer...
      // set timer then change to next one based on route (switchcase)
      // component might not be with other routes...
      console.log('THE CURRENT ROUTE IS');
      console.log(NavigateRoutes.getInstance().getCurrentRoute());
      this.tabscroller.setScrollBool(true);
      const currentRoute = NavigateRoutes.getInstance().getCurrentRoute();
      switch (currentRoute) {
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

  toggleBuildingNames() {
    this.buildingname.setNameBool(!this.buildingname.getNameBool());
  }

  openForm(){
    let dialogRef = this.dialog.open(UserFormComponent,{
      height: '400px',
      width: '600px',
    });
  }
}

//SIDEBAR COMPONENT CLASS
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  Tabscroller$: boolean;
  BuildingName$: boolean;
  CameraSlider$: number;

  constructor(
    private bottomSheet: MatBottomSheet,
    private tabscroller: TabScrollerService,
    private cameraslider: SpeedControllerService,
    private buildingnamer: BuildingNameService) { }

  ngOnInit() {
    this.Tabscroller$ = this.tabscroller.getScrollBool();
    this.CameraSlider$ = this.cameraslider.getSpeed();
    this.BuildingName$ = this.buildingnamer.getNameBool();
  }

  // function to open the bottom sheet
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetMenuComponent);
  }
}
