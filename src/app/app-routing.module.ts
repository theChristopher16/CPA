import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { UsersComponent } from './users/users.component';
import { StatsComponent } from './stats/stats.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
