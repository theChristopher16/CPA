import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabScrollerService } from '../tabscroller.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  items: Array<any> = [];

  // auto scrolling variables
  TabScroller$: boolean

  constructor(private router: Router, private tabscroller: TabScrollerService) {
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
    // auto scrolling functionality
    this.TabScroller$ = this.tabscroller.getScrollBool();
    setTimeout(() => {
      if (this.TabScroller$) {
        this.router.navigate(['']);
      }
    }, 45000); // 45s
}
}
