import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EnergyStats } from "./energy-stats/energy-stats.component";
import { EnergyCharts } from "./energy-charts/energy-charts.component";

@Component({
  selector: 'home-energy',
  imports: [EnergyStats, EnergyCharts],
  templateUrl: './energy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnergyComponent { 

}
