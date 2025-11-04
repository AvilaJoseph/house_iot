import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EnergyStats } from "./energy-stats/energy-stats.component";
import { EnergyCharts } from "./energy-charts/energy-charts.component";
import { ListEnergy } from "./list-energy/list-energy.component";

@Component({
  selector: 'home-energy',
  imports: [EnergyStats, EnergyCharts, ListEnergy],
  templateUrl: './energy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnergyComponent { 

}
