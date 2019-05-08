import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeedControllerService {

  public speedval$ = 4;

  constructor(private router: Router) { }

  getSpeed() {
    return this.speedval$;
  }

  setSpeed(s: number) {
    this.speedval$ = s;
  }
}
