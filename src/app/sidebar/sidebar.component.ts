import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

//original component genereated for sidebar
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  //function to open the bottom sheet
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetMenu);
  }

}

//Additional component for the bottom sheet
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: '../hamburger-menu/hamburger-menu.component.html',//'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetMenu {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetMenu>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}