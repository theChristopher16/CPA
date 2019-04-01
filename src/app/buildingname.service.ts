import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingNameService {
  public buildingNameBool$ = false;

  constructor(private router: Router) { }

  getNameBool() {
    return this.buildingNameBool$;
  }

  setNameBool(name: boolean) {
    this.buildingNameBool$ = name;
  }
}
