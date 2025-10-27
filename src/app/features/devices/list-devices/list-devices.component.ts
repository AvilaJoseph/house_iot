import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devices-list-devices',
  imports: [],
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDevices { }
