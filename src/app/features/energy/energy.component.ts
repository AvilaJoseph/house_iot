import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EnergyStats } from "./energy-stats/energy-stats.component";

@Component({
  selector: 'home-energy',
  imports: [EnergyStats],
  templateUrl: './energy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnergyComponent { 

}
