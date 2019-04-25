import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MapComponent} from '../map/map.component';

@Component({
  selector: 'app-services-display',
  templateUrl: './services-display.component.html',
  styleUrls: ['./services-display.component.scss']
})
export class ServicesDisplayComponent implements OnInit {
  myVariable: string;
  myCounter: number;
  // Pulls dictionary from the map component to get info about services
  // We can update the dict in the map component and the HTML
  // will update automatically here. Store information about service
  // status in that dictionary to have it updated here.
  servicesStatus = this.parent.getDict();
  whoStatus = this.parent.getWho();
  servicesHTML: string;

  constructor(private parent: MapComponent,
    private cdRef: ChangeDetectorRef) {
    this.myVariable = 'Hello World';
    this.myCounter = 0;
  }

  ngOnInit() {
  }

  /**
  private displayServices() {
    this.myCounter = this.myCounter + 1;
    if (this.myCounter % 500 == 0) {
      let servicesStatus = this.parent.getDict();
      this.servicesHTML = "";
      for (var item in servicesStatus) {
        //console.log(item);
        this.servicesHTML = this.servicesHTML + item + '\n';
      }
      console.log(this.servicesHTML);
    }
    //this.cdRef.detectChanges();
    //console.log("Running");

    return this.servicesHTML;

  }
  */

  public changeMyVariable(newValue: string) {
    this.myVariable = newValue;
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
