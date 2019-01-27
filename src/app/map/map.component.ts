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
    this.createCanvas();
  }

  private createCanvas(){
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: any){

    let angle = 0;
    let green;
    let blue;
    let red;

   p.preload = () => {
      green = p.loadImage('../../assets/Map/green.jpg');
      blue = p.loadImage('../../assets/Map/blue.jpg');
      red = p.loadImage('../../assets/Map/red.jpg');
    };

    p.setup = () => {
      var cnv = p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
      cnv.parent('myContainer');
    };

    p.draw = () => {
      p.background(175);
      p.noStroke(0);
      p.rotateX(angle);
      p.rotateY(angle * 0.3);
      p.rotateZ(angle * 0.7);
      p.noStroke();

      // Normal material is for debugging
      //p.normalMaterial();

      p.texture(green);
      p.box(400, 300, 10);

      angle += 0.007;
    };
  }
}
