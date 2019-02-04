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
    let nethkin;
    let nethkinT;
    let tolliver;
    let tolliverT;
    let wyly;
    let wylyT;
    let southHall;
    let southHallT;
    let studentCenter;
    let studentCenterT;

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
      nethkin = p.loadModel('../../assets/Map/nethkin.obj')
      tolliver = p.loadModel('../../assets/Map/tolliver.obj')
      wyly = p.loadModel('../../assets/Map/wyly.obj')
      southHall = p.loadModel('../../assets/Map/southHall.obj')
      studentCenter = p.loadModel('../../assets/Map/studentCenter.obj')
    
      // Josh: Initialize 3D text labels here
      nethkinT = p.createGraphics(150, 150);
      nethkinT.fill(255);
      nethkinT.textAlign(p.CENTER);
      nethkinT.textSize(20)
      nethkinT.text("Nethkin", 80, 60);

      tolliverT = p.createGraphics(150, 150);
      tolliverT.fill(255);
      tolliverT.textAlign(p.CENTER);
      tolliverT.textSize(20)
      tolliverT.text("Tolliver", 75, 60);
      
      wylyT = p.createGraphics(150, 150);
      wylyT.fill(255);
      wylyT.textAlign(p.CENTER);
      wylyT.textSize(20);
      wylyT.text("Wyly", 80, 60);

      southHallT = p.createGraphics(150, 150);
      southHallT.fill(255);
      southHallT.textAlign(p.CENTER);
      southHallT.textSize(20);
      southHallT.text("South Hall", 80, 60);

      studentCenterT = p.createGraphics(150, 150);
      studentCenterT.fill(255);
      studentCenterT.textAlign(p.CENTER);
      studentCenterT.textSize(20);
      studentCenterT.text("Student Center", 80, 60);
    };

    p.setup = () => {
      var cnv = p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
      cnv.parent('myContainer');
    };

    p.draw = () => {
      // Draw background color
      p.background(134 * p.cos(angle), 218 * p.cos(angle), 112.5 * p.cos(angle));
     
      // Move camera
      p.noStroke(0);
      p.rotateX(1);
      p.rotateY(0);

      // Note to future:
      // Draw text first to fix transparency bug?
      // Before rotation draw building labels so text is always facing camera
      p.rotateZ(angle);
      p.noStroke();

      // Draw ground
      p.texture(floor);
      p.box(1152, 1152, 2);

      

      // Gabrielle: Wyly
      p.push();
      p.translate(125, -290, 0);
      p.rotateX(90 * Math.PI/180);
      p.rotateY(15 * Math.PI/180);
      p.ambientMaterial(0);
      p.scale(18);
      p.stroke(255, 255, 1);
      p.model(wyly);
      p.rotateX(180 * Math. PI / 180);
      p.translate(0, -10, 0);
      p.texture(wylyT);
      p.plane(10);
      p.pop();

      // Gabrielle: South Hall
      p.push();
      p.translate(-500, 200, 23); 
      p.ambientMaterial(0);
      p.scale(13);
      p.stroke(255, 255, 1); 
      p.model(southHall);
      p.rotateX(180 * Math. PI / 180);
      p.translate(0, -2, 0);
      p.rotateX(90 * Math.PI / 180);
      p.texture(southHallT);
      p.plane(10);
      p.pop();

      // Gabrielle: Student Center
      p.push();
      p.translate(-20, -75, 0);
      p.rotateX(90 * Math.PI / 180);
      p.rotateY(195 * Math.PI / 180); 
      p.ambientMaterial(0);
      p.scale(14);
      p.stroke(255, 255, 1);
      p.model(studentCenter);
      p.rotateX(180 * Math. PI / 180);
      p.translate(0, -2, 0);
      p.texture(studentCenterT);
      p.plane(10);
      p.pop();

      // Josh: Nethkin
      p.push();
      p.translate(510, 130, 0);
      p.rotateX(90 * Math.PI/180); // Fixes the 90 degree flip problem from Blender
      p.rotateY(180 * Math.PI/180);
      p.ambientMaterial(0);
      p.scale(14);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.model(nethkin);
      p.rotateX(180 * Math. PI / 180);
      p.translate(0, -4, 0);
      p.texture(nethkinT);
      p.plane(10);
      p.pop();

      // Josh: Tolliver
      p.push();
      p.translate(-130, 40, 23);
      p.rotateX(-90 * Math.PI/180); // Fixes the 90 degree flip problem from Blender
      p.rotateY(163 * Math.PI/180);
      p.ambientMaterial(0);
      p.scale(15);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.model(tolliver);
      p.rotateX(180 * Math.PI / 180);
      p.rotateZ(180 * Math.PI / 180);
      p.texture(tolliverT);
      p.plane(10);
      p.pop();

      angle += 0.0027;

      // Josh: Calculates fps and writes it to console
      var thisLoop = performance.now();
      var fps = Math.round(1000 / (thisLoop - lastLoop));
      lastLoop = thisLoop;
      console.log(fps);
    };
  }
}
