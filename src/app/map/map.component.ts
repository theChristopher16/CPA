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

    let building;

    // Josh: Added to track fps
    let lastLoop = performance.now();

   p.preload = () => {
      green = p.loadImage('../../assets/Map/green.jpg');
      blue = p.loadImage('../../assets/Map/blue.png');
      red = p.loadImage('../../assets/Map/red.png');
      floor = p.loadImage('../../assets/Map/floor.png');
      orange = p.loadImage('../../assets/Map/orange.png');
      yellow = p.loadImage('../../assets/Map/yellow.png');
      floor = p.loadImage('../../assets/Map/map.png');
      building = p.loadModel('../../assets/Map/cone.obj')
      yellow = p.loadImage('../../assets/Map/yellow.png');
    };

    p.setup = () => {
      var cnv = p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
      cnv.parent('myContainer');
    };

    p.draw = () => {
      p.background(134 * p.cos(angle), 218 * p.cos(angle), 112.5 * p.cos(angle));
      p.background(112.5 * p.cos(angle));
      p.noStroke(0);
      p.rotateX(1);
      p.rotateY(0);
      p.rotateZ(angle);
      p.noStroke();

      // Normal material is for debugging
      //p.normalMaterial();
      p.texture(floor);
      p.box(4000, 4000, 10);

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
      p.texture(green);
      p.box(150, 150, 450);

      

      /*p.noStroke();
      p.translate(100, 0);
      p.texture(blue);
      p.box(150, 150, 450);*/

      // Josh: Testing out .obj model
      p.translate(-200, 100, 140);
      p.normalMaterial();
      p.scale(30);
      p.stroke(255, 255, 1); // Colors lines of shape
      p.model(building);

      angle += 0.0027;

      // Josh: Calculates fps and writes it to console
      var thisLoop = performance.now();
      var fps = Math.round(1000 / (thisLoop - lastLoop));
      lastLoop = thisLoop;
      console.log(fps);
      p.texture(red);
      p.box(150, 150, 450);

      angle += 0.0027;
    };
  }
}
