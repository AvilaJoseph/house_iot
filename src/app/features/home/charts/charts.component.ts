import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TemperatureComponent } from "./temperature-charts/temperature-charts.component";
import { ConsumeCharts } from "./consume-charts/consume-charts.component";
import { WaterCharts } from "./water-charts/water-charts.component";
import { QualityairCharts } from "./qualityair-charts/qualityair-charts.component";
import { LucideAngularModule, Thermometer, Droplet, Zap, AlertCircle } from 'lucide-angular';

@Component({
  selector: 'home-charts',
  templateUrl: './charts.component.html',
  imports: [TemperatureComponent, ConsumeCharts, WaterCharts, QualityairCharts, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsComponent {
  Thermometer = Thermometer;
  Droplet = Droplet;
  Zap = Zap;
  AlertCircle = AlertCircle;
}
