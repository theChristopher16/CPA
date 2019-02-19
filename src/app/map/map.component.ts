import { Component, OnInit, Input } from '@angular/core';
import * as p5 from '../../../node_modules/p5/';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { TabScrollerService } from '../tabscroller.service';
=======
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { uptime } from 'os';
>>>>>>> frontEnd

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() autoTabBool: boolean;
  private p5;

  TabScroller$: boolean;

  constructor(
    private router: Router,
    private tabscroller: TabScrollerService
  //  private p5: p5
) { }

  ngOnInit() {
    this.TabScroller$ = this.tabscroller.getScrollBool();

    this.createCanvas();

    setTimeout(() => {
      if (this.TabScroller$) {
        this.router.navigate(['users']);
      }      
    }, 45000); // 2s
  }

  private createCanvas(){
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: any){

    let s;

    let angle = 0;

    let buildingOn;
    let buildingOff;
    let floor;

    let buildings:Building[];  

    let building;

    // Josh: Added to track fps
    let lastLoop = performance.now();

   p.preload = () => {
<<<<<<< HEAD
      green = p.loadImage('../../assets/Map/green.jpg');
      blue = p.loadImage('../../assets/Map/blue.png');
      red = p.loadImage('../../assets/Map/red.png');
      floor = p.loadImage('../../assets/Map/floor.png');
      orange = p.loadImage('../../assets/Map/orange.png');
      yellow = p.loadImage('../../assets/Map/yellow.png');

      //floor = p.loadImage('../../assets/Map/map.png');
      nethkin = p.loadModel('../../assets/Map/nethkin.obj')
      tolliver = p.loadModel('../../assets/Map/tolliver.obj')
      wyly = p.loadModel('../../assets/Map/wyly.obj')
      southHall = p.loadModel('../../assets/Map/southHall.obj')
      studentCenter = p.loadModel('../../assets/Map/studentCenter.obj')
      gtm = p.loadModel('../../assets/Map/gtm.obj')
      cobb = p.loadModel('../../assets/Map/cobb.obj')
      keeny = p.loadModel('../../assets/Map/keeny.obj')
      woodard = p.loadModel('../../assets/Map/woodard3.obj')
      bogard = p.loadModel('../../assets/Map/bogard2.obj')
      carsonTaylor = p.loadModel('../../assets/Map/carsonTaylor.obj');
      engineeringAnnex = p.loadModel('../../assets/Map/engineeringAnnex.obj');
      bandBuilding = p.loadModel('../../assets/Map/bandBuilding.obj');
      powerPlant = p.loadModel('../../assets/Map/powerPlant.obj');
      hale = p.loadModel('../../assets/Map/hale.obj');
      university = p.loadModel('../../assets/Map/university.obj');
      ifm = p.loadModel('../../assets/Map/ifm.obj');
      howard = p.loadModel('../../assets/Map/howard.obj');

     // Josh: Initialize 3D text labels here
      nethkinT = p.createGraphics(90, 30); // Nethken text
      nethkinT.fill(255);
      nethkinT.background(30, 30, 30);
      nethkinT.textAlign(p.CENTER);
      nethkinT.textSize(20);
      nethkinT.text("Nethken", 45, 20);

      tolliverT = p.createGraphics(100, 30); // Tolliver text
      tolliverT.fill(255);
      tolliverT.background(30, 30, 30);
      tolliverT.textAlign(p.CENTER);
      tolliverT.textSize(20)
      tolliverT.text("Tolliver", 50, 20);

      wylyT = p.createGraphics(50, 30); // Wyly text
      wylyT.fill(255);
      wylyT.background(30, 30, 30);
      wylyT.textAlign(p.CENTER);
      wylyT.textSize(20);
      wylyT.text("Wyly", 25, 20);

      southHallT = p.createGraphics(140, 30); // South Hall text
      southHallT.fill(255);
      southHallT.background(30, 30, 30);
      southHallT.textAlign(p.CENTER);
      southHallT.textSize(20);
      southHallT.text("South Hall", 70, 20);

      studentCenterT = p.createGraphics(140, 30); // Student Center text
      studentCenterT.fill(255);
      studentCenterT.background(30, 30, 30);
      studentCenterT.textAlign(p.CENTER);
      studentCenterT.textSize(20);
      studentCenterT.text("Student Center", 70, 20);

      gtmT = p.createGraphics(50, 30); // GTM text
      gtmT.fill(255);
      gtmT.background(30, 30, 30);
      gtmT.textAlign(p.CENTER);
      gtmT.textSize(20);
      gtmT.text("GTM", 25, 20);

      cobbT = p.createGraphics(70, 30); // COBB text
      cobbT.fill(255);
      cobbT.background(30, 30, 30);
      cobbT.textAlign(p.CENTER);
      cobbT.textSize(20);
      cobbT.text("COBB", 35, 20);

      keenyT = p.createGraphics(130, 30); // Keeny text
      keenyT.fill(255);
      keenyT.background(30, 30, 30);
      keenyT.textAlign(p.CENTER);
      keenyT.textSize(20);
      keenyT.text("Keeny Hall", 65, 20);

      woodardT = p.createGraphics(90, 30); // Woodard text
      woodardT.fill(255);
      woodardT.background(30, 30, 30);
      woodardT.textAlign(p.CENTER);
      woodardT.textSize(20);
      woodardT.text("Woodard", 45, 20);

      bogardT= p.createGraphics(90, 30); // Bogard text
      bogardT.fill(255);
      bogardT.background(30, 30, 30);
      bogardT.textAlign(p.CENTER);
      bogardT.textSize(20);
      bogardT.text("Bogard", 45, 20);

      carsonTaylorT = p.createGraphics(130, 30); // Carson Taylor text
      carsonTaylorT.fill(255);
      carsonTaylorT.background(30, 30, 30);
      carsonTaylorT.textAlign(p.CENTER);
      carsonTaylorT.textSize(20);
      carsonTaylorT.text("Carson Taylor", 65, 20);

      engineeringAnnexT = p.createGraphics(200, 30); // Engineering Annex text
      engineeringAnnexT.fill(255);
      engineeringAnnexT.background(30, 30, 30);
      engineeringAnnexT.textAlign(p.CENTER);
      engineeringAnnexT.textSize(20);
      engineeringAnnexT.text("Engineering Annex", 100, 20);

      bandBuildingT = p.createGraphics(170, 30); // Band Building text
      bandBuildingT.fill(255);
      bandBuildingT.background(30, 30, 30);
      bandBuildingT.textAlign(p.CENTER);
      bandBuildingT.textSize(20);
      bandBuildingT.text("Band Building", 85, 20);

      powerPlantT = p.createGraphics(170, 30); // Power Plant text
      powerPlantT.fill(255);
      powerPlantT.background(30, 30, 30);
      powerPlantT.textAlign(p.CENTER);
      powerPlantT.textSize(20);
      powerPlantT.text("Power Plant", 85, 20);

      haleT = p.createGraphics(50, 30); // Hale text
      haleT.fill(255);
      haleT.background(30, 30, 30);
      haleT.textAlign(p.CENTER);
      haleT.textSize(20);
      haleT.text("Hale", 25, 20);

      universityT = p.createGraphics(140, 30); // University Hall text
      universityT.fill(255);
      universityT.background(30, 30, 30);
      universityT.textAlign(p.CENTER);
      universityT.textSize(20);
      universityT.text("University Hall", 70, 20);

      ifmT = p.createGraphics(50, 30); // IFM text
      ifmT.fill(255);
      ifmT.background(30, 30, 30);
      ifmT.textAlign(p.CENTER);
      ifmT.textSize(20);
      ifmT.text("IFM", 25, 20);

      howardT = p.createGraphics(140, 30); // Howard text
      howardT.fill(255);
      howardT.background(30, 30, 30);
      howardT.textAlign(p.CENTER);
      howardT.textSize(20);
      howardT.text("Howard", 70, 20);
=======
      
      s = p.loadShader('../../assets/Map/Shaders/colorfrag.glsl', '../../assets/Map/Shaders/colorvert.glsl');

      // Building and floor textures
      buildingOff = p.loadImage('../../assets/Map/Textures/buildingoff.png');
      buildingOn = p.loadImage('../../assets/Map/Textures/buildingon.png');
      floor = p.loadImage('../../assets/Map/Textures/mapglow.png');

      // Initialize buildings
      buildings = [
        // Building parameters are: NAME, X, Y, Z, rotX, rotY, rotZ, SCALE, MODEL, URL
        new Building("Band Building", -320, 10, 23, -90, 0, 0, 11, p.loadModel('../../assets/Map/Models/bandBuilding.obj'), "http://192.168.1.9:80/"),
        new Building("Bogard", 380, -20, 20, 270, 270, 0, 18, p.loadModel('../../assets/Map/Models/bogard.obj'), "http://192.168.1.9:80/"),
        new Building("Carson Taylor", 315, 190, 23, -90, 0, 0, 16, p.loadModel('../../assets/Map/Models/carsonTaylor.obj'), "http://192.168.1.9:80/"),
        new Building("COBB", 535, -200, 0, 90, 270, 0, 26, p.loadModel('../../assets/Map/Models/cobb.obj'), "http://192.168.1.9:80/"),
        new Building("Engineering Annex", 410, 150, 23, -90, 0, 0, 11, p.loadModel('../../assets/Map/Models/engineeringAnnex.obj'), "http://192.168.1.9:80/"),
        new Building("GTM", -50, -325, 0, 90, -174, 0, 25, p.loadModel('../../assets/Map/Models/gtm.obj'), "http://192.168.1.7:80/"),
        new Building("Hale", -270, -290, 0, -90, 0, 180, 10, p.loadModel('../../assets/Map/Models/hale.obj'), "http://192.168.1.9:80/"),
        new Building("Howard", 155, -40, 0, -90, 0, 180, 12, p.loadModel('../../assets/Map/Models/howard.obj'), "http://192.168.1.9:80/"),
        new Building("IFM", -430, 320, 0, -90, 0, -180, 13, p.loadModel('../../assets/Map/Models/ifm.obj'), "http://192.168.1.9:80/"),
        new Building("Keeny", 265, -150, 0, 90, 90, 0, 13, p.loadModel('../../assets/Map/Models/keeny.obj'), "http://192.168.1.9:80/"),
        new Building("Nethkin", 510, 130, 0, 90, 180, 0, 14, p.loadModel('../../assets/Map/Models/nethkin.obj'), "http://192.168.1.9:80/"),
        new Building("Power Plant", -240, 170, 23, -90, 90, 0, 12, p.loadModel('../../assets/Map/Models/powerPlant.obj'), "http://192.168.1.9:80/"),
        new Building("South Hall", -500, 200, 23, 0, 0, 0, 13, p.loadModel('../../assets/Map/Models/southHall.obj'), "http://192.168.1.9:80/"),
        new Building("Student Center", -20, -75, 0, 90, 195, 0, 14, p.loadModel('../../assets/Map/Models/studentCenter.obj'), "http://192.168.1.9:80/"),
        new Building("Tolliver", -130, 40, 23, -90, 163, 0, 15, p.loadModel('../../assets/Map/Models/tolliver.obj'), "http://192.168.1.9:80/"),
        new Building("University Hall", 300, -290, 0, 90, 195, 0, 23, p.loadModel('../../assets/Map/Models/cobb.obj'), "http://192.168.1.9:80/"),
        new Building("Woodard", -325, -100, 20, 270, 90, 0, 13, p.loadModel('../../assets/Map/Models/woodard.obj'), "http://192.168.1.9:80/"),
        new Building("Wyly", 125, -290, 0, 90, 15, 0, 18, p.loadModel('../../assets/Map/Models/wyly.obj'), "http://192.168.1.9:80/")
      ]; 
      
>>>>>>> frontEnd
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
      p.background(r, g, b);

      // Move camera
      p.noStroke(0);
      p.rotateX(1);
      p.rotateY(0);
<<<<<<< HEAD

=======
>>>>>>> frontEnd
      p.rotateZ(angle);
      p.noStroke();

      // Normal material is for debugging
      //p.normalMaterial();
      p.texture(floor);
      p.box(4000, 4000, 10);

      /*p.noStroke();
      p.translate(300, -190);
      p.texture(red);
      p.box(150, 150, 200);
      // Draw ground
      //p.shader(s);
      p.texture(floor);
      p.box(1152, 1152, 2);
<<<<<<< HEAD

      // Gabrielle: Wyly ------
      p.push();
      p.translate(125, -290, 0);
      p.rotateX(90 * Math.PI/180); // Rotating building to appropriate place
      p.rotateY(15 * Math.PI/180);
      p.ambientMaterial(0);
      p.scale(18);

      // Maddi: Wyly ping stuff
      if(didPing2){
        p.stroke(0, 100, 100)
      }
      else{
        p.stroke(255, 255, 255); // Coloring the building
      }

      p.noStroke();
      p.translate(350, 280);
      p.texture(blue);
      p.box(150, 150, 450);

      p.noStroke();
      p.translate(10, -800);
      p.texture(red);
      p.box(150, 150, 450);*/

      

      p.noStroke();
      p.translate(100, 0);
      p.texture(blue);
      p.box(150, 150, 450);
      Wylyurl = "http://192.168.1.9:80/"
      ping2 = new XMLHttpRequest();
      ping2.open("GET", Wylyurl, true);
      ping2.onreadystatechange = function(){
        if(ping2.readyState != 1){
          //console.log(ping2.status, ping2.readyState)
        }
        if(ping2.status == 200){
          didPing2 = true;
          //console.log("test statement");
        }
        ping2.onerror = function(e){
          didPing2 = false;
        };
      };

      ping2.send();
      p.model(wyly);
      // Text
      p.rotateX(180 * Math. PI / 180); // Gets the text facing the camera
      p.translate(0, -11.5, 0); // How high the text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(wylyT);
      p.plane(3, 2);
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
        p.stroke(255, 255, 255);
      }
      else{
        p.stroke(255, 255, 255); // Coloring the building
      }

      GTMurl = "http://192.168.1.7:80/"
      ping = new XMLHttpRequest();
      ping.open("GET", GTMurl, true);
      ping.onreadystatechange = function(){
        if(ping.readyState != 1){
          //console.log(ping.status, ping.readyState)
        }
        if(ping.status == 200){
          didPing = true;
          //console.log("test statement");
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
      p.translate(0, -3, 0); // How high the text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(gtmT);
      p.plane(2, 1);
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
      p.translate(0, -3, 0); // How high the text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(cobbT);
      p.plane(2, 1);
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
      p.translate(0, -1, -3); // How high the text flies
      p.rotateX(90 * Math.PI / 180);
      p.rotateY(angle); // Keeps text facing screen
      p.texture(southHallT);
      p.plane(4, 2);
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
      p.translate(0, -3, 0); // How high the text flies
      p.texture(studentCenterT);
      p.rotateY(angle); // Keeps text facing screen
      p.plane(5, 2);
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
      p.translate(0, -4, 0); // How high text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(keenyT);
      p.plane(5, 2);
      p.pop();

      // Gabrielle: Woodard ------
      p.push();
      p.translate(-325, -100, 20);
      p.rotateX(270 * Math.PI / 180); // Rotating the building to appropriate place
      p.rotateY(90 * Math.PI / 180);
      p.ambientMaterial(0);
      p.scale(13);
      p.stroke(255, 255, 255); // Coloring the building
      p.model(woodard);
      // Text
      p.rotateX(0 * Math.PI / 180);
      p.rotateY(280 * Math.PI / 180);
      p.translate(0, -3, 0); // How high the text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(woodardT);
      p.plane(7, 2);
      p.pop();

      // Gabrielle: Bogard ------
      p.push();
      p.translate(380, -20, 20);
      p.rotateX(270 * Math.PI / 180); // Rotating the building to appropriate place
      p.rotateY(270 * Math.PI / 180);
      p.rotateZ(0 * Math.PI / 180);
      p.ambientMaterial(0);
      p.scale(18);
      p.stroke(255, 255, 255); // Coloring the building
      p.model(bogard);
      // Text
      p.rotateX(0 * Math.PI / 180);
      p.rotateY(90 * Math.PI / 180);
      p.translate(0, -3, 0); // How high the text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(bogardT);
      p.plane(2, 1);
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
      p.plane(3, 2);
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
      p.translate(0, -2, 0);
      p.rotateY(angle); // Keeps text facing screen
      p.rotateY(17 * Math.PI/180);
      p.texture(tolliverT);
      p.plane(3, 2);
      p.pop();

      // Josh: Carson Taylor
      p.push();
      p.translate(315, 190, 23);
      p.rotateX(-90 * Math.PI/180); // Fixes the 90 degree flip problem from Blender
      p.ambientMaterial(0);
      p.scale(16);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.model(carsonTaylor);
      p.rotateX(180 * Math.PI / 180);
      p.rotateY(180 * Math.PI / 180);
      p.rotateZ(180 * Math.PI / 180);
      p.translate(0, -2, 0);
      p.rotateY(angle); // Keeps text facing screen
      p.texture(carsonTaylorT);
      p.plane(3, 2);
      p.pop();

      // Josh: Engineering Annex
      p.push();
      p.translate(410, 150, 23);
      p.rotateX(-90 * Math.PI/180); // Fixes the 90 degree flip problem from Blender
      p.ambientMaterial(0);
      p.scale(11);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.model(engineeringAnnex);
      p.rotateX(180 * Math.PI / 180);
      p.rotateY(180 * Math.PI / 180);
      p.rotateZ(180 * Math.PI / 180);
      p.translate(0, -2, 0);
      p.rotateY(angle); // Keeps text facing screen
      p.texture(engineeringAnnexT);
      p.plane(5, 3);
      p.pop();

      // Josh: Band Building
      p.push();
      p.translate(-320, 10, 23);
      p.rotateX(-90 * Math.PI/180); // Fixes the 90 degree flip problem from Blender
      p.ambientMaterial(0);
      p.scale(11);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.model(bandBuilding);
      p.rotateX(180 * Math.PI / 180);
      p.rotateY(180 * Math.PI / 180);
      p.rotateZ(180 * Math.PI / 180);
      p.translate(0, -2, 0);
      p.rotateY(angle); // Keeps text facing screen
      p.texture(bandBuildingT);
      p.plane(5, 3);
      p.pop();

      // Josh: Power Plant
      p.push();
      p.translate(-240, 170, 23);
      p.rotateX(-90 * Math.PI/180); // Fixes the 90 degree flip problem from Blender
      p.rotateY(90 * Math.PI/180);
      p.ambientMaterial(0);
      p.scale(12);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.model(powerPlant);
      p.rotateX(180 * Math.PI / 180);
      p.rotateY(180 * Math.PI / 180);
      p.rotateZ(180 * Math.PI / 180);
      p.translate(0, -2, 0);
      p.rotateY(angle); // Keeps text facing screen
      p.rotateY(-90 * Math.PI/180);
      p.texture(powerPlantT);
      p.plane(5, 3);
      p.pop();

      // Josh: Hale
      p.push();
      p.translate(-270, -290, 0);
      p.rotateX(-90 * Math.PI/180); // Fixes the 90 degree flip problem from Blender
      p.rotateZ(180 * Math.PI / 180);
      p.ambientMaterial(0);
      p.scale(10);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.model(hale);
      p.rotateX(180 * Math.PI / 180);
      p.rotateY(180 * Math.PI / 180);
      p.translate(0, -9, 0);
      p.rotateY(angle); // Keeps text facing screen
      p.texture(haleT);
      p.plane(5, 3);
      p.pop();

      // Josh: Howard
      p.push();
      p.translate(155, -40, 0);
      p.rotateX(-90 * Math.PI/180); // Fixes the 90 degree flip problem from Blender
      p.rotateZ(180 * Math.PI / 180);
      p.ambientMaterial(0);
      p.scale(12);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.model(howard);
      p.rotateX(180 * Math.PI / 180);
      p.rotateY(180 * Math.PI / 180);
      p.translate(0, -5, 0);
      p.rotateY(angle); // Keeps text facing screen
      p.texture(howardT);
      p.plane(5, 3);
      p.pop();

      // Maddi: University Hall
      p.push();
      p.translate(300, -290, 0);
      p.rotateX(90 * Math.PI / 180); // Rotating the building to appropriate place
      p.rotateY(195 * Math.PI / 180);
      p.ambientMaterial(0);
      p.scale(23);
      p.stroke(255, 255, 255); // Coloring the building
      p.model(university);
      // Text
      p.rotateX(180 * Math.PI / 180);
      p.rotateY(180 * Math.PI / 180);
      p.translate(0, -3, 0); // How high the text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(universityT);
      p.plane(2, 1);
      p.pop();

      // Maddi: IFM
      p.push();
      p.translate(-380, 360, 30);
      p.rotateX(90 * Math.PI / 180); // Rotating the building to appropriate place
      p.rotateZ(-180 * Math.PI / 180); // Somehow made the model upside down lol
      p.ambientMaterial(0);
      p.scale(23);
      p.stroke(255, 255, 255); // Coloring the building
      p.model(ifm);
      // Text
      //p.rotateX(90 * Math.PI / 180);
      p.rotateY(180 * Math.PI / 180);
      p.translate(0, -1, 0); // How high the text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(ifmT);
      p.plane(2, 1);
      p.pop();
=======
      //p.resetShader();

      // Draw buildings
      for(let b of buildings){
        p.push();
        // Get building into position
        p.translate(b.getX(), b.getY(), b.getZ());
        // Rotate building
        p.rotateX(b.getRX());
        p.rotateY(b.getRY());
        p.rotateZ(b.getRZ());
        // Scale
        p.scale(b.getScale());
        // Texture
        if(b.isUp()){
          p.texture(buildingOn);
        }
        else{
          p.texture(buildingOff);
        }
        // Model
        p.model(b.getModel());
        p.pop();
      }
>>>>>>> frontEnd

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
    };
  }
}

// Josh: Made building class to refactor code
class Building{
  name: string;
  x: number; // Position values
  y: number;
  z: number;
  rx: number; // Rotation values
  ry: number;
  rz: number;
  up: boolean;
  model: any;
  scale: number;
  url: string;
  // Textures (on & off) will be stored as global variables since all buildings share the same textures

  constructor(n: string, _x: number, _y: number, _z: number, _rx: number, _ry: number, _rz: number, s: number, m: any, _url: string) {
      this.name = n;
      this.x = _x;
      this.y = _y;
      this.z = _z;
      this.rx = _rx * Math.PI / 180;
      this.ry = _ry * Math.PI / 180;
      this.rz = _rz * Math.PI / 180;
      this.up = false;
      this.scale = s;
      this.model = m;
      this.url = _url;
  }

  // Getters
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  getZ(){
    return this.z;
  }
  getRX(){
    return this.rx;
  }
  getRY(){
    return this.ry;
  }
  getRZ(){
    return this.rz;
  }
  getModel(){
    return this.model;
  }
  getScale(){
    return this.scale;
  }
  isUp(){
    return this.up;
  }

  // Setters
  setUp(b: boolean){
    this.up = b;
  }

  // Functionality
  ping(){
    let ping = new XMLHttpRequest();
    let didPing = false;
    ping.open("GET", this.url, true);
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

    this.up = didPing;
    ping.send();
  }
}