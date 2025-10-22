import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devices-page',
  imports: [],
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Devices { }
