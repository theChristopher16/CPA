import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, OnDestroy } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MapComponent } from './map/map.component';
import { UsersComponent } from './users/users.component';
import { UserSearchComponent } from './users/userSearch.component';
import { StatsComponent } from './stats/stats.component';
import { InfoComponent } from './info/info.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { HttpClientModule } from '@angular/common/http'; import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BottomSheetMenu } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { SlideshowModule } from 'ng-simple-slideshow';
import { MatSliderModule } from '@angular/material/slider';
import { ServicesDisplayComponent } from './services-display/services-display.component';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ToastrModule } from 'ngx-toastr';
import {
  IMqttMessage,
  MqttModule,
  IMqttServiceOptions,
  MqttService
} from 'ngx-mqtt';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 1883,
  path: '/mqtt'
};

@Component({
  template: `
    <h1></h1>
  `
})
export class ExampleComponent implements OnDestroy {
  private subscription: Subscription;
  public message: string;

  constructor(private _mqttService: MqttService) {
    this.subscription = this._mqttService.observe('CoreElectronics/test').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MapComponent,
    UsersComponent,
    UserSearchComponent,
    StatsComponent,
    InfoComponent,
    HamburgerMenuComponent,
    BottomSheetMenu,
    ServicesDisplayComponent,
    ExampleComponent

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    HttpClientModule,
    MatCardModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    SlideshowModule,
    MatSliderModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  entryComponents: [
    BottomSheetMenu
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

