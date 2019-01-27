import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  items: Array<any> = [];


  constructor() {
  this.items = [
    { name: '../../assets/Info/Images/img1.png' },
    { name: '../../assets/Info/Images/img3.png' },
    { name: '../../assets/Info/Images/img1.png' },
    { name: '../../assets/Info/Images/img3.png' },
    { name: '../../assets/Info/Images/img1.png' },
    { name: '../../assets/Info/Images/img3.png' },
    { name: '../../assets/Info/Images/img1.png' },
    { name: '../../assets/Info/Images/img3.png' }
  ];
}

ngOnInit() {
}
}
