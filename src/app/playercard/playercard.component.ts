import { Component, OnInit } from '@angular/core';

/*
  If you want to add script functions to the menu sheet
  You must do so in the sidebar component
*/

@Component({
  selector: 'app-playercard',
  templateUrl: './playercard.component.html',
  styleUrls: ['./playercard.component.scss']
})
export class PlayercardComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }
  // Maybe used to set badge pictures
  //(document.getElementById('userProfilePic') as HTMLImageElement).src = profile.picture;

}
