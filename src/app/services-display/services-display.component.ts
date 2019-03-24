import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-display',
  templateUrl: './services-display.component.html',
  styleUrls: ['./services-display.component.scss']
})
export class ServicesDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
/**
@Component({
  selector: 'services-display',
  template: `
    <ul>
      <li *ngFor="let item of items">
        {{ item.title }}
      </li>
    </ul>
  `,
})
export class ServicesDisplayComponent {
  items: ["taco", "hello", "please work"];
}

*/
