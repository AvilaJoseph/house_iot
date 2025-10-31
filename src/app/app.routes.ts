import { Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomeComponent } from './features/home/home.component';
import { EnergyComponent } from './features/energy/energy.component';
import { DevicesComponent } from './features/devices/devices.component';
import { TemperatureComponent } from './features/home/charts/temperature-charts/temperature-charts.component';
import { Temperature } from './features/temperature/temperature.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'devices', component: DevicesComponent},
      { path: 'energy', component: EnergyComponent},
      { path: 'temperature', component: Temperature},
    ],
  }
];
