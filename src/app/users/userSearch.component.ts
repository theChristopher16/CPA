import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'search',
    template: `
      <input #newHero
        (keyup.enter)="addHero(newHero.value)"
        (blur)="addHero(newHero.value); newHero.value='' ">
   
      <button (click)="addHero(newHero.value)">Add</button>
   
      <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
    `
  })
  export class UserSearchComponent {
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(newHero: string) {
      if (newHero) {
        this.heroes.push(newHero);
      }
    }
  }