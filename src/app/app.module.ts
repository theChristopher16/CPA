import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MapComponent } from './map/map.component';
import { UsersComponent } from './users/users.component';
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
import {MatSliderModule} from '@angular/material/slider';
import { ServicesDisplayComponent } from './services-display/services-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MapComponent,
    UsersComponent,
    StatsComponent,
    InfoComponent,
    HamburgerMenuComponent,
    BottomSheetMenu,
    ServicesDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    SlideshowModule,
    MatSliderModule
  ],
  entryComponents: [
    BottomSheetMenu
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
