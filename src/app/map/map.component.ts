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
    let gtm;
    let gtmT;
    let cobb;
    let cobbT;
    let keeny;
    let keenyT;

    //PING STUFF
    let ping;
    let ping2;
    let GTMurl;
    let Wylyurl;
    let didPing;
    let didPing2;

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
      gtm = p.loadModel('../../assets/Map/gtm.obj')
      cobb = p.loadModel('../../assets/Map/cobb.obj')
      keeny = p.loadModel('../../assets/Map/keeny.obj')

     // Josh: Initialize 3D text labels here
      nethkinT = p.createGraphics(150, 150); // Nethken text
      nethkinT.fill(255); 
      nethkinT.textAlign(p.CENTER);
      nethkinT.textSize(20)
      nethkinT.text("Nethken", 80, 60);

      tolliverT = p.createGraphics(150, 150); // Tolliver text
      tolliverT.fill(255);
      tolliverT.textAlign(p.CENTER);
      tolliverT.textSize(20)
      tolliverT.text("Tolliver", 75, 60);
      
      wylyT = p.createGraphics(150, 150); // Wyly text
      wylyT.fill(255);
      wylyT.textAlign(p.CENTER);
      wylyT.textSize(20);
      wylyT.text("Wyly", 80, 60);

      southHallT = p.createGraphics(150, 150); // South Hall text
      southHallT.fill(255);
      southHallT.textAlign(p.CENTER);
      southHallT.textSize(20);
      southHallT.text("South Hall", 80, 60);

      studentCenterT = p.createGraphics(150, 150); // Student Center text
      studentCenterT.fill(255);
      studentCenterT.textAlign(p.CENTER);
      studentCenterT.textSize(20);
      studentCenterT.text("Student Center", 80, 60);

      gtmT = p.createGraphics(150, 150); // GTM text
      gtmT.fill(255);
      gtmT.textAlign(p.CENTER);
      gtmT.textSize(15);
      gtmT.text("GTM", 80, 60);

      cobbT = p.createGraphics(150, 150); // COBB text
      cobbT.fill(255);
      cobbT.textAlign(p.CENTER);
      cobbT.textSize(20);
      cobbT.text("COBB", 80, 60);

      keenyT = p.createGraphics(150, 150); // Keeny text
      keenyT.fill(255);
      keenyT.textAlign(p.CENTER);
      keenyT.textSize(20);
      keenyT.text("Keeny Hall", 80, 60);

    };

    p.setup = () => {
      var cnv = p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
      cnv.parent('myContainer');
    };

    p.draw = () => {
      // Draw background color
      // Josh: Changed background color to fluctuate between our color scheme
      var r = 242 - Math.abs(242 * p.cos(angle));
      var g = 13 + Math.abs(242 * p.cos(angle));
      var b = 255;
      //p.background(134 * p.cos(angle), 218 * p.cos(angle), 112.5 * p.cos(angle));
      p.background(r, g, b);

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

      // Gabrielle: Wyly ------
      p.push();
      p.translate(125, -290, 0);
      p.rotateX(90 * Math.PI/180); // Rotating building to appropriate place
      p.rotateY(15 * Math.PI/180);
      p.ambientMaterial(0);
      p.scale(18);

      // Maddi: Wyly ping stuff
      if(didPing2){
        p.stroke(1, 255, 1)
      }
      else{
        p.stroke(255, 255, 255); // Coloring the building
      }
      
      Wylyurl = "http://192.168.1.9:80/"
      ping2 = new XMLHttpRequest();
      ping2.open("GET", Wylyurl, true);
      ping2.onreadystatechange = function(){
        if(ping2.readyState != 1){
          console.log(ping2.status, ping2.readyState)
        }
        if(ping2.status == 200){
          didPing2 = true;
          console.log("test statement");
        }
        ping2.onerror = function(e){
          didPing2 = false;
        };
      };

      ping2.send();
      p.model(wyly);
      // Text
      p.rotateX(180 * Math. PI / 180); // Gets the text facing the camera
      p.translate(0, -10, 0); // How high the text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(wylyT);
      p.plane(10);
      p.pop();

      // Gabrielle: GTM ------
      p.push();
      p.translate(-50, -325, 0);
      p.rotateX(90 * Math.PI / 180); // Rotating the building to appropriate place
      p.rotateY(-174 * Math.PI / 180);
      p.ambientMaterial(0);
      p.scale(25);

      // Maddi: GTM ping stuff
      if(didPing){
        p.stroke(1, 255, 1)
      }
      else{
        p.stroke(255, 255, 255); // Coloring the building
      }
      
      GTMurl = "http://192.168.1.7:80/"
      ping = new XMLHttpRequest();
      ping.open("GET", GTMurl, true);
      ping.onreadystatechange = function(){
        if(ping.readyState != 1){
          console.log(ping.status, ping.readyState)
        }
        if(ping.status == 200){
          didPing = true;
          console.log("test statement");
        }
        ping.onerror = function(e){
          didPing = false;
        };
      };

      ping.send();

      p.model(gtm);
      // Text
      p.rotateX(180 * Math.PI / 180); // Gets the text facing the screen
      p.rotateY(180 * Math.PI / 180);
      p.translate(0, -2, 0); // How high the text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(gtmT);
      p.plane(10);
      p.pop();

      // Gabrielle: COBB ------
      p.push();
      p.translate(535, -200, 0);
      p.rotateX(90 * Math.PI / 180); // Rotating the building to appropriate place
      p.rotateY(270 * Math.PI / 180);
      p.ambientMaterial(0);
      p.scale(26);
      p.stroke(255, 255, 255); // Coloring the building
      p.model(cobb);
      // Text
      p.rotateX(180 * Math.PI / 180);
      p.rotateY(270 * Math.PI / 180);
      p.translate(0, -2, 0); // How high the text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(cobbT);
      p.plane(10);
      p.pop();

      // Gabrielle: South Hall ------
      p.push();
      p.translate(-500, 200, 23); 
      p.ambientMaterial(0);
      p.scale(13);
      p.stroke(255, 255, 255); // Coloring the building
      p.model(southHall);
      // Text
      p.rotateX(180 * Math. PI / 180);
      p.translate(0, -3, 0); // How high the text flies
      p.rotateX(90 * Math.PI / 180);
      p.rotateY(angle); // Keeps text facing screen
      p.texture(southHallT);
      p.plane(10);
      p.pop();

      // Gabrielle: Student Center ------
      p.push();
      p.translate(-20, -75, 0);
      p.rotateX(90 * Math.PI / 180); // Rotating the building to appropriate place
      p.rotateY(195 * Math.PI / 180); 
      p.ambientMaterial(0);
      p.scale(14);
      p.stroke(255, 255, 255); // Coloring the building
      p.model(studentCenter);
      // Text
      p.rotateX(180 * Math. PI / 180);
      p.rotateY(180 * Math. PI / 180);
      p.translate(0, -2, 0); // How high the text flies
      p.texture(studentCenterT);
      p.rotateY(angle); // Keeps text facing screen
      p.plane(10);
      p.pop();

      // Gabrielle: Keeny ------
      p.push();
      p.translate(265, -150, 0);
      p.rotateX(90 * Math.PI / 180); // Rotating the building to appropriate place
      p.rotateY(90 * Math.PI / 180);
      p.ambientMaterial(0);
      p.scale(13);
      p.stroke(255, 255, 255); // Coloring the building
      p.model(keeny);
      // Text
      p.rotateX(180 * Math.PI / 180);
      p.rotateY(90 * Math.PI / 180);
      p.translate(0, -2, 0); // How high text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(keenyT);
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
      p.rotateY(180 * Math. PI / 180);
      p.translate(0, -4, 0);
      p.rotateY(angle); // Keeps text facing screen
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
      p.rotateY(angle); // Keeps text facing screen
      p.texture(tolliverT);
      p.plane(10);
      p.pop();

      angle += 0.0027; 

      // Josh: Calculates fps and writes it to console
      var thisLoop = performance.now();
      var fps = Math.round(1000 / (thisLoop - lastLoop));
      lastLoop = thisLoop;
      //console.log(fps);
    };
  }
}
