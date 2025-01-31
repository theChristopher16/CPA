import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabScrollerService {

  private scrollTabBoolSource = new Subject<boolean>();
  // public scrollTabBool$ = this.scrollTabBoolSource.asObservable();
  public scrollTabBool$ = false; // CHANGE TO TRUE TO ENABLE AUTO SCROLLING

  constructor(private router: Router) { }

  getScrollBool() {
    // this.router.navigate(['users']);
    // this.scrollTabBoolSource.next();
    return this.scrollTabBool$;
  }

  // used to turn auto scroll on/off
  setScrollBool(scroll: boolean) {
    this.scrollTabBool$ = scroll;
  }
}
