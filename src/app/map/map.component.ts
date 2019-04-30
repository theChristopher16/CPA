import { Component, OnInit, Input } from '@angular/core';
import * as p5 from '../../../node_modules/p5/';
import { Router } from '@angular/router';
import { TabScrollerService } from '../tabscroller.service';
import { NavigateRoutes } from '../sidebar/sidebar.component';
import { SpeedControllerService } from '../speedcontroller.service';
import { BuildingNameService } from '../buildingname.service';

// Global? dictionary that holds port80 status for pis
const dict = {
  'Wyly': true,
  'Nethkin': true,
  'Bogard': true,
  'Keeny': true,
  'Carson Taylor': true,
  'Hale': true,
  'GTM': true,
  'Engineering Annex': true,
  'Howard': true,
  'Student Center': true,
  'Tolliver': true,
  'Woodard': true,
  'COBB': true,
  'Band Building': true,
  'IFM': true,
  'South Hall': true,
  'Power Plant': true,
  'University Hall': true
};

const who = {
  'Wyly': 'Adam',
  'Nethkin': '',
  'Bogard': '',
  'Keeny': 'Gabby',
  'Carson Taylor': '',
  'Hale': 'Josh',
  'GTM': '',
  'Engineering Annex': '',
  'Howard': '',
  'Student Center': '',
  'Tolliver': '',
  'Woodard': '',
  'COBB': 'Chris',
  'Band Building': '',
  'IFM': '',
  'South Hall': 'Maddie',
  'Power Plant': '',
  'University Hall': ''
};

class Sun {

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

  constructor(m: any) {
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

  update(angle: number) {
    this.phase = 2 + Math.floor(angle / 90);
    if (this.phase > 4) {
      this.phase = this.phase - 4;
    }

    if (this.phase === 3) {
      this.x -= this.distance_x;
      this.z += this.distance_z;
    } else if (this.phase === 1) {
      this.x += this.distance_x;
      this.z -= this.distance_z;
    } else if (this.phase === 2) {
      this.x -= this.distance_x;
      this.z -= this.distance_z;
    } else if (this.phase === 4) {
      this.x += this.distance_x;
      this.z += this.distance_z;
    }
  }

  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getZ() {
    return this.z;
  }
  getColor_R() {
    return this.color_r;
  }
  getColor_G() {
    return this.color_g;
  }
  getColor_B() {
    return this.color_b;
  }
  getModel() {
    return this.model;
  }
}

class Tree {
  x: number; // Position values
  y: number;
  z: number;
  rx: number; // Rotation values
  ry: number;
  rz: number;
  model: any;
  scale: number;

  constructor(_x: number, _y: number, _z: number, _rx: number, _ry: number, _rz: number, s: number, m: any) {
      this.x = _x;
      this.y = _y;
      this.z = _z;
      this.rx = _rx * Math.PI / 180;
      this.ry = _ry * Math.PI / 180;
      this.rz = _rz * Math.PI / 180;
      this.scale = s;
      this.model = m;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getZ() {
    return this.z;
  }
  getRX() {
    return this.rx;
  }
  getRY() {
    return this.ry;
  }
  getRZ() {
    return this.rz;
  }
  getModel() {
    return this.model;
  }
  getScale() {
    return this.scale;
  }
}

// Trigger events
var transmitting = true;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  @Input() autoTabBool: boolean;
  @Input() speedControllerVal: number;
  private p5: { setSpeedController: (arg0: SpeedControllerService) => void; setBuildingNamer: (arg0: BuildingNameService) => void; };

  TabScroller$: boolean;
  BuildingName$: boolean;
  SpeedController$: number;
  raspPis$: Object;

  public cameraspeed: number;

  constructor(
    private router: Router,
    private tabscroller: TabScrollerService,
    private speedcontroller: SpeedControllerService,
    private buildingnamer: BuildingNameService,
  ) { }

  ngOnInit() {
    this.TabScroller$ = this.tabscroller.getScrollBool();
    this.SpeedController$ = this.speedcontroller.getSpeed();
    this.cameraspeed = this.speedcontroller.getSpeed();
    this.createCanvas();
    NavigateRoutes.getInstance().setCurrentRoute(''); // used to tell sidebar the current route

    setTimeout(() => {
      // autoscroll only if it is true and on this route
      if (this.tabscroller.getScrollBool() && NavigateRoutes.getInstance().getCurrentRoute() === '') {
        this.router.navigate(['users']);
      }
    }, 45000); // 2s
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
    this.p5.setSpeedController(this.speedcontroller);
    this.p5.setBuildingNamer(this.buildingnamer);
  }

  private sketch(p: any) {

    // Variables controlling camera
    let angle = 0;
    let zoomAmount = 0;
    const maxZoom = 100;
    const minZoom = -460;
    let speed_controller: { getSpeed: () => number; };
    let building_namer: { getNameBool: () => any; };

    // Textures
    let buildingOn: any;
    let buildingOff: any;
    let buildingOcc: any;
    let buildingName: any;
    let concrete: any;
    let floor: any;
    let sunshine: any;
    let bark: any;
    let metal;

    // Models
    let road;
    let buildings:Building[];
    let sun;
    let trees:Tree[];
    let transmitter;
    let transmit_ring;

    // Shaders
    let colorShader: any;
    let fogShader: any;

    // Transmit counter
    let t_counter = 0;

    // Josh: Added to track fps
    let lastLoop = performance.now();

  p.setSpeedController = (speedcontroller: any) => {
    speed_controller = speedcontroller;
  };
  p.setBuildingNamer = (buildingnamer: any) => {
    building_namer = buildingnamer;
  };

   p.preload = () => {

      // Initialize shaders
      colorShader = p.loadShader('../../assets/Map/Shaders/color.vert', '../../assets/Map/Shaders/color.frag');
      fogShader = p.loadShader('../../assets/Map/Shaders/fog.vert', '../../assets/Map/Shaders/fog.frag');

      // Initialize models
      sun = new Sun(p.loadModel('../../assets/Map/Models/sun.obj'));
      road = p.loadModel('../../assets/Map/Models/road.obj');
      transmitter = p.loadModel('../../assets/Map/Models/transmitter.obj');
      transmit_ring = p.loadModel('../../assets/Map/Models/transmitring.obj');

      // Initialize textures
      buildingOff = p.loadImage('../../assets/Map/Textures/buildingoff.png');
      buildingOn = p.loadImage('../../assets/Map/Textures/buildingon.png');
      buildingOcc = p.loadImage('../../assets/Map/Textures/buildingoccupied.png');
      buildingName = p.loadImage('../../assets/Map/Textures/buildingname.png');
      sunshine = p.loadImage('../../assets/Map/Textures/sun.png');
      concrete = p.loadImage('../../assets/Map/Textures/road.png');
      floor = p.loadImage('../../assets/Map/Textures/floor.png');
      bark = p.loadImage('../../assets/Map/Textures/tree.png');
      metal = p.loadImage('../../assets/Map/Textures/transmitter.png');

      // Initialize buildings
      buildings = [
        // Building parameters are: NAME, X, Y, Z, rotX, rotY, rotZ, SCALE, MODEL, NAME, URL
        new Building('Wyly', 125, -290, 170, 90, 15, 180, 18, p.loadModel('../../assets/Map/Models/wyly.obj'), p.loadModel('../../assets/Map/Models/wyly_name.obj'), 'http://10.16.17.2:80/'),
        new Building('Nethkin', 510, 130, 0, 90, 180, 0, 14, p.loadModel('../../assets/Map/Models/nethkin.obj'), p.loadModel('../../assets/Map/Models/nethken_name.obj'), 'http://10.16.17.3:80/'),
        new Building('Bogard', 380, -20, 30, 270, 270, 0, 18, p.loadModel('../../assets/Map/Models/bogard.obj'), p.loadModel('../../assets/Map/Models/bogard_name.obj'), 'http://10.16.17.4:80/'),
        new Building('Keeny', 265, -150, 30, 270, 90, 0, 13, p.loadModel('../../assets/Map/Models/keeny.obj'), p.loadModel('../../assets/Map/Models/keeny_name.obj'), 'http://10.16.17.5:80/'),
        new Building('Carson Taylor', 315, 190, 23, -90, 0, 0, 16, p.loadModel('../../assets/Map/Models/carsonTaylor.obj'), p.loadModel('../../assets/Map/Models/carsonTaylor_name.obj'), 'http://10.16.17.6:80/'),
        new Building('Hale', -270, -290, 0, -90, 0, 180, 10, p.loadModel('../../assets/Map/Models/hale.obj'), p.loadModel('../../assets/Map/Models/hale_name.obj'), 'http://10.16.17.7:80/'),
        new Building('GTM', -50, -325, 35, 90, -174, 180, 25, p.loadModel('../../assets/Map/Models/gtm.obj'), p.loadModel('../../assets/Map/Models/gtm_name.obj'), 'http://10.16.17.8:80/'),
        new Building('Engineering Annex', 410, 150, 23, -90, 0, 0, 11, p.loadModel('../../assets/Map/Models/engineeringAnnex.obj'), p.loadModel('../../assets/Map/Models/engineeringAnnex_name.obj'), 'http://10.16.17.9:80/'),
        new Building('Howard', 155, -40, 0, -90, 0, 180, 12, p.loadModel('../../assets/Map/Models/howard.obj'), p.loadModel('../../assets/Map/Models/howard_name.obj'), 'http://10.16.17.10:80/'),
        new Building('Student Center', -20, -55, 30, 90, 15, 180, 12, p.loadModel('../../assets/Map/Models/studentCenter.obj'), p.loadModel('../../assets/Map/Models/studentCenter_name.obj'), 'http://10.16.17.11:80/'),
        new Building('Tolliver', -130, 40, 23, -90, 163, 0, 15, p.loadModel('../../assets/Map/Models/tolliver.obj'), p.loadModel('../../assets/Map/Models/tolliver_name.obj'), 'http://10.16.17.12:80/'),
        new Building('Woodard', -325, -100, 20, 270, 90, 0, 13, p.loadModel('../../assets/Map/Models/woodard.obj'), p.loadModel('../../assets/Map/Models/woodard_name.obj'), 'http://10.16.17.13:80/'),
        new Building('COBB', 535, -200, 55, 270, 0, 0, 26, p.loadModel('../../assets/Map/Models/cobb.obj'), p.loadModel('../../assets/Map/Models/cobb_name.obj'), 'http://10.16.17.14:80/'),
        new Building('Band Building', -320, 10, 23, -90, 0, 0, 11, p.loadModel('../../assets/Map/Models/bandBuilding.obj'), p.loadModel('../../assets/Map/Models/bandBuilding_name.obj'), 'http://10.16.17.15:80/'),
        new Building('IFM', -430, 320, 0, -90, 0, -180, 13, p.loadModel('../../assets/Map/Models/ifm.obj'), p.loadModel('../../assets/Map/Models/ifm_name.obj'), 'http://10.16.17.16:80/'),
        new Building('South Hall', -500, 200, 39, 270, 0, 0, 12, p.loadModel('../../assets/Map/Models/southHall.obj'), p.loadModel('../../assets/Map/Models/southHall_name.obj'), 'http://10.16.17.17:80/'),
        new Building('Power Plant', -240, 170, 23, -90, 90, 0, 12, p.loadModel('../../assets/Map/Models/powerPlant.obj'), p.loadModel('../../assets/Map/Models/powerPlant_name.obj'), 'http://10.16.17.18:80/'),
        new Building('University Hall', 300, -290, 30, 90, 195, 180, 23, p.loadModel('../../assets/Map/Models/cobb.obj'), p.loadModel('../../assets/Map/Models/cobb_name.obj'), 'http://10.16.17.19:80/'), // Same model as COBB
      ];

      // Initialize trees

      trees = [];
    
      let positionList = [[325, -250],[175, -200],[100, -125], [-325,200], [100,375],[-250,425], [325,550],[525,50],[-250,-450],[280,-450]]
      for(let i = 0; i < positionList.length; i++){
        trees[i] = new Tree(positionList[i][0], positionList[i][1], 5, 90, 15, 0, 10, p.loadModel('../../assets/Map/Models/tree.obj'));

      }
    };

    p.setup = () => {
      const cnv = p.createCanvas(window.innerWidth * 0.765, window.innerHeight, p.WEBGL);
      cnv.parent('myContainer');
      cnv.mouseWheel(zoom);
      // Josh: Zoom in and out of the map using the scroll wheel
      function zoom(event: { deltaY: number; }) {
        if (event.deltaY < 0) {
          if (zoomAmount < maxZoom) {
            zoomAmount += 20;
          }
        } else {
          if (zoomAmount > minZoom) {
            zoomAmount -= 20;
          }
        }
      }
    };

    p.draw = () => {
      // Draw background color
      // Josh: Changed background color to fluctuate between our color scheme
      const r = 242 - Math.abs(242 * p.sin(angle * Math.PI / 180));
      const g = 13 + Math.abs(242 * p.sin(angle * Math.PI / 180));
      const b = 255;
      p.background(r, g, b);

      // colorShader.setUniform('angle', angle * 3);
      // colorShader.setUniform('resolution', [1000, 1000]);
      // p.shader(colorShader);
      // Move camera
      p.noStroke(0);
      // Josh: Rotate the camera based on zoom. When zoomed all the way out, camera faces down, when zoomed all the way in, camera faces up.
      p.rotateX(1 + zoomAmount / 500);
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
      p.rotateX(270 * Math.PI / 180);
      p.texture(concrete);
      p.model(road);
      p.pop();

      // Draw buildings
      for (const b of buildings) {
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
        if (dict[b.getName()] && who[b.getName()] === '') {
          p.texture(buildingOn);
        } else if (dict[b.getName()] && who[b.getName()] !== '') {
          p.texture(buildingOcc);
        } else {
          p.texture(buildingOff);
        }
        // Model
        p.model(b.getModel());
        p.pop();
      }
      // Josh: If building names toggle is on, draw building name models
      if (building_namer.getNameBool()) {
        for (const b of buildings) {
          p.push();
          // Get name into position
          p.translate(b.getX(), b.getY(), b.getZ() + 50);
          if (b.getName() === 'Hale') {
            p.translate(0, 0, 50); // fix Hale name stuck inside building
          }
          p.rotateX(90 * Math.PI / 180);
          p.rotateY(angle * 20 * Math.PI / 180);
          // Scale
          p.scale(40);
          // Texture
          p.texture(buildingName);

          // Model
          p.model(b.getNameModel());
          p.pop();
        }
      }

      // Trigger events
      if(transmitting){
        // Josh: Draw transmitter on IFM
        p.push();
        p.scale(17);
        p.rotateX(90 * Math.PI/180);
        p.translate(-23, 2, -20);
        p.texture(metal);
        p.model(transmitter);
        p.pop();

        // Draw rings
        let ringDist = 3;
        let ringSpeed = 0.1;
        let numRings = 5;
        for(let i = 0; i < numRings; i++){
          p.push();
          p.scale(17);
          p.rotateX(90 * Math.PI/180);
          p.translate(-23 + i * ringDist + t_counter, 3 + i * ringDist + t_counter, -20);
          p.texture(metal);
          p.model(transmit_ring);
          p.pop();
        }

        t_counter = t_counter + ringSpeed;
        if(t_counter >= ringDist){
          t_counter = 0;
        }
      }

      // Draw trees
      for (const t of trees) {
        p.push();
        // Get tree into position
        p.translate(t.getX(), t.getY(), t.getZ());
        // Rotate tree
        p.rotateX(t.getRX());
        p.rotateY(t.getRY());
        p.rotateZ(t.getRZ());
        // Scale
        p.scale(t.getScale());
        // Texture
        p.texture(bark);
        // Model
        p.model(t.getModel());
        p.pop();
      }


      // Josh: Lighting based on sun height
      p.ambientLight(210 + 40 * (sun.getZ() / 1800));
      // sun max height = 1798
      // sun min height = -1801

      // Josh: Sun stuff
      p.push();
      sun.update(angle);
      p.pointLight(sun.getColor_R(), sun.getColor_G(), sun.getColor_B(), sun.getX(), sun.getY(), sun.getZ());

      p.translate(sun.getX(), sun.getY(), sun.getZ());
      p.rotateX(-90 * Math.PI / 180);
      p.scale(250);
      p.texture(sunshine);
      p.model(sun.getModel());
      p.pop();

      angle += 0.05;
      if (angle === 360) {
        angle = 0;
      }

      // Josh: Calculates fps and writes it to console
      const thisLoop = performance.now();
      lastLoop = thisLoop;
    };
  }

  public getDict() {
    return dict;
  }

  // Used to send who is at what PI to side panel
  public getWho() {
    return who;
  }
}



// Josh: Made building class to refactor code
class Building {
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

  constructor(
    n: string,
    _x: number,
    _y: number,
    _z: number,
    _rx: number,
    _ry: number,
    _rz: number,
    s: number,
    m: any,
    nm: any,
    _url: string) {
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
  getName() {
    return this.name;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getZ() {
    return this.z;
  }
  getRX() {
    return this.rx;
  }
  getRY() {
    return this.ry;
  }
  getRZ() {
    return this.rz;
  }
  getModel() {
    return this.model;
  }
  getNameModel() {
    return this.nameModel;
  }
  getScale() {
    return this.scale;
  }
  isUp() {
    return this.up;
  }

  // Setters
  setUp(b: boolean) {
    this.up = b;
  }
}
