import { Component, OnInit, Input } from '@angular/core';
import * as p5 from '../../../node_modules/p5/';
import { Router } from '@angular/router';
import { TabScrollerService } from '../tabscroller.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { uptime } from 'os';
import { NavigateRoutes } from '../sidebar/sidebar.component';
import { zip } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { SpeedControllerService } from '../speedcontroller.service';
import { ServicesDisplayComponent } from '../services-display/services-display.component';

var timesUp = false;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  @Input() autoTabBool: boolean;
  @Input() speedControllerVal: number;
  private p5;

  TabScroller$: boolean;
  SpeedController$: number;

  public cameraspeed: number;

  constructor(
    private router: Router,
    private tabscroller: TabScrollerService,
    private speedcontroller: SpeedControllerService,
) { }

  ngOnInit() {
    this.TabScroller$ = this.tabscroller.getScrollBool();
    this.SpeedController$ = this.speedcontroller.getSpeed();
    this.cameraspeed = this.speedcontroller.getSpeed();
    this.createCanvas();

    NavigateRoutes.getInstance().setCurrentRoute(''); //used to tell sidebar the current route

    setTimeout(() => {
      //autoscroll only if it is true and on this route
      if (this.tabscroller.getScrollBool() && NavigateRoutes.getInstance().getCurrentRoute()=='') {
        this.router.navigate(['users']);
      }
    }, 45000); // 2s
  }

  private createCanvas(){
    this.p5 = new p5(this.sketch);
    this.p5.setSpeedController(this.speedcontroller);
  }

  private sketch(p: any){

    // Variables controlling camera
    let angle = 0;
    let zoomAmount = 0;
    let maxZoom = 100;
    let minZoom = -460;
    var speed_controller;

    // Textures
    let buildingOn;
    let buildingOff;
    let concrete;
    let floor;
    let sunshine;

    // Models
    let road;

    let buildings:Building[];

    let sun;

    // Shaders
    var colorShader;
    var fogShader;

    // Josh: Added to track fps
    let lastLoop = performance.now();

  p.setSpeedController = (speedcontroller: any) => {
    speed_controller = speedcontroller;
  }

   p.preload = () => {

      // Initialize shaders
      colorShader = p.loadShader('../../assets/Map/Shaders/color.vert', '../../assets/Map/Shaders/color.frag');
      fogShader = p.loadShader('../../assets/Map/Shaders/fog.vert', '../../assets/Map/Shaders/fog.frag');

      // Initialize models
      sun = new Sun(p.loadModel('../../assets/Map/Models/sun.obj'));
      road = p.loadModel('../../assets/Map/Models/road.obj');

      // Initialize textures
      buildingOff = p.loadImage('../../assets/Map/Textures/buildingoff.png');
      buildingOn = p.loadImage('../../assets/Map/Textures/buildingon.png');
      sunshine = p.loadImage('../../assets/Map/Textures/sun.png');
      concrete = p.loadImage('../../assets/Map/Textures/road.png');
      floor = p.loadImage('../../assets/Map/Textures/floor.png');

      // Initialize buildings
      buildings = [
        // Building parameters are: NAME, X, Y, Z, rotX, rotY, rotZ, SCALE, MODEL, URL
        new Building("Wyly", 125, -290, 170, 90, 15, 180, 18, p.loadModel('../../assets/Map/Models/wyly.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.2:80/"),
        new Building("Nethkin", 510, 130, 0, 90, 180, 0, 14, p.loadModel('../../assets/Map/Models/nethkin.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.3:80/"),
        new Building("Bogard", 380, -20, 30, 270, 270, 0, 18, p.loadModel('../../assets/Map/Models/bogard.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.4:80/"),
        new Building("Keeny", 265, -150, 30, 270, 90, 0, 13, p.loadModel('../../assets/Map/Models/keeny.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.5:80/"),
        new Building("Carson Taylor", 315, 190, 23, -90, 0, 0, 16, p.loadModel('../../assets/Map/Models/carsonTaylor.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.6:80/"),
        new Building("Hale", -270, -290, 0, -90, 0, 180, 10, p.loadModel('../../assets/Map/Models/hale.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.7:80/"),
        new Building("GTM", -50, -325, 35, 90, -174, 180, 25, p.loadModel('../../assets/Map/Models/gtm.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.8:80/"),
        new Building("Engineering Annex", 410, 150, 23, -90, 0, 0, 11, p.loadModel('../../assets/Map/Models/engineeringAnnex.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.9:80/"),
        new Building("Howard", 155, -40, 0, -90, 0, 180, 12, p.loadModel('../../assets/Map/Models/howard.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.10:80/"),
        new Building("Student Center", -20, -55, 30, 90, 15, 180, 12, p.loadModel('../../assets/Map/Models/studentCenter.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.11:80/"),
        new Building("Tolliver", -130, 40, 23, -90, 163, 0, 15, p.loadModel('../../assets/Map/Models/tolliver.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.12:80/"),
        new Building("Woodard", -325, -100, 20, 270, 90, 0, 13, p.loadModel('../../assets/Map/Models/woodard.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.13:80/"),
        new Building("COBB", 535, -200, 55, 270, 0, 0, 26, p.loadModel('../../assets/Map/Models/cobb.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.14:80/"),
        new Building("Band Building", -320, 10, 23, -90, 0, 0, 11, p.loadModel('../../assets/Map/Models/bandBuilding.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.15:80/"),
        new Building("IFM", -430, 320, 0, -90, 0, -180, 13, p.loadModel('../../assets/Map/Models/ifm.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.16:80/"),
        new Building("South Hall", -500, 200, 39, 270, 0, 0, 12, p.loadModel('../../assets/Map/Models/southHall.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.17:80/"),
        new Building("Power Plant", -240, 170, 23, -90, 90, 0, 12, p.loadModel('../../assets/Map/Models/powerPlant.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.18:80/"),
        new Building("University Hall", 300, -290, 30, 90, 195, 180, 23, p.loadModel('../../assets/Map/Models/cobb.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), "http://10.16.17.19:80/"), // Same model as COBB
      ];
    };

    p.setup = () => {
      var cnv = p.createCanvas(window.innerWidth * 0.765, window.innerHeight, p.WEBGL);
      cnv.parent('myContainer');
      cnv.mouseWheel(zoom);
      // Josh: Zoom in and out of the map using the scroll wheel
      function zoom(event){
        if (event.deltaY < 0) {
          if(zoomAmount < maxZoom){
            zoomAmount += 20;
          }
        }
        else {
          if(zoomAmount > minZoom){
            zoomAmount -= 20;
          }
        }
      }
    };

    p.draw = () => {

      // Draw background color
      // Josh: Changed background color to fluctuate between our color scheme
      var r = 242 - Math.abs(242 * p.sin(angle * Math.PI / 180));
      var g = 13 + Math.abs(242 * p.sin(angle * Math.PI / 180));
      var b = 255;
      p.background(r, g, b);

      //colorShader.setUniform('angle', angle * 3);
      //colorShader.setUniform('resolution', [1000, 1000]);
      //p.shader(colorShader);

      // Move camera
      p.noStroke(0);
      p.rotateX(1 + zoomAmount / 500); // Josh: Rotate the camera based on zoom. When zoomed all the way out, camera faces down, when zoomed all the way in, camera faces up.
      p.rotateY(0);

      p.rotateZ(angle * speed_controller.getSpeed() * Math.PI / 180);

      p.translate(0, 0, zoomAmount); // Josh: Zoom!
      p.noStroke();

      // Draw ground & road
      p.texture(floor);
      p.box(1152, 1152, 2);

      p.push();
      p.scale(115);
      p.translate(0, 0, 0.02);
      p.rotateX(270 * Math.PI/180);
      p.texture(concrete);
      p.model(road);
      p.pop();

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
        //b.ping();
        if(dict[b.getName()]){
          p.texture(buildingOn);
        }
        else{
          p.texture(buildingOff);
        }
        // Model
        p.model(b.getModel());
        p.pop();
      }
      // Later change to toggle button
      if(true){
        for(let b of buildings){
          p.push();
          // Get name into position
          p.translate(b.getX(), b.getY(), b.getZ() + 50);
          p.rotateX(90 * Math.PI/180);
          p.rotateY(angle * 20 * Math.PI/180);
          // Scale
          p.scale(30);
          // Texture
          //b.ping();
          if(dict[b.getName()]){
            p.texture(buildingOn);
          }
          else{
            p.texture(buildingOff);
          }
          // Model
          p.model(b.getNameModel());
          p.pop();
        }
      }

      // PING STUFF
      if (timesUp){
        buildings[0].ping() //Wyly
        buildings[1].ping();  //Nethkin
        buildings[2].ping(); //Bogard
        buildings[3].ping();  //Keeny
        buildings[4].ping();  //Carson Taylor
        buildings[5].ping(); //Hale
        buildings[6].ping();  //GTM
        buildings[7].ping();  //Engineering Annex
        buildings[8].ping(); //Howard
        buildings[9].ping(); //Student Center
        buildings[10].ping();  //Tolliver
        buildings[11].ping(); //Woodard
        buildings[12].ping();  //COBB
        buildings[13].ping(); //Band Building
        buildings[14].ping(); //IFM
        buildings[15].ping();  //South Hall
        buildings[16].ping(); //Power Plant
        buildings[17].ping(); //University Hall
        timesUp = false;
        //ServicesDisplayComponent.changeMyVariable("Poop Canoe");
      }  //Ping for that building

      // Josh: Lighting based on sun height
      p.ambientLight(210 + 40 * (sun.getZ()/1800));
      // sun max height = 1798
      // sun min height = -1801

      // Josh: Sun stuff
      p.push();
      sun.update(angle);
      p.pointLight(sun.getColor_R(), sun.getColor_G(), sun.getColor_B(), sun.getX(), sun.getY(), sun.getZ());

      p.translate(sun.getX(), sun.getY(), sun.getZ());
      p.rotateX(-90 * Math.PI/180);
      p.scale(250);
      p.texture(sunshine);
      p.model(sun.getModel());
      p.pop();

      p.shader(fogShader);

      angle += 0.05;
      if(angle == 360){
        angle = 0;
      }

      // Josh: Calculates fps and writes it to console
      var thisLoop = performance.now();
      var fps = Math.round(1000 / (thisLoop - lastLoop));
      lastLoop = thisLoop;
      //console.log(fps);
    };
  }

  public getDict() {
    return dict;
  }
}

var clearTimer = setInterval(function(){
  timesUp = true;
}, 20 * 1000);

var dict = {
  "Wyly": true,
  "Nethkin": true,
  "Bogard": true,
  "Keeny": true,
  "Carson Taylor": true,
  "Hale": true,
  "GTM": true,
  "Engineering Annex": true,
  "Howard": true,
  "Student Center": true,
  "Tolliver": true,
  "Woodard": true,
  "COBB": true,
  "Band Building": true,
  "IFM": true,
  "South Hall": true,
  "Power Plant": true,
  "University Hall": true
};

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
  nameModel: any;
  scale: number;
  url: string;
  // Textures (on & off) will be stored as global variables since all buildings share the same textures

  constructor(n: string, _x: number, _y: number, _z: number, _rx: number, _ry: number, _rz: number, s: number, m: any, nm: any, _url: string) {
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
      this.nameModel = nm;
      this.url = _url;
  }

  // Getters
  getName(){
    return this.name;
  }
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
  getNameModel(){
    return this.nameModel;
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
    var bn = this.name;
    let ping = new XMLHttpRequest();;
    ping.open("GET", this.url, true);
    ping.onreadystatechange = function(){
      //console.log(ping)
      if(ping.status == 200){
        dict[bn] = true;
        console.log(`${bn} is connected!`);
      }
      ping.onerror = function(e){
        dict[bn] = false;
        console.log(`${bn} is down!`);
      };
    };

    ping.send();
    /*if(didPing){
      return true;
    }
    else{
      return false;
    }*/
  }
}

class Sun{

  init_x: number;
  init_y: number;
  init_z: number;

  x: number;
  y: number;
  z: number;
  distance_x: number;
  distance_z: number;
  counter: number;
  phase: number;

  color_r: number;
  color_g: number;
  color_b: number;

  model: any;

  constructor(m: any){
    this.distance_x = 0.6;
    this.distance_z = 1;
    this.counter = 0;
    this.phase = 1;
    this.color_r = 255;
    this.color_g = 0;
    this.color_b = 0;

    this.init_x = 1100;
    this.init_y = 0;
    this.init_z = 0;

    this.x = this.init_x;
    this.y = this.init_y;
    this.z = this.init_z;

    this.model = m;
  }

  update(angle: number){
    this.phase = 2 + Math.floor(angle / 90);
    if(this.phase > 4){
      this.phase = this.phase - 4;
    }

    if(this.phase == 3){
      this.x -= this.distance_x;
      this.z += this.distance_z;
    }
    else if(this.phase == 1){
      this.x += this.distance_x;
      this.z -= this.distance_z;
    }
    else if(this.phase == 2){
      this.x -= this.distance_x;
      this.z -= this.distance_z;
    }
    else if(this.phase == 4){
      this.x += this.distance_x;
      this.z += this.distance_z;
    }
  }

  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  getZ(){
    return this.z;
  }
  getColor_R(){
    return this.color_r;
  }
  getColor_G(){
    return this.color_g;
  }
  getColor_B(){
    return this.color_b;
  }
  getModel(){
    return this.model;
  }
}
