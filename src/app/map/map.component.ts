import { Component, OnInit } from '@angular/core';
import * as p5 from '../../../node_modules/p5/';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private p5;

  constructor(
  //  private p5: p5 
) { }

  ngOnInit() {

 // var cnv = createCanvas(100, 100);
//cnv.parent('myContainer');

    this.createCanvas();
  }

  private createCanvas(){
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: any){
    p.setup = () => {
      var cnv = p.createCanvas(window.innerWidth, window.innerHeight);
      cnv.parent('myContainer');
    };

    p.draw = () => {
      p.background(255);
      p.fill(0);
      p.ellipse(p.width / 2, p.height / 2, 50, 50);
    };
  }
}
