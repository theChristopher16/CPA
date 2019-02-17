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

    let s;

    let angle = 0;

    let buildingOn;
    let buildingOff;
    let floor;

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
    let woodard;
    let woodardT;
    let bogard;
    let bogardT;
    let carsonTaylor;
    let carsonTaylorT;
    let hale;
    let haleT;
    let engineeringAnnex;
    let engineeringAnnexT;
    let bandBuilding;
    let bandBuildingT;
    let powerPlant;
    let powerPlantT;
    let ifm;
    let ifmT;
    let university;
    let universityT;
    let howard;
    let howardT;

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
      
      s = p.loadShader('../../assets/Map/Shaders/colorfrag.glsl', '../../assets/Map/Shaders/colorvert.glsl');

      // Building and floor textures
      buildingOff = p.loadImage('../../assets/Map/Textures/buildingoff.png');
      buildingOn = p.loadImage('../../assets/Map/Textures/buildingon.png');
      floor = p.loadImage('../../assets/Map/Textures/mapglow.png');

      // Building models
      nethkin = p.loadModel('../../assets/Map/Models/nethkin.obj')
      tolliver = p.loadModel('../../assets/Map/Models/tolliver.obj')
      wyly = p.loadModel('../../assets/Map/Models/wyly.obj')
      southHall = p.loadModel('../../assets/Map/Models/southHall.obj')
      studentCenter = p.loadModel('../../assets/Map/Models/studentCenter.obj')
      gtm = p.loadModel('../../assets/Map/Models/gtm.obj')
      cobb = p.loadModel('../../assets/Map/Models/cobb.obj')
      keeny = p.loadModel('../../assets/Map/Models/keeny.obj')
      woodard = p.loadModel('../../assets/Map/Models/woodard.obj')
      bogard = p.loadModel('../../assets/Map/Models/bogard.obj')
      carsonTaylor = p.loadModel('../../assets/Map/Models/carsonTaylor.obj');
      engineeringAnnex = p.loadModel('../../assets/Map/Models/engineeringAnnex.obj');
      bandBuilding = p.loadModel('../../assets/Map/Models/bandBuilding.obj');
      powerPlant = p.loadModel('../../assets/Map/Models/powerPlant.obj');
      hale = p.loadModel('../../assets/Map/Models/hale.obj');
      university = p.loadModel('../../assets/Map/Models/cobb.obj');
      ifm = p.loadModel('../../assets/Map/Models/ifm.obj');
      howard = p.loadModel('../../assets/Map/Models/howard.obj');

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
      
      p.rotateZ(angle);
      p.noStroke();

      // Draw ground
      //p.shader(s);
      p.texture(floor);
      p.box(1152, 1152, 2);
      //p.resetShader();
      // Gabrielle: Wyly ------
      p.push();
      p.translate(125, -290, 0);
      p.rotateX(90 * Math.PI/180); // Rotating building to appropriate place
      p.rotateY(15 * Math.PI/180);
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

      if(didPing){
        p.stroke(1, 255, 1)
        p.texture(buildingOn);
      }
      else{
        p.stroke(255, 255, 255);
        p.texture(buildingOff);
      }

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
      p.scale(25);
      
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

      // Maddi: GTM ping stuff
      if(didPing){
        p.stroke(1, 255, 1)
        p.texture(buildingOn);
      }
      else{
        p.stroke(255, 255, 255);
        p.texture(buildingOff);
      }

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
      p.scale(26);
      p.stroke(255, 255, 255); // Coloring the building
      p.texture(buildingOn);
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
      p.scale(13);
      p.stroke(255, 255, 255); // Coloring the building
      p.texture(buildingOn);
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
      p.scale(14);
      p.stroke(255, 255, 255); // Coloring the building
      p.texture(buildingOn);
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
      p.scale(13);
      p.stroke(255, 255, 255); // Coloring the building
      p.texture(buildingOn);
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
      p.scale(13);
      p.stroke(255, 255, 255); // Coloring the building
      p.texture(buildingOn);
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
      p.scale(18);
      p.stroke(255, 255, 255); // Coloring the building
      p.texture(buildingOn);
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
      p.scale(14);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.texture(buildingOn);
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
      p.scale(15);
      p.texture(buildingOn);
      //p.stroke(255, 255, 255); // Colors lines of shape
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
      p.scale(16);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.texture(buildingOn);
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
      p.scale(11);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.texture(buildingOn);
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
      p.scale(11);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.texture(buildingOn);
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
      p.scale(12);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.texture(buildingOff);
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
      p.scale(10);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.texture(buildingOn);
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
      p.scale(12);
      p.stroke(255, 255, 255); // Colors lines of shape
      p.texture(buildingOn);
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
      p.scale(23);
      p.stroke(255, 255, 255); // Coloring the building
      p.texture(buildingOn);
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
      p.scale(23);
      p.stroke(255, 255, 255); // Coloring the building
      p.texture(buildingOn);
      p.model(ifm);
      // Text
      //p.rotateX(90 * Math.PI / 180);
      p.rotateY(180 * Math.PI / 180);
      p.translate(0, -1, 0); // How high the text flies
      p.rotateY(angle); // Keeps text facing screen
      p.texture(ifmT);
      p.plane(2, 1);
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
