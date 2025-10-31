import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TemperatureStats } from "./temperature-stats/temperature-stats.component";

@Component({
  selector: 'home-temperature',
  imports: [TemperatureStats],
  templateUrl: './temperature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Temperature { }
