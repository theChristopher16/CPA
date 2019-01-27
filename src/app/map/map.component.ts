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

    let angle = 0;

    p.setup = () => {
      var cnv = p.createCanvas(400, 300, p.WEBGL);
      cnv.parent('myContainer');
    };

    p.draw = () => {
      p.background(175);
      p.rectMode(p.CENTER);
      p.noStroke();
      p.fill(0, 0, 255);
      p.rotateX(angle);
      p.rotateY(angle * 0.3);
      p.rotateZ(angle * 0.7);
      p.box();

      angle += 0.007;
    };
  }
}
