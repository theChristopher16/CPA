import { Component, OnInit, Input } from '@angular/core';
import * as p5 from '../../../node_modules/p5/';
import { Router } from '@angular/router';
import { TabScrollerService } from '../tabscroller.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { uptime } from 'os';

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

    // Josh: Added to track fps
    let lastLoop = performance.now();

   p.preload = () => {
      
      s = p.loadShader('../../assets/Map/Shaders/colorfrag.glsl', '../../assets/Map/Shaders/colorvert.glsl');

      // Building and floor textures
      buildingOff = p.loadImage('../../assets/Map/Textures/buildingoff.png');
      buildingOn = p.loadImage('../../assets/Map/Textures/buildingon.png');
      floor = p.loadImage('../../assets/Map/Textures/mapglow.png');

      // Initialize buildings
      buildings = [
        // Building parameters are: NAME, X, Y, Z, rotX, rotY, rotZ, SCALE, MODEL, URL
        new Building("Band Building", -320, 10, 23, -90, 0, 0, 11, p.loadModel('../../assets/Map/Models/bandBuilding.obj'), "http://192.168.1.15:80/"),
        new Building("Bogard", 380, -20, 20, 270, 270, 0, 18, p.loadModel('../../assets/Map/Models/bogard.obj'), "http://192.168.1.4:80/"),
        new Building("Carson Taylor", 315, 190, 23, -90, 0, 0, 16, p.loadModel('../../assets/Map/Models/carsonTaylor.obj'), "http://192.168.1.6:80/"),
        new Building("COBB", 535, -200, 0, 90, 270, 0, 26, p.loadModel('../../assets/Map/Models/cobb.obj'), "http://192.168.1.14:80/"),
        new Building("Engineering Annex", 410, 150, 23, -90, 0, 0, 11, p.loadModel('../../assets/Map/Models/engineeringAnnex.obj'), "http://192.168.1.9:80/"),
        new Building("GTM", -50, -325, 0, 90, -174, 0, 25, p.loadModel('../../assets/Map/Models/gtm.obj'), "http://192.168.1.8:80/"),
        new Building("Hale", -270, -290, 0, -90, 0, 180, 10, p.loadModel('../../assets/Map/Models/hale.obj'), "http://192.168.1.7:80/"),
        new Building("Howard", 155, -40, 0, -90, 0, 180, 12, p.loadModel('../../assets/Map/Models/howard.obj'), "http://192.168.1.10:80/"),
        new Building("IFM", -430, 320, 0, -90, 0, -180, 13, p.loadModel('../../assets/Map/Models/ifm.obj'), "http://192.168.1.16:80/"),
        new Building("Keeny", 265, -150, 0, 90, 90, 0, 13, p.loadModel('../../assets/Map/Models/keeny.obj'), "http://192.168.1.5:80/"),
        new Building("Nethkin", 510, 130, 0, 90, 180, 0, 14, p.loadModel('../../assets/Map/Models/nethkin.obj'), "http://192.168.1.3:80/"),
        new Building("Power Plant", -240, 170, 23, -90, 90, 0, 12, p.loadModel('../../assets/Map/Models/powerPlant.obj'), "http://192.168.1.18:80/"),
        new Building("South Hall", -500, 200, 23, 0, 0, 0, 13, p.loadModel('../../assets/Map/Models/southHall.obj'), "http://192.168.1.17:80/"),
        new Building("Student Center", -20, -75, 0, 90, 195, 0, 14, p.loadModel('../../assets/Map/Models/studentCenter.obj'), "http://192.168.1.11:80/"),
        new Building("Tolliver", -130, 40, 23, -90, 163, 0, 15, p.loadModel('../../assets/Map/Models/tolliver.obj'), "http://192.168.1.12:80/"),
        new Building("University Hall", 300, -290, 0, 90, 195, 0, 23, p.loadModel('../../assets/Map/Models/cobb.obj'), "http://192.168.1.14:80/"),
        new Building("Woodard", -325, -100, 20, 270, 90, 0, 13, p.loadModel('../../assets/Map/Models/woodard.obj'), "http://192.168.1.13:80/"),
        new Building("Wyly", 125, -290, 0, 90, 15, 0, 18, p.loadModel('../../assets/Map/Models/wyly.obj'), "http://192.168.1.2:80/")
      ]; 
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

      p.texture(floor);
      p.box(1152, 1152, 2);

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

      angle += 0.004;

      // Josh: Calculates fps and writes it to console
      var thisLoop = performance.now();
      var fps = Math.round(1000 / (thisLoop - lastLoop));
      lastLoop = thisLoop;
      //console.log(fps);
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