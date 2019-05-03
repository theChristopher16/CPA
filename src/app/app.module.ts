import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MapComponent } from './map/map.component';
import { UsersComponent, PlayerSearchMenu } from './users/users.component';
import { UserSearchComponent } from './users/userSearch.component';
import { StatsComponent } from './stats/stats.component';
import { InfoComponent } from './info/info.component';

import { HttpClientModule } from '@angular/common/http'; import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BottomSheetMenuComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { SlideshowModule } from 'ng-simple-slideshow';
import { MatSliderModule } from '@angular/material/slider';
import { ServicesDisplayComponent } from './services-display/services-display.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import { UserFormComponent } from './user-form/user-form.component';
import {MatInputModule} from '@angular/material/input';
import { PlayercardComponent } from './playercard/playercard.component';
import {MatDividerModule} from '@angular/material/divider';

/*export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 1883,
  path: '/mqtt'
};*/

// @Component({
//   template: `
//     <h1></h1>
//   `
// })
/*export class ExampleComponent implements OnDestroy {
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
*/
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
    PlayercardComponent,
    PlayerSearchMenu,
    BottomSheetMenuComponent,
    ServicesDisplayComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    SlideshowModule,
    MatSliderModule,
    MatDialogModule,
    MatInputModule,
    MatDividerModule
  ],
  entryComponents: [
    BottomSheetMenuComponent,
    UserFormComponent,
    PlayerSearchMenu,
    BottomSheetMenuComponent
],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

