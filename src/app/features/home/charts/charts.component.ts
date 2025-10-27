import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TemperatureComponent } from "./temperature-charts/temperature-charts.component";
import { ConsumeCharts } from "./consume-charts/consume-charts.component";
import { WaterCharts } from "./water-charts/water-charts.component";
import { QualityairCharts } from "./qualityair-charts/qualityair-charts.component";


@Component({
    selector: 'home-charts',
    templateUrl: './charts.component.html',
    imports: [TemperatureComponent, ConsumeCharts, WaterCharts, QualityairCharts],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ChartsComponent { }