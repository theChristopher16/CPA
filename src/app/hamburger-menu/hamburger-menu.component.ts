import { Component, OnInit } from '@angular/core';

/*
  If you want to add script functions to the menu sheet
  You must do so in the sidebar component
*/

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

  public device1;
  public cameraslider;
  public device2;
  public toggleAutoScroll;
  public changeSpeed;
  public toggleBuildingNames;
  


  constructor() { }

  ngOnInit() {}

}
