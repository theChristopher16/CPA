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
    let floor;
    let orange;
    let yellow;

   p.preload = () => {
      green = p.loadImage('../../assets/Map/green.jpg');
      blue = p.loadImage('../../assets/Map/blue.png');
      red = p.loadImage('../../assets/Map/red.png');
      floor = p.loadImage('../../assets/Map/floor.png');
      orange = p.loadImage('../../assets/Map/orange.png');
      yellow = p.loadImage('../../assets/Map/yellow.png');
    };

    p.setup = () => {
      var cnv = p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
      cnv.parent('myContainer');
    };

    p.draw = () => {
      p.background(112.5 * p.cos(angle));
      p.noStroke(0);
      p.rotateX(1);
      p.rotateY(0);
      p.rotateZ(angle);
      p.noStroke();

      // Normal material is for debugging
      //p.normalMaterial();

      p.texture(floor);
      p.box(2000, 2000, 10);

      p.noStroke();
      p.translate(300, -190);
      p.texture(red);
      p.box(150, 150, 200);

      p.noStroke();
      p.translate(-700, 190);
      p.texture(blue);
      p.box(150, 150, 900);


      p.noStroke();
      p.translate(350, 280);
      p.texture(blue);
      p.box(150, 150, 450);

      p.noStroke();
      p.translate(10, -800);
      p.texture(red);
      p.box(150, 150, 450);

      angle += 0.0027;
    };
  }
}
