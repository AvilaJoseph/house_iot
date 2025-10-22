import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatsComponent } from "../stats/stats.component";
import { HomePlanComponent } from "../home-plan/home-plan.component";
import { TemperatureComponent } from "../charts/temperature-charts/temperature-charts.component";

@Component({
  selector: 'content-home-page',
  imports: [StatsComponent, HomePlanComponent, ],
  templateUrl: './content-home.component.html',
  styleUrl: './content-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentHomeComponent { }
