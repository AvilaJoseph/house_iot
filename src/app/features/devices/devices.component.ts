import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopbarDevices } from "./topbar-devices/topbar-devices.component";
import {  ButtonsListComponent } from "./buttons-list/buttons-list.component";
import { ListDevices } from './list-devices/list-devices.component';

@Component({
  selector: 'devices-page',
  imports: [TopbarDevices, ButtonsListComponent, ListDevices],
  templateUrl: './devices.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevicesComponent { 
}
