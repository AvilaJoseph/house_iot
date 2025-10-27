import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopbarDevices } from "./topbar-devices/topbar-devices.component";

@Component({
  selector: 'devices-page',
  imports: [TopbarDevices],
  templateUrl: './devices.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevicesComponent { }
