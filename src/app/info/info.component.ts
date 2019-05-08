import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabScrollerService } from '../tabscroller.service';
import { NavigateRoutes } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  items: Array<any> = [];

  // auto scrolling variables
  TabScroller$: boolean;

  constructor(private router: Router, private tabscroller: TabScrollerService) {
  this.items = [
    { name: '../../assets/Info/Images/img2.png' },
    { name: '../../assets/Info/Images/img1.png' },
    { name: '../../assets/Info/Images/img3.png' },
    { name: '../../assets/Info/Images/img2.png' },
    { name: '../../assets/Info/Images/img1.png' },
    { name: '../../assets/Info/Images/img3.png' },
    { name: '../../assets/Info/Images/img2.png' },
    { name: '../../assets/Info/Images/img1.png' }
  ];
  }

  // The array of images to be shown in the slide show
  imageArr = [
    '../../assets/Info/Images/img1.png',
    '../../assets/Info/Images/img2.png',
    '../../assets/Info/Images/img3.png'];

  slideAutoPlay = true;
  playInterval = 60000; // in ms
  showDots = true;

  ngOnInit() {

    NavigateRoutes.getInstance().setCurrentRoute('info'); // used to tell sidebar the current route

    // auto scrolling functionality
    this.TabScroller$ = this.tabscroller.getScrollBool();
    setTimeout(() => {
      if (this.tabscroller.getScrollBool() && NavigateRoutes.getInstance().getCurrentRoute() === 'info') {
        this.router.navigate(['']);
      }
    }, 45000); // 45s
}
}
